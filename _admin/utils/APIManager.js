export default {

	get: (url, params, callback) => {

	},

	post: (url, requestHeader, body, callback, callbackScope) => {

		var xhr = new XMLHttpRequest();
		xhr.open("POST", url, true);

		//Send the proper header information along with the request
		if(requestHeader)
			xhr.setRequestHeader("Content-type", requestHeader);
		else
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = function() {

			if(xhr.readyState == 4) {

				if(xhr.status != 200)
						callback(err, null, callbackScope);

				callback(null, xhr.responseText, callbackScope);

			}
		}
		xhr.send(body);
	},

	put: () => {

	},

	delete: () => {

	}
}