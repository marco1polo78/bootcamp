const { Like } = require('../db/models/likes');
const { Post } = require('../db/models/posts');

async function addLike(options) {
    try {
        const result = await Like.create(options);
        await Post.findOneAndUpdate({ _id: result.postId }, { $push: { likes: result._id } } )
        return result;
    } catch (err) {
        throw err;
    }
}

async function removeLike({_id}) {
    try {
        const result = await Like.findOneAndRemove({_id});
        await Post.findOneAndUpdate({ _id: result.postId }, { $pull: { likes: result._id } } )
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addLike,
    removeLike
}
