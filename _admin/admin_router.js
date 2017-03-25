var express = require('express');
var router = express.Router();
 
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

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
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

	var filename = "add_category.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
	});
});

router.get("/edit_category", function(request, response, next) {

	var options = {
		root: __dirname + "/public/views/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "add_category.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
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

	var filename = "show_categories.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
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

	var filename = "add_generic_subcategory.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
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

	var filename = "show_generic_subcategories.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
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

	var filename = "add_specific_subcategory.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
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

	var filename = "show_specific_subcategories.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
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

	var filename = "add_product.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
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

	var filename = "show_products.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
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

	var filename = "search_products.html";
	response.sendFile(filename, options, function(err) {

		if(err) {
			console.log(err);
		} else {
			console.log("Sent: " + filename);
		}
	});
});

module.exports = router;