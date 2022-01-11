const express = require("express");
const router = express.Router();

const { addUser, getUserById } = require('./controller');

router
    .post('/', addUser)
    .get('/:_id', getUserById)


module.exports = router;