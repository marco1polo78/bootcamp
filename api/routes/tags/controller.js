const mongoose = require('mongoose');
const { Post } = require('../../db/models/posts');
const { Tag } = require('../../db/models/tags');

async function addTag(data) {
    new Tag({
        tagName: data.tagName,
        postId: [],
      });
    return {
        status: 200
    };
}

async function removeTag(id) {
    await Tag.remove({_id: id});
    return {
        status: 200
    }
}

module.exports = {
    addTag,
    removeTag
}