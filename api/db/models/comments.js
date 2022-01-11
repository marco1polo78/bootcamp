const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = Schema({
    textMessage: {
        required: true,
        type: String
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        required: true
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
    Comment
};