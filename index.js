var express =require('express');
var app=express();
var http = require('http');
var bodyParser = require('body-parser')
var path=require('path');
app.set('port', process.env.PORT || 7777);
var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.use('/', express.static(__dirname + '/app'));
app.use('/scripts', express.static(path.join(__dirname, 'app')));
app.use('/styles', express.static(path.join(__dirname, 'app')));



http.createServer(app).listen(app.get('port'),function(){
	console.log("server is running for faster moodi on port 5000");
});
