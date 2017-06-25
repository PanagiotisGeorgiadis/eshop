var SpecificSubcategoryModel = require("../models/specific_subcategory.js");

module.exports = {

	find: function(params, callback) {

		var offset = parseInt(params.offset);
		var limit = parseInt(params.limit);
		var searchValue = params.searchValue;
		var collectionFields = "_id display_name name tags category generic_subcategory last_modified";

		if(searchValue) {

			SpecificSubcategoryModel.find({display_name: searchValue}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					callback(err, null);
					return;
				}
				callback(null, data);
			});

		} else {

			SpecificSubcategoryModel.find({}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					callback(err, null);
					return;
				}
				callback(null, data);
			});
		}
	},

	findById: function(id, callback) {

		SpecificSubcategoryModel.findById(id, function(err, category) {

			if(err) {
				callback(err, null);
				return;
			}
			callback(null, category);
		});
	},

	create: function(params, callback) {

		var specificSubcategoryModel = new SpecificSubcategoryModel();

		for(var paramProps in params) {
			specificSubcategoryModel[paramProps] = params[paramProps];
		}

		specificSubcategoryModel.save(function(err, savedObject) {

			if(err) {
				callback(err, null);
				return;
			}
			// callback(null, savedObject.display_name);
			callback(null, savedObject);
		});
	},

	update: function(params, callback) {

		SpecificSubcategoryModel.findByIdAndUpdate(id, params, {new:true}, function(err, category) {

			if(err) {
				callback(err, null);
				return;
			}
			callback(null, category)
		});
	},

	delete: function(specificSubcategoryId, callback) {

		SpecificSubcategoryModel.findByIdAndRemove({_id: specificSubcategoryId}, function(err, data) {

			if(err) {
				callback(err, null);
				return;
			}
			callback(null, data);
		});
	}
};