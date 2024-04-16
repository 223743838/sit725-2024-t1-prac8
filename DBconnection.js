
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s223743838:SDcdBJ1YExCSvN8p@cluster0.gpmpazp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect(err => {
    if (err) {
      console.error("Error connecting to MongoDB", err);
      return;
    }
    console.log("Connected to MongoDB");
  });

module.exports = client;
