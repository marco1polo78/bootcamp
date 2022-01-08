const express = require("express");
const router = express.Router();

const { listPosts, addPosts, removePost, updatePost } = require('./controller');

router
    .get('/', async (req, res) => {
        res.send(await listPosts())
    })
    .post('/', async (req, res) => {
        res.send(await addPosts(req.body));
    })
    .patch('/:id', async (req, res) => {
        res.send(await updatePost(req.params.id, req.body));
    })
    .delete('/:id', async (req, res) => {
        console.log(req.params);
        res.send(await removePost(req.params.id));
    })

module.exports = router;