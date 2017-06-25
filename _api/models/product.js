var mongoose = require('mongoose');

mongoose.Promise = Promise;

// Product Schema
var productSchema = mongoose.Schema({

	display_name: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	generic_subcategory: {
		type: String,
		required: true
	},
	specific_subcategory: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	last_modified: {
		type: Date,
		required: true,
		default: Date.now()
	}

}, {collection: "products", versionKey: false});

module.exports = mongoose.model("product", productSchema);
