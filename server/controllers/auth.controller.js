const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./../models/User')
const BaseError = require('./../utils/BaseError')
exports.login = async (req, res, next) => {
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
}
exports.signup = async (req, res, next) => {
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
}
exports.verifyEmail = async (req, res, next) => {
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
}