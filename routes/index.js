var express = require('express');
var parserController = require('../controllers/parser');

module.exports = function(){
	var router = express.Router();
	
	router.get('/parser', parserController.parser);

	router.get('/', function(req, res, next){
		res.send('');
	});

	return router;
}