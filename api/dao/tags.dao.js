const { Tag } = require('../db/models/tags');

async function getTagsList() {
    const results = await Tag.find({});
    return results;
}

async function addTag(options) {
    try {
        const result = await Tag.create(options);
        return result;
    } catch (err) {
        throw err;
    }
}

async function findByName({tagName}) {
    try {
        const result = await Tag.findOne({tagName});
        return result;
    } catch (err) {
        throw err;
    }
}

async function updateTagPostId({tagName, postId}) {
    try {
        const result = await Tag.findOneAndUpdate({tagName}, {$push: { postId }});
        return result;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addTag,
    findByName,
    updateTagPostId,
    getTagsList
}