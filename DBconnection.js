
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s223743838:SDcdBJ1YExCSvN8p@cluster0.gpmpazp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = client;
