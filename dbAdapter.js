var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/";

const insertDB = function(err, db) {
    if (err) throw err;
    var dbo = db.db("HumanResouceDB");
    var myobj = { name: "Tal Kahalon", empid: "123456" };
    dbo.collection("projectDB").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }

MongoClient.connect(url, insertDB );
