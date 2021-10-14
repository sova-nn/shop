const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient("mongodb://localhost:27017/");

let dbClient;

const cors=require("cors");
const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions));

app.use(express.static(__dirname + "/public"));

mongoClient.connect(function(err, client){
  if(err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db("shop").collection("products");
  app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
  });
});

app.get("/api/products", function(req, res){
  const collection = req.app.locals.collection;
  collection.find({}).toArray(function(err, products){
    if(err) return console.log(err);
    res.send(products)
  });
});

app.get("/api/products/:id", function(req, res){
  const id = JSON.parse(req.params.id);
  const collection = req.app.locals.collection;
  collection.findOne({_id: id}, function(err, product){
    if(err) return console.log(err);
    res.send(product);
  });
});

app.post("/api/products", jsonParser, function (req, res) {

  if(!req.body) return res.sendStatus(400);

  // const productName = req.body.name;
  // const productDescription = req.body.description;
  // const productPrice = req.body.price;
  // const productCategory = req.body.category;
  // const productAvailableFlag = req.body.isAvailable;
  // const productId = req.body._id;
  //
  // const product = {
  //   name: productName,
  //   description: productDescription,
  //   price: productPrice,
  //   category: productCategory,
  //   isAvailable: productAvailableFlag,
  //   _id: productId,
  // };

  const product = req.body;

  const collection = req.app.locals.collection;
  collection.insertOne(product, function(err, result){

    if(err) return console.log(err);
    res.send(product);
  });
});


app.delete("/api/products/:id", function(req, res){
  const id = JSON.parse(req.params.id);
  const collection = req.app.locals.collection;
  collection.findOneAndDelete({_id: id}, function(err, result){
    if(err) return console.log(err);
    let product = result.value;
    res.send(product);
  });
});

app.put("/api/products", jsonParser, function(req, res){
  if(!req.body) return res.sendStatus(400);
  const id = JSON.parse(req.params.id);

  // const productName = req.body.name;
  // const productDescription = req.body.description;
  // const productPrice = req.body.price;
  // const productCategory = req.body.category;
  // const productAvailableFlag = req.body.isAvailable;
  // const productId = req.body._id;

  // const product = {
  //   name: productName,
  //   description: productDescription,
  //   price: productPrice,
  //   category: productCategory,
  //   isAvailable: productAvailableFlag,
  //   _id: productId,
  // };
  const product = req.body;
  const collection = req.app.locals.collection;
  collection.findOneAndUpdate({_id: id}, { $set: {...product}},
    {returnDocument: "after" },function(err, result){
      if(err) return console.log(err);
      const sentProduct = result.value;
      res.send(sentProduct);
    });
});

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});
