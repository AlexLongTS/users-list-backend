const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Return all the posts
router.get('/', async (req,res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch(err) {
        res.json({ message: err })
    }
})

// Creates a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err })
    }
})

// Specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch(err) {
        res.json({ message: err })
    }
})

// Delete post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.findByIdAndDelete(req.params.postId)
        res.json(removedPost)
    } catch(err) {
        res.json({ message: err })
    }
})

// Update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.findOneAndUpdate({__id: req.params.id} , { title: req.body.title })
        res.json(updatePost)
    } catch(err) {
        res.json({ message: err })
    }
})

module.exports = router;