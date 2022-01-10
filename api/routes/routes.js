const express = require('express');
const router = express.Router();

const postsRouter = require('./posts/router');
const usersRouter = require('./users/router');
const likesRouter = require('./likes/router');
const commentsRouter = require('./comments/router');

router.use('/posts', postsRouter);
router.use('/users', usersRouter);
router.use('/likes', likesRouter);
router.use('/comments', commentsRouter);

module.exports = router;
