const { likes } = require('../../services');

async function addLike(req, res, next) {
    const {
        authorId,
        postId,
        createdAt
    } = req.body;
    try {
        const options = {
            authorId,
            postId,
            createdAt
        };
        const result = await likes.addLike(options);
        res.status(200).send(result.data);
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

async function removeLike(req, res, next) {
    const { _id } = req.params;
    try {
        await likes.removeLike({_id});
        res.status(200).send();
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

module.exports = {
    addLike,
    removeLike
}