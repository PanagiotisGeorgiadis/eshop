var express = require('express');
var public_router = express.Router();
 
//Middleware that is specific to this router
// public_router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

public_router.get("/", function(request, response, next) {
	
	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "HomePage.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
	});
});

module.exports = public_router;