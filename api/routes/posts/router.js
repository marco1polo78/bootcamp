const express = require("express");
const router = express.Router();
const { auth, checkRole } = require('../../middlewares/index');

const { getPostsList, addPost, removePost, updatePost, getPostById } = require('./controller');

router
    .get('/', getPostsList)
    .get('/:_id', auth, getPostById)
    .post('/', auth, addPost)
    .patch('/:_id', auth, checkRole, updatePost)
    .delete('/:_id', auth, checkRole, removePost)

module.exports = router;
