const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    uuid: String,
    username: String,
    email: String,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Users', UserSchema);