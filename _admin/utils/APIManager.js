export default {

	get: (url, params, callback) => {

		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);

		xhr.onreadystatechange = function() {

			if(xhr.readyState == 4) {

				if(xhr.status != 200)
					callback("Some error occured!" + xhr.responseText, null);

				callback(null, xhr.responseText);
			}
		}
		xhr.send(params);
	},

	getWithPromise: (url, params) => {

		return new Promise((resolve, reject) => {

			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);

			xhr.onreadystatechange = () => {

				if (xhr.readyState === 4) {

					if(xhr.status !== 200)
						reject(new Error("Some error occured!" + xhr.responseText));

					resolve(xhr.responseText);
				}
			}
			xhr.send(params);
		});
	},

	post: (url, requestHeader, params, callback) => {

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
					callback("Some error occured! " + xhr.responseText, null);

				callback(null, xhr.responseText);
			}
		}
		xhr.send(params);
	},

	postWithPromise: (url, requestHeader, params) => {

		return new Promise((resolve, reject) => {

			var xhr = new XMLHttpRequest();
			xhr.open("POST", url, true);

			if(requestHeader)
				xhr.setRequestHeader("Content-type", requestHeader);
			else
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			xhr.onreadystatechange = function() {

				if(xhr.readyState === 4) {

					if(xhr.status !== 200)
						reject(new Error("Some error occured! " + xhr.responseText));

					resolve(xhr.responseText);
				}
			}
			xhr.send(params);
		});
	},

	put: () => {

	},

	delete: (url, requestHeader, callback) => {

		var xhr = new XMLHttpRequest();
		xhr.open("DELETE", url, true);

		if(requestHeader)
				xhr.setRequestHeader("Content-type", requestHeader);
			else
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = function() {

			if(xhr.readyState == 4) {

				if(xhr.status != 200)
					callback("Some error occured! " + xhr.responseText, null);

				callback(null, xhr.responseText);
			}
		}
		xhr.send();
	},

	deleteWithPromise: (url) => {

		// console.log("deleteWithPromise called!!!");
		// console.log(url);
		return new Promise((resolve, reject) => {

			var xhr = new XMLHttpRequest();
			xhr.open("DELETE", url, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			xhr.onreadystatechange = function() {

				if(xhr.readyState === 4) {

					if(xhr.status !== 200)
						reject(new Error("Some error occured! " + xhr.responseText));

					resolve(xhr.responseText);
				}
			}
			xhr.send();
		});
	},

	// deleteWithPromise: (url) => {

	// 	console.log("deleteWithPromise called!!!");
	// 	console.log(url);
	// 	return new Promise((resolve, reject) => {

	// 		var xhr = new XMLHttpRequest();
	// 		xhr.open("DELETE", url, true);
	// 		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	// 		xhr.onreadystatechange = function() {

	// 			if(xhr.readyState === 4) {

	// 				if(xhr.status != 200)
	// 					reject(new Error("Some error occured! " + xhr.responseText));

	// 				resolve(xhr.responseText);
	// 			}
	// 		}
	// 		xhr.send();
	// 	});
	// }
}