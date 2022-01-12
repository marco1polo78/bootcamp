const express = require("express");
const router = express.Router();
const { toHashPassword, auth } = require('../../middlewares/index');

const { addUser, getUserById, login } = require('./controller');

router
    .post('/', toHashPassword, addUser)
    .post('/login', login)
    .get('/:_id', auth, getUserById)


module.exports = router;