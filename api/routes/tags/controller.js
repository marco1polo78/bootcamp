const mongoose = require('mongoose');
const { Post } = require('../../db/models/posts');
const { Tag } = require('../../db/models/tags');

async function addTag(data) {
    const tag = new Tag({
        tagName: data.tagName,
        postId: [],
      });
    tag.save();
    return {
        status: 200
    };
}

async function removeTag(id) {
    await Tag.remove({_id: Tag._id});
    return {
        status: 400
    }
}

module.exports = {
    addTag,
    removeTag
}