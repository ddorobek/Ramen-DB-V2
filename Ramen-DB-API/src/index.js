let express = require('express')

require('./config.js')
var gridfs = null;
const mongoose = require('mongoose')

let app = express()
let projectRoute = require('./routes/projectRoute')
let serviceRoute = require('./routes/serviceRoute')
let customerRoute = require('./routes/customer')
let path = require('path')
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)

    next()
})

app.use(projectRoute)
app.use(serviceRoute)
app.use(customerRoute)

app.use(express.static('public'))

// Handler for 404 - resource not found
app.use((req, res, next) => {
    res.status(404).send('You are lost')
})

// Handler for 500
app.use((err, req, res, next) => {
    console.error(err.stack)

    res.sendFile(path.join(__dirname, '../public/500.html'))
})

//DB setup
const dbURI = "mongodb://ddorobek:ramennoodles@cluster0-shard-00-00-k03bu.mongodb.net:27017,cluster0-shard-00-01-k03bu.mongodb.net:27017,cluster0-shard-00-02-k03bu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

mongoose.connect(dbURI, {useNewUrlParser: true})
.then(() => {
    console.info("DB connected");
    return "Database connection established!";
})
.catch(err => {
    return "Error connecting Database instance due to: ", err;
});

mongoose.Promise = global.Promise;
mongoose.connection.on('open', () => {
    gridfs = require('mongoose-gridfs')({
        collection: 'customer',
        model: 'customer',
        mongooseConnection: mongoose.connection
    });
});

//Server setup
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.info(`Server has started on ${PORT}`)
})