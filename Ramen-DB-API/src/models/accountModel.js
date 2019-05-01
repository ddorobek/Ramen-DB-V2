let mongoose = require('mongoose')

let accountSchema = new mongoose.Schema({
    name: String,
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true

    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema)