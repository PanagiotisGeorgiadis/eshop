var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/eshop");

mongoose.Promise = Promise;

// Category Schema
var categorySchema = mongoose.Schema({

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
	last_modified: {
		type: Date,
		required: true,
		default: Date.now()
	}

}, {collection: "categories", versionKey: false});

module.exports = mongoose.model("Category", categorySchema);