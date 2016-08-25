//The url library allows us to parse parts of the request url.
var url = require('url');

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 8080;

var server = http.createServer(handleRequest);


//create create server to a varable
var server = http.createServer(function(request, response){ 
	response.writeHead(200, {"Content-Type" : "text/plain or html etc"});  //200 = everything is ok - responding with text format
	response.write("Hello";) //response hello

});

//listening to this port
myserver.listen(3000)

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

//We need a function which handles requests and send response
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var url_parts = url.parse(req.url);




GET - rest
PUT - update
de

Express
	-Provides routing mechanism
	-For single page applications
	-Access to an MVC Pattern
		Model -- the Data
		View -- the Template
		Controller -- the JavaScript


//npm express package
var express = require('express');
var app = express();

//root route
app.get('/', function(req, res){
	res.send('hello express');
});

//
app.get('/who/:name?', function(req, res){
	var name = req.params.name; // creates a name array
	res.send(name + ' was here');
});


var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
});

new line

