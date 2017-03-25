var mongoose = require('mongoose');

// Product Schema
var productSchema = mongoose.Schema({

	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	last_modified: {
		type: Date,
		required: true
	}

}, {collection: "products"});

var Product = module.exports = mongoose.model("Product", productSchema);

// getProducts

module.exports = {

	getCategories: function(callback, optional_limit) { // GET REQUEST

		// MongoDB code here for getting all the categories or at least some of them if the optional_limit is specified.
		Category.find(callback).limit(optional_limit);
	},

	getCategory: function() { // GET REQUEST

		// MongoDB code here for getting one category. Maybe for a single form for editing purposes. may be the same as update.
	},

	addCategory: function() { // POST REQUEST

		// MongoDB code here for adding a new category.
	},

	updateCategory: function() { // PUT REQUEST

		// MongoDB code here for editing and updating a category. maybe the same as getCategory or maybe getCategory will return
		// the UI as part of a get request and then it will do a put request.
	},

	deleteCategory: function() {  // DELETE REQUEST

		// MongoDB code here for get one category. Maybe for edit purposes.
	}
}