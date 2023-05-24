const express = require("express");
const app = express();

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact",function(req,res){
  res.send("Contact me -_-");
});

app.get("/about",function(req,res){
  res.send("I am an undergraduate student currently studying in 3rd Year of my IT major.");
});

app.listen(3000,function(){
  console.log("server started on port 3000");
});
