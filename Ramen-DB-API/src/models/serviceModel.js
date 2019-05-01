let mongoose = require('mongoose')

let serviceSchema = new mongoose.Schema({
    type: String,
    date: Date,
    duration: String,
    customerName: String,
    customerID: String,
    department: String,
    description: String
})

module.exports = mongoose.model('Service', serviceSchema)