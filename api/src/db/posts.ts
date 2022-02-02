import { Schema, model } from "mongoose";

const postShema = new Schema({
    authorId: {
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
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: false
    }],
    tags: [{
        type: String
    }]
});

const Post = model('Post', postShema);

export default Post;