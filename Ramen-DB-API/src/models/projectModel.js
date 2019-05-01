let mongoose = require('mongoose')

let projectSchema = new mongoose.Schema({
    ticketNum: String,
    type: String, //Service or Project
    labels: [String],
    customerName: String,
    customerID: String,
    courseID: String,
    department: String,
    status: String,
    hours: String,
    startDate: Date,
    endDate: Date,
    description: String
})

module.exports = mongoose.model('Project', projectSchema)