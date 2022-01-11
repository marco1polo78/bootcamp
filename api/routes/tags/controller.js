const { tags } = require('../../services/index');

async function getTagsList(req, res, next) {
    try {
        const result = await tags.getTagsList();
        res.status(200).send(result.data);
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        })
    }
}

module.exports = {
    getTagsList
}
