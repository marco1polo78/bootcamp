// const { Post } = require('../../db/models/posts');
// const { Like } = require('../../db/models/likes');
// const { Comment } = require('../../db/models/comments');
const { posts } = require('../../services');

async function getPostsList(req, res, next) {
    try {
        const result = await posts.getPostsList();
        res.status(200).send(result.data);
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

async function addPost(req, res, next) {
    const {
        authorId,
        datePost,
        title,
        description,
        textarea,
        tags
    } = req.body;
    try {
        const options = {
            authorId,
            datePost,
            title,
            description,
            textarea,
            tags
        }
        const result = await posts.addPost(options);
        res.status(200).send(result.data);
    } catch (err){
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

async function updatePost(req, res, next) {
    const { id } = req.params;
    const { 
        authorId,
        datePost,
        title,
        description,
        textarea,
        tags
    } = req.body;
    try {
        const options = {
            _id: id,
            options: {
                authorId,
                datePost,
                title,
                description,
                textarea,
                // tags
            }
        };
        await posts.updatePost(options);
        res.status(200).send();
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

async function removePost(req, res, next) {
    const { _id } = req.params;
    try {
        const options = { _id };
        const result = posts.removePost(options)
        // await Post.remove({ _id: id });
        // await Like.find({ postId: id }).remove({});
        // await Comment.find({ postId: id }).remove({});
        res.status(200).send(result.data);
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

async function getPostById(req, res, next) {
    const { _id } = req.params;
    try {
        const options = { _id };
        const result = await posts.getPostById(options);
        res.status(200).send(result.data);
    } catch (err) { 
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

module.exports = {
    getPostsList,
    addPost,
    removePost,
    updatePost,
    getPostById
}
