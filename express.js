//The url library allows us to parse parts of the request url.
var url = require('url');

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 8080;

var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

//We need a function which handles requests and send response
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var url_parts = url.parse(req.url);

more express code handleRequest



delete
//We need a function which handles requests and send response
function handleRequest(req, res) {



  // Capturing the url the request is made to.
  var url_parts = url.parse(req.url);


//Handlebar boiler code
var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


GET - rest
PUT - update
de