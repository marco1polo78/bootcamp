const mongoose = require('mongoose');
const { Post, Like } = require('../../db/models/posts');

async function addLike(data) {
    const like = new Like({
        author: new mongoose.Types.ObjectId(data.userId),
        postId: new mongoose.Types.ObjectId(data.postId),
      });
    like.save((err) => {
        console.log(like);
    })
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
        status: 400
    }
}

module.exports = {
    addLike,
    removeLike
}