var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/eshop");

mongoose.Promise = Promise;

// Generic Subcategory Schema
var genericSubcategorySchema = mongoose.Schema({

	display_name: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	tags: {
		type: Array,
		required: true
	},
	category: {

		type: mongoose.Schema.Types.Mixed,
		required: true
	},
	last_modified: {
		type: Date,
		required: true,
		default: Date.now()
	}

}, {collection: "genericSubcategories", versionKey: false});

module.exports = mongoose.model("genericSubcategory", genericSubcategorySchema);