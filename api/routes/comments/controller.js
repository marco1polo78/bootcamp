const { comments } = require('../../services');

async function addComment(req, res, next) {
    const {
        authorId,
        textMessage,
        createdAt,
        postId
    } = req.body;
    try {
        const options = {
            authorId,
            textMessage,
            createdAt,
            postId
        };
        const result = await comments.addComment(options);
        res.status(200).send(result.data);
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

async function removeComment(req, res, next) {
    const { _id } = req.params;
    try {
        await comments.removeComment({_id});
        res.status(200).send();
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

async function updateComment(req, res, next) {
    const { _id } = req.params;
    const {
        authorId,
        textMessage,
        createdAt
    } = req.body;
    try {
        const options = {
            authorId,
            textMessage,
            createdAt
        };
        const result = await updateComment({_id, options});
        res.status(200).send(result.data);
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

module.exports = {
    addComment,
    removeComment,
    updateComment
}