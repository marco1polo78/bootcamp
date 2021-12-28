const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = Schema({
    textMessage: {
        required: true,
        type: String
    },
    author: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
    Comment
};