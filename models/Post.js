const mongoose = require('mongoose');

// Creates a blueprint for adding to database
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Posts', PostSchema);