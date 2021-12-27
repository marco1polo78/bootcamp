const express = require("express");
const router = express.Router();

const { getPosts, addPosts, removePost, updatePost } = require('./controller');

router
    .get('/', async (req, res) => {
        res.send(await getPosts())
    })
    .post('/', async (req, res) => {
        res.send(await addPosts(req.body));
    })
    .put('/:id', async (req, res) => {
        res.send(await updatePost(req.params.id, req.body));
    })
    .delete('/:id', async (req, res) => {
        console.log(req.params);
        res.send(await removePost(req.params.id));
    })

module.exports = router;