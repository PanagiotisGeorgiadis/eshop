var express = require('express');
var router = express.Router();
var categoryController = require("../controllers/categoryController.js");

router.get("/", function(request, response) {

	var query = request.query;
	if(query) {
		categoryController.find(query, function(err, results) {

			if(err) {

				response.status(500).json({
					confirmation: "fail",
					message: err
				});
				return;
			}

			response.status(200).json({
				confirmation: "success",
				message: results
			});
		});
	}
});

router.get("/:id", function(request, response) {

	var id = request.params.id;
	categoryController.findById(id, function(err, result) {

		if(err) {
			response.status(500).json({
				confirmation: "fail",
				message: err
			});
			return;
		}

		response.status(200).json({
			confirmation: "success",
			message: result
		});
	});
});

router.post("/", function(request, response) {

	request.on("data", function(data) {

		var jsonObject = JSON.parse(data);
		categoryController.create(jsonObject, function(err, result) {

			if(err) {

				response.status(500).send("Some error occured while adding a new category!" + err);
				return;
			}

			response.status(200).send("Successfully added " + result + "!");
		});
	});	
});

// Here it might need the whole category model.
router.put("/:id", function(request, response) {

	var id = request.params.id;
	var params = null;
	if(id)
		categoryController.update(id, params, false, function(err, result) {

			if(err) {

				response.send("An Error Occured While updating the category! " + err);
				return;
			}

			response.send("Successfully Updated the Category!");
		});
});

router.delete("/:id", function(request, response) {

	var id = request.params.id;
	if(id)
		categoryController.delete(id, function(err, result) {

			if(err) {

				response.send("An Error Occured While Deleting the category! " + err);
				return;
			}

			response.send( "Successfully Deleted " + result);
		});
		//category.deleteCategory(id, response);
});

module.exports = router;