const mongoose = require("mongoose");

const dbURI =
  "mongodb://ddorobek:<ramennoodles>@cluster0-shard-00-00-k03bu.mongodb.net:27017,cluster0-shard-00-01-k03bu.mongodb.net:27017,cluster0-shard-00-02-k03bu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

const options = {
reconnectTries: Number.MAX_VALUE,
poolSize: 10
};

mongoose.connect(dbURI, {useNewUrlParser: true}, options)
    .then(() => {
        return "Database connection established!";
    })
    .catch(err => {
        return "Error connecting Database instance due to: ", err;
    });

// require any models

require("./models/customerModel.js");