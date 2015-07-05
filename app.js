var express = require('express'),
	app = express(),
	routes = require('./routes')();

app.use('/', routes);


function output(msg){
	console.log(msg);
}

app.listen(80);
