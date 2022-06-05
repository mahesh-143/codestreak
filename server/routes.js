const router = require('express').Router()

const Post = require('./models/Post')
const User = require('./models/User')
const checkUser = require('./utils/checkUser')
const BaseError = require('./utils/BaseError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/auth/signup', async (req, res, next) => {
    try {
        const { email, password, name } = req.body
        const userExist = await User.findOne({ email })
        if (userExist) throw new BaseError(400, 'Account alreday exists')
        const hasedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            email,
            name,
            password: hasedPassword
        })
        const savedUser = await user.save()
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET + savedUser.password, { expiresIn: '60m' })
        const link = `http://localhost:5000/api/auth/${savedUser._id}/${token}`
        console.log(link);
        res.status(200).json({ message: 'Please verify your account, An email has been sent to your mail' })
    } catch (error) {
        next(error)
    }
})
router.post('/auth/login', async (req, res, next) => {
    try {
        const email = req.body.email
        const uPassword = req.body.password
        if (!email && !uPassword) throw new BaseError(400, 'Email and password are required')
        const user = await User.findOne({ email: email })
        if (!user) throw new BaseError(401, 'Email or password is wrong')
        const isSame = await bcrypt.compare(uPassword, user.password)
        if (!isSame) throw new BaseError(401, 'Email or password is wrong')
        if (!user.verified) throw new BaseError(401, "User not verified")
        const { password, __v, updatedAt, createdAt, ...restUser } = user._doc
        const token = jwt.sign({ ...restUser }, process.env.JWT_SECRET)
        res.status(200).json({ message: 'Logged in', user: { ...restUser, token } })
    } catch (error) {
        next(error)
    }
})
router.get('/auth/:id/:token', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) throw new BaseError()
        const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET + user.password)
        if (decoded.id != user._id) throw new BaseError()
        user.verified = true
        const updatedUser = await user.save()
        const { password, __v, updatedAt, createdAt, ...restUser } = updatedUser._doc
        const token = jwt.sign({ ...restUser }, process.env.JWT_SECRET)
        res.status(200).json({ message: 'User verified', user: { ...restUser, token } })
    } catch (error) {
        next(error)
    }
})
router.get('/u/all', async (req, res) => {
    try {
        const users = await User.find({}, "name streak description profile")
        res.status(200).json({ users })
    } catch (error) {
        next(error)
    }
})
router.get('/u/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id, "name streak description profile")
        if (!user) throw new BaseError(404, 'No user found')
        return res.status(200).json({ user })
    } catch (error) {
        next(error)
    }
})
router.patch('/u/:id', checkUser, async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) throw new BaseError(404, "Not found")
        if (!user._id === res.locals.user._id) throw new BaseError(403, 'Unauthorized')
        user.description = req.body.description || user.description
        user.name = req.body.name || user.name
        user.profile = req.body.profile || user.profile
        const updatedUser = await user.save()
        const { password, __v, role, verified, createdAt, updatedAt, ...restUser } = updatedUser._doc
        return res.status(200).json({ message: 'User updated', user: restUser })
    } catch (error) {
        next(error)
    }
})
router.get('/u/:id/posts', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id, "posts").populate('posts')
        if (!user) throw new BaseError(404, 'No user found')
        return res.status(200).json({ posts: user.posts })
    } catch (error) {
        next(error)
    }
})
router.post('/post', checkUser, async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.user._id).populate('posts')
        const lastPost = user.posts[user.posts.length - 1]
        if (!user.posts.length) {
            const newPost = new Post({
                body: req.body.body,
                author: res.locals.user._id,
                challenge: 1
            })
            user.streak++
            user.posts.push(newPost)
            const savedUser = await user.save()
            const post = await newPost.save()
            const { password, __v, role, verified, createdAt, updatedAt, ...restUser } = user._doc
            return res.status(200).json({ message: 'Post created', post, user: restUser })
        }
        const expiresIn = new Date(new Date(lastPost.createdAt).getTime() + 60 * 60 * 24 * 1000)
        const availiableIn = new Date(new Date(lastPost.createdAt).getTime() + 60 * 60 * 24 * 1000)
        const now = new Date()
        const isStreakReset = now > expiresIn
        const canPost = now > availiableIn
        if (!canPost) throw new BaseError(403, 'You cant make more than 1 post in 24 hours')
        if (isStreakReset) {
            const streakResetPost = new Post({
                isSpecialPost: true,
                challenge: lastPost.challenge
            })
            user.streak = 1
            streakResetPost.save()
            const challengeNumber = lastPost.challenge
            const newPost = new Post({
                body: req.body.body,
                author: res.locals.user._id,
                challenge: challengeNumber + 1
            })
            user.posts.push(streakResetPost)
            user.posts.push(newPost)
            const savedUser = await user.save()
            const post = await newPost.save()
            const { password, __v, role, verified, createdAt, updatedAt, ...restUser } = user._doc
            return res.status(200).json({ message: 'Streak resetted', post, user: restUser })

        } else {
            const newPost = new Post({
                body: req.body.body,
                author: res.locals.user._id,
                challenge: lastPost.challenge || 1
            })
            user.streak++
            user.posts.push(newPost)
            const savedUser = await user.save()
            const post = await newPost.save()
            const { password, __v, role, verified, createdAt, updatedAt, ...restUser } = user._doc
            return res.status(200).json({ message: 'Post created', post, user: restUser })
        }
    } catch (error) {
        next(error)
    }

})
router.get('/delete', async (req, res) => {

    await User.deleteMany()
    res.send('ok')
})

module.exports = router