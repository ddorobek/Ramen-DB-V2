let mongoose = require('mongoose')

let customerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

//mongoose.model = collections name?
module.exports = mongoose.model('Customer', customerSchema)