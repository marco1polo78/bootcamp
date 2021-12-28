const mongoose = require('mongoose');
const { Post } = require('../../db/models/posts');
const { Like } = require('../../db/models/likes');

async function addLike(data) {
    const like = new Like({
        author: new mongoose.Types.ObjectId(data.userId),
        postId: new mongoose.Types.ObjectId(data.postId),
      });
    await Post.updateOne({_id: like.postId}, {$push: {likes: like._id}})
    return {
        status: 200
    };
}

async function removeLike(id) {
    const like = await Like.findById({_id: new mongoose.Types.ObjectId(id)});
    await Post.updateOne({_id: like.postId}, {$pull: {likes: like._id}});
    await Like.remove({_id: like._id});
    return {
        status: 200
    }
}

module.exports = {
    addLike,
    removeLike
}