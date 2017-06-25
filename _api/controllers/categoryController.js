var CategoryModel = require("../models/category.js");

module.exports = {

	find: function(params, callback) {

		var offset = parseInt(params.offset);
		var limit = parseInt(params.limit);
		var searchValue = params.searchValue;
		var collectionFields = "_id display_name name tags last_modified";

		if(searchValue) {

			CategoryModel.find({category_name: searchValue}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					callback(err, null);
					return
				}
				callback(null, data);
			});

		} else {

			CategoryModel.find({}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					callback(err, null);
					return
				}
				callback(null, data);
			});
		}
	},

	findById: function(id, callback) {

		CategoryModel.findById(id, function(err, category) {

			if(err) {
				callback(err, null);
				return;
			}
			callback(null, category);
		});
	},

	create: function(params, callback) {

		var categoryModel = new CategoryModel();
		var tags = params.tags.split(",");
		var tagsArray = [];

		tags.forEach(function(tag) {
			tagsArray.push(tag.trim());
		});

		for(var paramProps in params) {
			categoryModel[paramProps] = params[paramProps];
		}

		categoryModel.save(function(err, savedObject) {

			if(err) {
				callback(err, null);
				return;
			}
			// callback(null, savedObject.display_name);
			callback(null, savedObject);
		});
	},

	update: function(id, params, callback) {

		CategoryModel.findByIdAndUpdate(id, params, {new:true}, function(err, category) {

			if(err) {
				callback(err, null);
				return;
			}
			callback(null, category);
		});
	},

	delete: function(categoryId, callback) {

		CategoryModel.findByIdAndRemove({_id: categoryId}, function(err, data) {

			if(err) {
				callback(err, null);
				return;
			}
			callback(null, data);
		});
	}
};