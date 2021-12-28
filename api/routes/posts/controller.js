const { Post } = require('../../db/models/posts');
const { Like } = require('../../db/models/likes');
const { Comment } = require('../../db/models/comments');

async function listPosts() {
    return await Post.find({});
}

async function addPosts(data) {
    await Post.create(data);
    return {
        status: 200
    };
}

async function updatePost(id, data) {
    await Post.findByIdAndUpdate(id, data);
    return {
        status: 200
    }
}

async function removePost(id) {
    await Post.remove({ _id: id });
    await Like.find({ postId: id }).remove({});
    await Comment.find({ postId: id }).remove({});
    return {
        status: 200
    };
}

module.exports = {
    addPosts,
    listPosts,
    removePost,
    updatePost
}