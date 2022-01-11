const express = require("express");
const router = express.Router();

const { getTagsList } = require('./controller');

router
    .get('/', getTagsList)

module.exports = router;