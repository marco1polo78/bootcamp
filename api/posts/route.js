const express = require("express");
const router = express.Router();

const { getPosts } = require('./controller');

router.get('/', (req, res) => {
    res.send(getPosts())
})

module.exports = router;