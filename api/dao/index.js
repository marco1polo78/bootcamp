const postsDao = require('./posts.dao');
const usersDao = require('./users.dao');
const commentsDao = require('./comments.dao');
const likesDao = require('./likes.dao');
const tagsDao = require('./tags.dao');

module.exports = {
    postsDao,
    usersDao,
    commentsDao,
    likesDao,
    tagsDao
}
