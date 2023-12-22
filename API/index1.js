# This is not the main index it's just acopy

// var express = require("express");
// var MongoClient = require("mongodb").MongoClient;
// var cors = require("cors");
// const multer = require("multer");

// const app = express();
// app.use(cors()); 

// const CONNECTION_STRING = "mongodb+srv://nadaxadmin:nada.xadmin@nada0x.fmyaxsn.mongodb.net/flutest?retryWrites=true&w=majority";
// const DATABASE_NAME = "flutest";

// let database;
// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);

//   MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//       console.error("Mongo DB Connection Error:", error);
//       return;
//     }
//     database = client.db(DATABASE_NAME);
//     console.log("Mongo DB Connection Successful");
//   });
// });



// app.get("/api/flutest/GetSyndrome", (req, response) => {
//   console.log("getapi node js");
//    const collection = database.collection("flucollection");
//   collection.find({}).toArray((error, result) => {
//     if (error) {
//       console.error("Error fetching data:", error);
//       response.status(500).json({ error: "Internal Server Error" });
//       return;
//     }
//     response.send(result);
//   });
// });

//    app.post("/api/flutest/AddSyndrome", multer().none(), (request, response) => {
//     const newSyndrome = request.body.newSyndrome;

//       const collection = database.collection("flucollection");
//       collection.countDocuments({}, (error, numOfDocs) => {
//         if (error) {
//           console.error("Error counting documents:", error);
//           response.status(500).json({ error: "Internal Server Error" });
//           return;
//         }
  
//         collection.insertOne({
//           id: (numOfDocs + 1).toString(),
//           syndrome: request.body.newSyndrome,
//         });
  
//         response.json("Added Successfully");
//       });
//       response.json({ message: 'Syndrome added successfully' });

//     });
