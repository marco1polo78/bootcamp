const mongoose = require('mongoose');
const { Schema } = mongoose;

const likeSchema = Schema({
    author: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
})

const Like = mongoose.model('Like', likeSchema);

module.exports = {
    Like
}