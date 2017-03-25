var CategoryController = require("./categoryController.js");
var GenericSubcategoryController = require("./genericSubcategoryController.js");
var SpecificSubcategoryController = require("./specificSubcategoryController.js");
var ProductController = require("./productController.js");

module.exports = {

	category: CategoryController,
	genericSubcategory: GenericSubcategoryController,
	specificSubcategory: SpecificSubcategoryController,
	product: ProductController
}