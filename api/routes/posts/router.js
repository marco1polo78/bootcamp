const express = require("express");
const router = express.Router();

const { getPostsList, addPost, removePost, updatePost, getPostById } = require('./controller');

router
    .get('/', getPostsList)
    .get('/:_id', getPostById)
    .post('/', addPost)
    .patch('/:_id', updatePost)
    .delete('/:_id', removePost)

module.exports = router;
