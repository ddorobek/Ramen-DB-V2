let serviceModel = require('../models/serviceModel')
let express = require('express')
let router = express.Router()

// Create new project
// POST localhost:3000/project
router.post('/service', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing')
    }

    if(!req.body.email) {
        // ...
    }

    let model = new serviceModel(req.body)
    model.save()
    .then(doc => {
        if(!doc || doc.length == 0) {
            return res.status(500).send(doc)
        }

        res.status(201).send(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })

})

//GET
router.get('/service', (req, res) => {
    if(!req.query._id) {
        return res.status(400).send('Missing URL parameter: ticketNum')
    }

    serviceModel.findOne({
        _id: req.query._id
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//UPDATE
router.put('/service', (req, res) => {
    if(!req.query._id) {
        return res.status(400).send('Missing URL parameter: ticketNum')
    }

    serviceModel.findOneAndUpdate({
        _id: req.query._id
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//DELETE 
router.delete('/service', (req, res) => {
    if(!req.query._id) {
        return res.status(400).send('Missing URL parameter: email')
    }

    serviceModel.findOneAndRemove({
        _id: req.query._id
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})



module.exports = router
