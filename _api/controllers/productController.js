var ProductModel = require("../models/product.js");

module.exports = {

	find: function(params, callback) {

		var offset = parseInt(params.offset);
		var limit = parseInt(params.limit);
		var searchValue = params.searchValue;
		var collectionFields = "_id display_name name category generic_subcategory specific_subcategory description last_modified";

		if(searchValue) {

			ProductModel.find({display_name: searchValue}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					callback(err, null);
					return
				}
				callback(null, data);
			});

		} else {

			ProductModel.find({}, collectionFields, {skip: offset, limit: limit}, function(err, data) {

				if(err) {
					callback(err, null);
					return
				}
				callback(null, data);
			});
		}
	},

	findById: function(id, callback) {

		ProductModel.findById(id, function(err, category) {

			if(err) {

				callback(err, null);
				return;
			}
			callback(null, category);
		});
	},

	create: function(params, callback) {

		var productModel = new ProductModel();

		for(var paramProps in params) {
			productModel[paramProps] = params[paramProps];
		}

		productModel.save(function(err, savedObject) {

			if(err) {
				callback(err, null);
				return;
			}
			// callback(null, savedObject.display_name);
			callback(null, savedObject);
		});
	},

	update: function(params, callback) {

		ProductModel.findByIdAndUpdate(id, params, {new:true}, function(err, category) {

			if(err) {
				callback(err, null);
				return;
			}
			callback(null, category)
		});
	},

	delete: function(productId, callback) {

		ProductModel.findByIdAndRemove({_id: productId}, function(err, data) {

			if(err) {
				callback(err, null);
				return;
			}
			callback(null, data);
		});
	}
};