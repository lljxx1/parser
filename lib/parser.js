var parserManager = require("./parserManager.js");

function parser(url){
	console.log(url);
	function getType(){
		if(url.indexOf("youku.com") > -1){
			return "youku";
		}
	}
	var type = getType();
	if(parserManager[type]){
		return new parserManager[type](url);
	}
}


// test 

// parser("http://v.youku.com/v_show/id_XMTI3NzIyODQwMA==.html?from=y1.12-95").then(function(a){
// 	console.log(a);
// });


module.exports = parser;