var http = require('http');
var url = require('url');
var fs = require('fs');
var express =require('express');
var bodyParser=require('body-parser'); 
var urlencodedParser = bodyParser.urlencoded({extended: true});

var app = express();

http.createServer(function(req,res){
  fs.readFile('sending_data.html',function(err,data){
      res.writeHead(200,{'Content-Type': 'text/html'});
      res.write(data);
      res.end();
  });
}).listen(8080);
