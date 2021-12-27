const { Post, Like } = require('../../db/models/posts');

async function getPosts() {
    console.log(await Post.find({}));
    return await Post.find({});
}

async function addPosts(post) {
    await Post.create(Object.assign(post));
    return {
        status: 200
    };
}

async function removePost(id) {
    await Post.remove({_id: id});
    await Like.find({postId: id}).remove({});
    return {
        status: 200
    };
}

module.exports = {
    addPosts,
    getPosts,
    removePost
}