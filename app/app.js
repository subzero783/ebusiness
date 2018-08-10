var express = require('express');
var http = require('http');
var reload = require('reload');
var app = express();
var server = http.createServer(app);

var port = 3000;

server.listen(process.env.PORT || port);

app.set('port', process.env.PORT || port);

app.use(express.static('./public'));

reload(app);