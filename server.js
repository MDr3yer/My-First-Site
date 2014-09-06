var fs = require('fs');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test/:test', function(req, res) {
	res.send(req.params.test);
});



app.listen(8080);