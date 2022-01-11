const { likesDao } = require('../dao/index');

async function addLike(options) {
    try {
        const like = await likesDao.addLike(options);
        return {
            data: like
        };
    } catch (err) {
        throw err;
    }
}

async function removeLike(options) {
    try {
        await likesDao.removeLike(options);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addLike,
    removeLike
}
