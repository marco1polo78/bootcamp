const express = require("express");
const router = express.Router();

const { getPosts, addPosts, removePost } = require('./controller');

router
    .get('/', async (req, res) => {
        res.send(await getPosts())
    })
    .post('/', async (req, res) => {
        res.send(await addPosts(req.body));
    })
    .delete('/:id', async (req, res) => {
        console.log(req.params);
        res.send(await removePost(req.params.id));
    })

module.exports = router;