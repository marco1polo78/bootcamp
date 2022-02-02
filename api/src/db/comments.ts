import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    commentText: {
        type: String,
        required: true
    }
});

const Comment = model('Comment', commentSchema);

export default Comment;