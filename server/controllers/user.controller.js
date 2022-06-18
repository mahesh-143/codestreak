const Post = require('./../models/Post')
const User = require('./../models/User')
const BaseError = require('./../utils/BaseError')
exports.getAllUsers = async (req, res, next) => {
    try {
        const limit = req.query.limit || 10
        const page = req.query.page || 1
        const users = await User.find({}, "name streak description profile posts").populate('posts').skip((limit * page) - limit).limit(limit)


        users.map(async (user) => {
            if (!user.posts.length) return user
            if (user.posts[user.posts.length - 1].isSpecialPost) return user
            const lastPost = user.posts[user.posts.length - 1].isSpecialPost ? user.posts[user.posts.length - 2] : user.posts[user.posts.length - 1]
            const expiresIn = new Date(new Date(lastPost.createdAt).getTime() + 20 * 1000)
            const isStreakReset = new Date() > expiresIn
            if (!isStreakReset) return
            const streakResetPost = new Post({
                isSpecialPost: true,
                challenge: lastPost.challenge,
                author: user._id
            })
            user.streak = 0
            await streakResetPost.save()
            user.posts.push(streakResetPost)
            const savedUser = await user.save()
            return savedUser
        })




        res.status(200).json({ users })
    } catch (error) {
        next(error)
    }
}
exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id, "name streak description profile")
        if (!user) throw new BaseError(404, 'No user found')
        return res.status(200).json({ user })
    } catch (error) {
        next(error)
    }
}
exports.updateUser = async (req, res, next) => {
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
}