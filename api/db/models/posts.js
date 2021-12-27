const mongoose = require('mongoose');
const { Schema } = mongoose;

const likeSchema = Schema({
    author: mongoose.Types.ObjectId,
    postId: { type: Schema.Types.ObjectId, ref: 'Post' }
})

const commentSchema = Schema({
    textmessage: {
        required: true,
        type: String
    },
    author: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    postId: { type: Schema.Types.ObjectId, ref: 'Post' }
})

const postSchema = Schema({
    userName: {
        type: String,
        required: true
    },
    datePost: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    textarea: {
        type: String,
        required: true
    },
    likes: [{ type: Schema.Types.ObjectId, ref: 'Like' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

const Post = mongoose.model('Post', postSchema);
const Like = mongoose.model('Like', likeSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Post, Like, Comment };