const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = Schema({
    userName: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Like',
        required: true
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    }]
});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };