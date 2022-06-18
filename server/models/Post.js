const Mongoose = require('mongoose')

const PostSchema = new Mongoose.Schema({
    body: {
        type: String
    },
    author: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    challenge: {
        type: Number,
    },
    isSpecialPost: Boolean,
    day: {
        type: Number
    }
}, { timestamps: true })

module.exports = Mongoose.model('Post', PostSchema, 'Posts')