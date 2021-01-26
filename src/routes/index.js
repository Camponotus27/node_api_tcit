const { Router } = require('express');
const router = Router();

const { getPosts, getPostById, createPost, deletePost} = require('./../controllers/index.controller');

router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);

module.exports = router;