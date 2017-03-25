var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.get("/", function(req, res) {

	res.send("Get Request on product detected!");
});

router.post("/", function(req, res) {

	res.send("Post Request on product detected!");
});

router.put("/", function(req, res) {

	res.send("Put Request on product detected!");
});

router.delete("/", function(req, res) {

	res.send("Delete Request on product detected!");
});

module.exports = router;