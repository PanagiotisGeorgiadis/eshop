var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/eshop");

mongoose.Promise = Promise;

// Specific Subcategory Schema
var specificSubcategorySchema = mongoose.Schema({

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
	subcategory: {

		type: mongoose.Schema.Types.Mixed,
		required: true
	},
	last_modified: {
		type: Date,
		required: true,
		default: Date.now()
	}

}, {collection: "specificSubcategories", versionKey: false});

module.exports = mongoose.model("specificSubcategory", specificSubcategorySchema);