const express = require("express");
const router = express.Router();

const { addLike, removeLike } = require('./controller');

router
    .post('/', addLike)
    .delete('/:_id', removeLike)

module.exports = router;