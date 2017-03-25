var express = require('express');
var router = express.Router();

// //Middle ware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.get("/", function(req, res) {

	res.send("Get Request on specific subcategory detected!");
});

router.post("/", function(req, res) {

	res.send("Post Request on specific subcategory detected!");
});

router.put("/", function(req, res) {

	res.send("Put Request on specific subcategory detected!");
});

router.delete("/", function(req, res) {

	res.send("Delete Request on specific subcategory detected!");
});

module.exports = router;