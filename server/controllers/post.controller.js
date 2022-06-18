const Post = require('./../models/Post')
const User = require('./../models/User')
const BaseError = require('./../utils/BaseError')
exports.createPost = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.user._id).populate('posts')
        if (!user.posts.length) {
            const newPost = new Post({
                body: req.body.body,
                author: res.locals.user._id,
                challenge: 1,
                day: 1
            })
            const post = await newPost.save()
            user.streak++
            user.posts.push(post)
            await user.save()
            return res.status(200).json({ message: 'Post created', post })
        }
        const lastPost = user.posts[user.posts.length - 1]
        const challengeNumber = lastPost.challenge
        const prevDay = lastPost.day || 0
        const expiresIn = new Date(new Date(lastPost.createdAt).getTime() + 20 * 1000)
        const availiableIn = new Date(new Date(lastPost.createdAt).getTime() + 10 * 1000)
        const now = new Date()
        const isStreakReset = lastPost.isSpecialPost ? true : now > expiresIn
        const canPost = lastPost.isSpecialPost ? true : now > availiableIn
        if (!canPost) throw new BaseError(403, 'You cant make more than 1 post in 24 hours')
        if (!isStreakReset) {
            const newPost = new Post({
                body: req.body.body,
                author: res.locals.user._id,
                challenge: challengeNumber || 1,
                day: prevDay + 1
            })
            const post = await newPost.save()
            user.streak++
            user.posts.push(post)
            await user.save()
            return res.status(200).json({ message: 'Post created', post, })
        }
        if (isStreakReset) {
            if (!lastPost.isSpecialPost) {
                const streakResetPost = new Post({
                    isSpecialPost: true,
                    author: res.locals.user._id,
                    challenge: challengeNumber
                })
                await streakResetPost.save()
                user.posts.push(streakResetPost)
            }
            user.streak = 1
            const newPost = new Post({
                body: req.body.body,
                author: res.locals.user._id,
                challenge: challengeNumber + 1,
                day: 1
            })
            const post = await newPost.save()
            user.posts.push(post)
            await user.save()
            return res.status(200).json({ message: 'Streak resetted', post })

        }
    } catch (error) {
        next(error)
    }

}
exports.getPostsByUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id, "posts").populate('posts')
        if (!user) throw new BaseError(404, 'No user found')
        return res.status(200).json({ posts: user.posts })
    } catch (error) {
        next(error)
    }
}
exports.updatePost = async (req, res, next) => {
    res.status(200).json({message:'Post updated'})
}