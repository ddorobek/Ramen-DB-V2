let projectModel = require('../models/projectModel')
let express = require('express')
let router = express.Router()

// Create new project
// POST localhost:3000/project
router.post('/project', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing')
    }

    if(!req.body.email) {
        // ...
    }

    let model = new projectModel(req.body)
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
router.get('/project', (req, res) => {
    if(!req.query.ticketNum) {
        return res.status(400).send('Missing URL parameter: ticketNum')
    }

    projectModel.findOne({
        ticketNum: req.query.ticketNum
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//UPDATE
router.put('/project', (req, res) => {
    if(!req.query.ticketNum) {
        return res.status(400).send('Missing URL parameter: ticketNum')
    }

    projectModel.findOneAndUpdate({
        ticketNum: req.query.ticketNum
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
router.delete('/project', (req, res) => {
    if(!req.query.ticketNum) {
        return res.status(400).send('Missing URL parameter: email')
    }

    projectModel.findOneAndRemove({
        ticketNum: req.query.ticketNum
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})



module.exports = router
