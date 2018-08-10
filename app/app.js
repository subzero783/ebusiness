var express = require('express');
var http = require('http');
var reload = require('reload');

var app = express();
var server = http.createServer(app);

var port = 3000;

server.listen(process.env.PORT || port);

app.set('port', process.env.PORT || port);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/about'));

reload(app);