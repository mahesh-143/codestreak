const Mongoose = require('mongoose')

const UserSchema = new Mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    posts: [
        {
            type: Mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    streak:{
        type:Number,
        default: 0
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    profile: {
        type: String,
        default: 'profile.png'

    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    },
    verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = Mongoose.model('User', UserSchema, 'Users')