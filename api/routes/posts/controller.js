const { Post } = require('../../db/models/posts');
const { Like } = require('../../db/models/likes');
const { Comment } = require('../../db/models/comments');
const { Tag } = require('../../db/models/tags');

async function getPosts() {
    console.log(await Post.find({}));
    return await Post.find({});
}

async function addPosts(data) {
    let tags = [];
    if (data.tags)
        tags = data.tags.map(tag => {
            const result = new Tag({tagName: tag, postId: []});
            result.save();
            return result;
        });
    data.tags = tags.map(tag => tag._id);
    const post = await Post.create(data);
    tags.forEach(tag => {
        tag.postId = post._id;
        tag.save()
    });
    return {
        status: 200
    };
}

async function removePost(id) {
    await Post.remove({ _id: id });
    await Like.find({ postId: id }).remove({});
    await Comment.find({ postId: id }).remove({});
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

module.exports = {
    addPosts,
    getPosts,
    removePost,
    updatePost
}