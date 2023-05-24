const express = require("express");
const app = express();

//create index.html with this js file ....nhitr khi disnr nhi 
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000,function(){
  console.log("server started on port 3000");
});



//----------------------------------------------------------------------------------------------------------------------------------
//optional steps...not needed
app.get("/contact",function(req,res){
  res.send("Contact me -_-");
});

app.get("/about",function(req,res){
  res.send("I am an undergraduate student currently studying in 3rd Year of my IT major.");
});




//Regex 4 Alphanumeric & nos.
/*function lettersNumbersCheck(name)
{
   var regEx = /^[0-9a-zA-Z]+$/;
   if(name.value.match(regEx))
     {
      return true;
     }
   else
     {
     alert("Please enter letters and numbers only.");
     return false;
     }
}  
*/
