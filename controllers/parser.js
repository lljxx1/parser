var parser = require('../lib/parser.js');

module.exports = {
	parser: function(req, res, next){
		var qURL = req.query["url"];
		res.status(200).type('json')
		parser(qURL).then(function(parsed){
			res.send(JSON.stringify(parsed));
		});
	}
}