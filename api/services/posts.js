const { postsDao } = require('../dao/index');

async function getPostsList (options) {
    const posts = await postsDao.getPostsList(options);
    return {
        data: posts
    };
}

async function addPost(options) {
    try {
        const post = await postsDao.addPost(options);
        return {
            data: post
        };
    } catch (err) {
        throw err;
    }
}

async function updatePost(options) {
    try {
        await postsDao.updatePost(options);
    } catch (err) {
        throw err;
    }
}

async function removePost(options) {
    try {
        await postsDao.removePost(options);
        return {
            data: {}
        };
    } catch (err) {
        throw err;
    }
}

async function getPostById(options) {
    try {
        const post = await postsDao.getPostById(options);
        return {
            data: post
        };
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getPostsList,
    addPost,
    updatePost,
    removePost,
    getPostById
}
