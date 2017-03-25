var BasicModel = require("../models/basic.js");

module.exports = {

	find: function(params, callback) {

		var offset = parseInt(params.offset);
		var limit = parseInt(params.limit);
		var searchValue = params.searchValue;		
		var collectionFields = "_id display_name name tags parent_subcategory last_modified";

		if(searchValue) {
			
			BasicModel.find({display_name: searchValue}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					//response.send(err);
					callback(err, null);
					return
				}

				//response.send(data);
				callback(null, data);
			});
			
		} else {

			BasicModel.find({}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

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

		BasicModel.findById(id, function(err, category) {

			if(err) {

				callback(err, null);
				return;
			}

			callback(null, category);
		});
	},

	create: function(params, callback) {

		var basicModel = new BasicModel();

		basicModel.display_name = params.display_name;
		basicModel.category_name = params.category_name;
		basicModel.category_tags = params.category_tags;

		basicModel.save(function(err, savedObject) {

			if(err)
				callback(err, null);

			callback(null, savedObject);
		});
	},

	update: function(params, callback) {

		BasicModel.findByIdAndUpdate(id, params, {new:true}, function(err, category) {

			if(err) {

				callback(err, null);
				return;
			}

			callback(null, category)
		});
	},

	delete: function(id, callback) {

		BasicModel.findByIdAndRemove({_id: categoryId}, function(err, data) {

			if(err) {

				callback(err, null);
				return;
			}

			//response.status(200).send("Deletion was successful!");
			callback(null, data);
		});
	}
};