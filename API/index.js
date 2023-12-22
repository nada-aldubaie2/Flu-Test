

var express = require("express");
const bodyParser = require('body-parser');
var MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
var cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const CONNECTION_STRING = "mongodb+srv://nadaxadmin:nada.xadmin@nada0x.fmyaxsn.mongodb.net/flutest?retryWrites=true&w=majority";
// mongodb+srv://username:password@clustername.mongodb.net/databaseName?retryWrites=true&w=majority&ssl=true&sslCAPath=path-to-ca-file.pem
const DATABASE_NAME = "flutest";

let database;
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

  MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
      console.error("Mongo DB Connection Error:", error);
      return;
    }
    database = client.db(DATABASE_NAME);
    console.log("Mongo DB Connection Successful");
  });
});



app.get("/api/flutest/GetSyndrome", (req, response) => {
  console.log("getapi node js");
   const collection = database.collection("flucollection");
  collection.find({}).toArray((error, result) => {
    if (error) {
      console.error("Error fetching data:", error);
      response.status(500).json({ error: "Internal Server Error" });
      return;
    }
    response.send(result);
  });
});

app.post("/api/flutest/AddSyndrome", multer().none(), (request, response) => {
      const collection = database.collection("flucollection");

      try {
        collection.countDocuments({}, (error, numOfDocs) => {
          if (error) {
            console.error("Error counting documents:", error);
            response.status(500).json({ error: "Internal Server Error" });
            return;
          }
          
          collection.insertOne({
            id:(numOfDocs + 1).toString(),
            syndrome: request.body.syndrome,
            answer: null
          });
          response.json("Added Successfully");

        });
      } catch (error) {
        response.json(error);
      }
    });
