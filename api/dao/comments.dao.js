const { Comment } = require('../db/models/comments');
const { Post } = require('../db/models/posts');

async function addComment(options) {
    try {
        const result = await Comment.create(options);
        await Post.findOneAndUpdate({ _id: result.postId }, { $push: { comments: result._id } } )
        return result;
    } catch (err) {
        throw err;
    }
}

async function removeComment({_id}) {
    try {
        const result = await Comment.findOneAndRemove({_id});
        await Post.findOneAndUpdate({ _id: result.postId }, { $pull: { comments: result._id } } )
    } catch (err) {
        throw err;
    }
}

async function updateComment({_id, options}) {
    try {
        const result = await Comment.findOneAndUpdate(_id, options);
        return result;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addComment,
    removeComment,
    updateComment
}
