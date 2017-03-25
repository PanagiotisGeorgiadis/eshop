var SpecificSubcategoryModel = require("../models/specific_subcategory.js");

module.exports = {

	find: function(params, callback) {

		var offset = parseInt(params.offset);
		var limit = parseInt(params.limit);
		var searchValue = params.searchValue;		
		var collectionFields = "_id display_name name tags parent_subcategory last_modified";

		if(searchValue) {
			
			SpecificSubcategoryModel.find({display_name: searchValue}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					//response.send(err);
					callback(err, null);
					return
				}

				//response.send(data);
				callback(null, data);
			});
			
		} else {

			SpecificSubcategoryModel.find({}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

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

		specificSubcategoryModel.display_name = params.display_name;
		specificSubcategoryModel.category_name = params.category_name;
		specificSubcategoryModel.category_tags = params.category_tags;

		specificSubcategoryModel.save(function(err, savedObject) {

			if(err)
				callback(err, null);

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

	delete: function(id, callback) {

		SpecificSubcategoryModel.findByIdAndRemove({_id: categoryId}, function(err, data) {

			if(err) {

				callback(err, null);
				return;
			}

			//response.status(200).send("Deletion was successful!");
			callback(null, data);
		});
	}
};