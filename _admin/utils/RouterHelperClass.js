module.exports = {

	responseHandler: function(err, filename) {

		if(err)
			console.log(err);
		else
			console.log("Sent File: " + filename);
	}
}