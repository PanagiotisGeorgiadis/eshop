var GenericSubcategoryModel = require("../models/generic_subcategory.js");

module.exports = {

	find: function(params, callback) {

		var offset = parseInt(params.offset);
		var limit = parseInt(params.limit);
		var searchValue = params.searchValue;		
		var collectionFields = "_id display_name name tags parent_category last_modified";

		if(searchValue) {
			
			GenericSubcategoryModel.find({display_name: searchValue}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					//response.send(err);
					callback(err, null);
					return
				}

				//response.send(data);
				callback(null, data);
			});
			
		} else {

			GenericSubcategoryModel.find({}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					//response.send(err);
					callback(err, null);
					return
				}

				//response.send(data);
				callback(null, data);
			});
		}
	},

	findById: function(id, callback) {

		GenericSubcategoryModel.findById(id, function(err, category) {

			if(err) {

				callback(err, null);
				return;
			}

			callback(null, category);
		});
	},

	create: function(params, callback) {

		var genericSubcategoryModel = new GenericSubcategoryModel();

		genericSubcategoryModel.display_name = params.generic_subcategory_display_name;
		genericSubcategoryModel.name = params.generic_subcategory_name;
		genericSubcategoryModel.tags = params.generic_subcategory_tags;
		genericSubcategoryModel.category = params.category_name;

		genericSubcategoryModel.save(function(err, savedObject) {

			if(err)
				callback(err, null);

			callback(null, savedObject);
		});
	},

	update: function(params, callback) {

		GenericSubcategoryModel.findByIdAndUpdate(id, params, {new:true}, function(err, category) {

			if(err) {

				callback(err, null);
				return;
			}

			callback(null, category)
		});
	},

	delete: function(id, callback) {

		GenericSubcategoryModel.findByIdAndRemove({_id: categoryId}, function(err, data) {

			if(err) {

				callback(err, null);
				return;
			}

			//response.status(200).send("Deletion was successful!");
			callback(null, data);
		});
	}
};