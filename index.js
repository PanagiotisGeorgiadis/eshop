// This is used for server side rendering for ReactJS.
// require("babel-register")({
// 	presets: ['react']
// });

// var React = require("react");
// var ReactDOMServer = require("react-dom/server");
// var HomePage = require("./public/components/HomePageServer.jsx");

// This seems the best approach so far! Using modules and exporting the routes differently for front and backend.
var express = require("express");
//var app = express();
//var port = process.env.PORT || 3000;
var category = require(__dirname + "/_api/models/category.js");

var adminApp = express();

adminApp.use("/styles", express.static(__dirname + "/_admin/public/styles/"));
adminApp.use("/scripts", express.static(__dirname + "/_admin/public/scripts/"));
adminApp.use("/components", express.static(__dirname + "/_admin/components/"));
adminApp.use("/utils", express.static(__dirname + "/_admin/utils/"));

adminApp.use("/admin", require(__dirname + "/_admin/admin_router.js"));

adminApp.get("/", function(request, response) {

	response.redirect("/admin");
});

// This code will be removed from here and the other ports will be used once nginx is installed.
// adminApp.use("/api/categories", require(__dirname + "/_api/routes/category_router.js"));
// adminApp.use("/api/genericSubcategories", require(__dirname + "/_api/routes/generic_subcategory_router.js"));
// adminApp.use("/api/specificSubcategories", require(__dirname + "/_api/routes/specific_subcategory_router.js"));
// adminApp.use("/api/products", require(__dirname + "/_api/routes/product_router.js"));
adminApp.use("/api", require(__dirname + "/_api/api_router.js"));
adminApp.listen(3000);


// This code works but will be used once nginx is installed.
// var apiApp = express();

// apiApp.use("/api/categories", require(__dirname + "/_api/routes/category_router.js"));
// apiApp.use("/api/generic_subcategories", require(__dirname + "/_api/routes/generic_subcategory_router.js"));
// apiApp.use("/api/specific_subcategories", require(__dirname + "/_api/routes/specific_subcategory_router.js"));
// apiApp.use("/api/products", require(__dirname + "/_api/routes/product_router.js"));

// apiApp.listen(12000);


var mainApp = express();

mainApp.use("/styles", express.static(__dirname + "/_public/public/styles/"));
mainApp.use("/scripts", express.static(__dirname + "/_public/public/scripts/"));
mainApp.use("/components", express.static(__dirname + "/_public/components/"));

mainApp.use("/", require(__dirname + "/_public/public_router.js"));

mainApp.listen(5000);

// app.use(express.static(__dirname + "/"));
// app.use("/static/views", express.static(__dirname + "/views"));
// app.use("/static/public", express.static(__dirname + "/public"));
// app.use("/static/api", express.static(__dirname + "/api"));
// app.use("/static/admin", express.static(__dirname + "/admin"));
// app.use("/component_styles", express.static(__dirname + "/public/styles"));
// app.use("/component_scripts", express.static(__dirname + "/public/scripts"));
// app.use("/components", express.static(__dirname + "/public/components"));


// Could have a file called router or something like that which already has included all the api routes and import that file 
// instead of all those.
// Maybe transform it to "/api/" and require all three of them. like the /admin
// app.use("/api/categories", require(__dirname + "/routes/api/category_router.js"));
// app.use("/api/subcategories", require(__dirname + "/routes/api/subcategory_router.js"));
// app.use("/api/products", require(__dirname + "/routes/api/product_router.js"));

// app.use("/admin", require(__dirname + "/routes/admin/category_router.js"));


// app.use("/admin/", require(__dirname + "/routes/admin/category_router.js"));
//app.use("/admin/subcategories/", require(__dirname + "/routes/admin/subcategory_router.js"));
//app.use("/admin/products/", require(__dirname + "/routes/admin/product_router.js"));

// app.use("/menu_demo", express.static(__dirname + "/menu_front"));

// app.use("/reactMenu", express.static(__dirname + "/public/components/"));

// app.get("/test", function(request, response) {

// 	var options = {
// 		root: __dirname,
// 		headers: {
// 			"x-timestamp": Date.now(),
// 			"x-sent": true
// 		}
// 	}

// 	var filename = "demo.html";
// 	response.sendFile(filename, options, function(err) {

// 		if(err) {
// 			next(err);
// 		} else {
// 			console.log("Sent: " + filename);
// 		}
// 	});
// });

// app.use("/test", express.static(__dirname));

// app.get("/", function(request, response, next) {

// 	var options = {
// 		root: "public/components",
// 		headers: {
// 			"x-timestamp": Date.now(),
// 			"x-sent": true
// 		}
// 	}

// 	var filename = "index.html";
// 	response.sendFile(filename, options, function(err) {

// 		if(err) {
// 			next(err);
// 		} else {
// 			console.log("Sent: " + filename);
// 		}

// 	});

// });


// app.get("/", function(request, response, next) {

// 	var options = {
// 		root: "public/",
// 		headers: {
// 			"x-timestamp": Date.now(),
// 			"x-sent": true
// 		}
// 	}

// 	var filename = "index.html";
// 	response.sendFile(filename, options, function(err) {

// 		if(err) {
// 			next(err);
// 		} else {
// 			console.log("Sent: " + filename);
// 		}
// 	});
// });

//app.use("category_module", category);

//app.listen(port);
//console.log("Running on port " + port + "!");