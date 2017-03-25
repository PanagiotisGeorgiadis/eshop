function resetInputElements() {

	document.getElementById("display_name_input").value = "";
	document.getElementById("category_name_input").value = "";
	document.getElementById("category_tags_input").value = "";
}

function printInformationMessage(responseText) {

	var message_container = document.getElementById("message_container");

	if(responseText.includes("Successfully"))
		message_container.className = "success";
	else
		message_container.className = "danger";

	message_container.innerHTML = responseText;
	resetInputElements();

	setTimeout(function() {

		message_container.className = "hidden";
	}, 10000);
}

function saveCategory() {

	event.preventDefault();
	
	var display_name = document.getElementById("display_name_input").value;
	var category_name = document.getElementById("category_name_input").value;
	var category_tags = document.getElementById("category_tags_input").value;

	var xhr = new XMLHttpRequest();
	var url = "/api/categories";
	
	var object = {
		"display_name": display_name,
		"category_name": category_name,
		"category_tags": category_tags
	};

	var params = JSON.stringify(object);

	xhr.open("POST", url, true);

	//Send the proper header information along with the request
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function() {

	if(xhr.readyState == 4) {

		if(xhr.status === 200) {

				// console.log(xhr.responseText);
				printInformationMessage(xhr.responseText);
			}
		}
	}
	xhr.send(params);
}

window.onload = function() {

	var submit_button = document.getElementById("submit_button");

	submit_button.onclick = function(event) {

		saveCategory();
	}
}

/*function toggleMessage() {

	var classes = ["hidden", "success", "warning", "info", "danger"];
	var message_container = document.getElementById("message_container");

	var randomIndex = parseInt(Math.random()*6);

	message_container.className = classes[randomIndex];
}*/