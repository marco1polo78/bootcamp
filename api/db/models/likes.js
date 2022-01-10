const mongoose = require('mongoose');
const { Schema } = mongoose;

const likeSchema = Schema({
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})

const Like = mongoose.model('Like', likeSchema);

module.exports = {
    Like
}
