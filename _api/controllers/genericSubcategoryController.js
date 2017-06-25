var GenericSubcategoryModel = require("../models/generic_subcategory.js");

module.exports = {

	find: function(params, callback) {

		var offset = parseInt(params.offset);
		var limit = parseInt(params.limit);
		var searchValue = params.searchValue;
		var collectionFields = "_id display_name name tags category last_modified";

		if(searchValue) {

			GenericSubcategoryModel.find({display_name: searchValue}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					callback(err, null);
					return
				}
				callback(null, data);
			});

		} else {

			GenericSubcategoryModel.find({}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					callback(err, null);
					return
				}
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

		for(var paramProps in params) {
			genericSubcategoryModel[paramProps] = params[paramProps];
		}

		genericSubcategoryModel.save(function(err, savedObject) {

			if(err) {
				callback(err, null);
				return;
			}
			// callback(null, savedObject.display_name);
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

	delete: function(genericSubcategoryId, callback) {

		GenericSubcategoryModel.findByIdAndRemove({_id: genericSubcategoryId}, function(err, data) {

			if(err) {
				callback(err, null);
				return;
			}
			callback(null, data);
		});
	}
};