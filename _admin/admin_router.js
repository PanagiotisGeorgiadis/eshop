var express = require('express');
var router = express.Router();
var routerHelperClass = require("./utils/RouterHelperClass.js");
 
//Middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.get("/", function(request, response, next) {
	
	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/add_category", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/edit_category/:id", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/show_categories", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/add_generic_subcategory", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/show_generic_subcategories", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/add_specific_subcategory", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/show_specific_subcategories", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/add_product", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/show_products", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("/search_products", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		routerHelperClass.responseHandler(err, filename);
	});
});

router.get("*", function(request, response, next) {

	response.send("404 Page Not Found!");
	console.log("404 Page Not Found!");
});

module.exports = router;