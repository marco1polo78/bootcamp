const { commentsDao } = require('../dao/index');

async function addComment(options) {
    try {
        const comment = await commentsDao.addComment(options);
        return {
            data: comment
        };
    } catch (err) {
        throw err;
    }
}

async function removeComment(options) {
    try {
        await commentsDao.removeComment(options);
    } catch (err) {
        throw err;
    }
}

async function updateComment(options) {
    try {
        const comment = await commentsDao.addComment(options);
        return {
            data: comment
        };
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addComment,
    removeComment,
    updateComment
}
