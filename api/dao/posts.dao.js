const async = require('async');

const tagsDao = require('./tags.dao');

const { Post } = require('../db/models/posts');
const { Comment } = require('../db/models/comments');
const { Like } = require('../db/models/likes');

async function getPostsList() {
    const results = await Post.find({});
    return results;
}

async function addPost(options) {
    const tags = options.tags;
    delete options.tags;
    const post = await Post.create(options);
    await async.mapSeries(tags, async tag => {
        const result = await tagsDao.addTag({tagName: tag, postId: post._id});
        await Post.findOneAndUpdate({_id: post._id}, { $push: { tags: result._id}});
    });
    return post;
}

async function updatePost({_id, options}) {
    try {
        await Post.findOneAndUpdate(_id, options);
    } catch (err) {
        throw err;
    }
}

async function removePost(options) {
    const { _id } = options;
    try {
        const result = await Post.findOneAndRemove({_id});
        await Comment.deleteMany({ _id: {$in: result.comments} })
        await Like.deleteMany({ _id: {$in: result.likes} })
    } catch (err) {
        throw err;
    }
}

async function getPostById(options) {
    const { _id } = options;
    try {
        const post = await Post.findById(_id);
        return post;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getPostsList,
    addPost,
    updatePost,
    removePost,
    getPostById
}