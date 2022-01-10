const { Tag } = require('../db/models/tags');

async function addTag(options) {
    try {
        const result = await Tag.create(options);
        return result;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addTag
}