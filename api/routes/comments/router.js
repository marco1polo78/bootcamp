const express = require("express");
const router = express.Router();

const { addComment, removeComment, updateComment } = require('./controller');

router
    .post('/', addComment)
    .delete('/:_id', removeComment)
    .patch('/:_id', updateComment)

module.exports = router;