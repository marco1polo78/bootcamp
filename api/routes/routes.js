const express = require('express');
const router = express.Router();

const postsRouter = require('./posts/router');
const usersRouter = require('./users/router');
const likesRouter = require('./likes/router');

router.use('/posts', postsRouter);
router.use('/users', usersRouter);
router.use('/likes', likesRouter);

module.exports = router;