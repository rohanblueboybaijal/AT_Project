var http = require('http');
var url = require('url');
var fs = require('fs');
var express =require('express');
var bodyParser=require('body-parser'); 
var urlencodedParser = bodyParser.urlencoded({extended: true});

var app = express();
app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('Let us start autograding!');
})

app.get('/get',function(req,res){
    res.sendFile(__dirname + "/" + "get.htm");
})

app.get('/process_get',function(req,res){
    console.log(req.query.first_name);
    console.log(req.query.last_name);
})

app.get('/about',function(req,res){
    res.sendFile(__dirname + "/" + "about.html");
})

var server= app.listen(8080,function(){
    var port = server.address().port;
    console.log("%s",port);
}) 