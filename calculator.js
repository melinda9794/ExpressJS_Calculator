// Express.js calculator app //


var express = require("express");


var app = express();

// app.set("view engine", "ejs");

// app.get("/", function(request, response){
   
//    response.render("index");
// });



// add numbers
app.get("/add/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); 
	var n2 = parseFloat(request.params.num2); 
	var sum = n1 + n2;
	response.send("add", {number:sum});
});

// subtract numbers
app.get("/sub/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); 
	var n2 = parseFloat(request.params.num2); 
	var sum = n1 - n2;
	response.send("sub", {number:sum});
});

// multiply numbers
app.get("/mult/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1);
	var n2 = parseFloat(request.params.num2); 
	var sum = n1 * n2;
	response.send("mult", {number:sum});
});

// divide numbers
app.get("/div/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); 
	var n2 = parseFloat(request.params.num2); 
	var sum = (n1 / n2);
	response.send("div", {number:sum});
});


// localhost:3000/
app.listen(3000, function(){
    console.log("server starting on port 3000");
});