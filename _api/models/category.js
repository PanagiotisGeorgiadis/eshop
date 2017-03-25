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
// var CategoryModel = module.exports = mongoose.model("Category", categorySchema);

// module.exports.getCategories = function(callback, categoryObject, response) {
	
// 	// var offset = parseInt(categoryObject.offset);
// 	// var limit = parseInt(categoryObject.limit);
// 	// var searchValue = categoryObject.searchValue;
	
// 	// var collectionFields = "_id display_name category_name category_tags last_modified_date";

// 	// if(searchValue) {
		
// 	// 	CategoryModel.find({category_name: searchValue}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

// 	// 		if(err) {
// 	// 			response.send(err);
// 	// 		}

// 	// 		response.send(data);
// 	// 	});
		
// 	// } else {

// 	// 	CategoryModel.find({}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

// 	// 		if(err) {
// 	// 			response.send(err);
// 	// 		}

// 	// 		response.send(data);
// 	// 	});
// 	// }
// }
// module.exports.addCategory = function(categoryObject, response) {

// 	var category = new CategoryModel();

// 	category.display_name = categoryObject.display_name;
// 	category.category_name = categoryObject.category_name;
// 	category.category_tags = categoryObject.category_tags;

// 	category.save(function(err, savedObject) {

// 		if(err)
// 			response.send("Some error occured while adding a new category!" + err);
// 	});

// 	response.send("Successfully added Category " + categoryObject.category_name + "!");
// 	//	Category.create({"category_name": category_name});
// }
// module.exports.deleteCategory = function(categoryId, response) {

// 	CategoryModel.findOneAndRemove({_id: categoryId}, function(err) {

// 		if(err)
// 			response.status(500).send(err);

// 		response.status(200).send("Deletion was successful!");
// 	});
// }
// Rethink about that.
// watch this: https://www.youtube.com/watch?v=5_pvYIbyZlU&index=5&list=PLVBXNyNyLNq0jyDcfjOc9psQYK_leG52r
// module.exports.updateCategory = function(categoryObject, response) {

// 	var categoryId = categoryObject.id;
// 	CategoryModel.findOne({_id: categoryId}, function(err, foundObject) {

// 		if(err) {

// 			response.status(500).send(err);
// 		} else {

// 			if(!foundObject) {
				
// 				response.status(404).send();
// 			} else {

// 			}
// 		}
// 	});
// }