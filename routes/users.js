const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch(err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const user = new User({
        uuid: uuid.v4(),
        username: req.body.username,
        email: req.body.email
    })

    try {
        const savedUser = await user.save()
        res.json(savedUser);
    } catch(err) {
        res.json({ message: err })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const users = await User.findOne({ uuid: req.params.id })
        res.json(users)
    } catch(err) {
        res.json({ message: err })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedUser = await User.findOneAndDelete({ uuid: req.params.id })
        res.json(removedUser)
    } catch(err) {
        res.json({ message: err })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const updateUser = await User.findOneAndUpdate(
            {uuid: req.params.id},
            { 
                username: req.body.username,
                email: req.body.email
             })
        res.json(updateUser)
    } catch(err) {
        res.json({ message: err })
    }
})

module.exports = router;