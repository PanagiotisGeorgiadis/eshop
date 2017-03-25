function getTableRowFromActionButton(actionButtonElement) {

	if(actionButtonElement.parentElement)
		if(actionButtonElement.parentElement.parentElement)
			return actionButtonElement.parentElement.parentElement

	return null;
}

function editCategory(element) {

	var table_row = getTableRowFromActionButton(element);

	if(table_row) {

		var categoryId = table_row.getElementsByClassName("categoryId")[0];
		// Send a Get request with :id
	}
}

function deleteCategory(element) {

	var table_row = getTableRowFromActionButton(element);

	if(table_row) {

		var categoryId = table_row.getElementsByClassName("categoryId")[0];
	}
}

function searchForCategories() {
	
}

function drawActionButtons() {

	var tableCell = document.createElement("td");

	var editCategoryButton = document.createElement("a");
	var editCategoryIcon = document.createElement("i");

	editCategoryButton.className = "edit_category_button";
	editCategoryIcon.className = "fa fa-pencil";
	editCategoryIcon.setAttribute("aria-hidden", "true");
	editCategoryButton.onclick = function() {

		editCategory(this);
	}


	var deleteCategoryButton = document.createElement("a");
	var deleteCategoryIcon = document.createElement("i");

	deleteCategoryButton.className = "delete_category_button";
	deleteCategoryIcon.className = "fa fa-trash-o";
	deleteCategoryIcon.setAttribute("aria-hidden", "true");
	deleteCategoryButton.onclick = function() {

		deleteCategory(this);
	}

	editCategoryButton.appendChild(editCategoryIcon);
	deleteCategoryButton.appendChild(deleteCategoryIcon);
	tableCell.appendChild(editCategoryButton);
	tableCell.appendChild(deleteCategoryButton);

	return tableCell;
}

function drawTableRowElement(id, name, display_name, tags, last_modified, actions) {

	var tableRowElement = document.createElement("tr");
	var idTableCell = document.createElement("td");
	var nameTableCell = document.createElement("td");
	var displayNameTableCell = document.createElement("td");
	var tagsTableCell = document.createElement("td");
	var lastModifiedTableCell = document.createElement("td");

	idTableCell.innerHTML = id;
	idTableCell.className = "categoryId";
	nameTableCell.innerHTML = name;
	displayNameTableCell.innerHTML = display_name;
	tagsTableCell.innerHTML = tags;
	tagsTableCell.className = "categoryTags";
	lastModifiedTableCell.innerHTML = last_modified;

	tableRowElement.appendChild(idTableCell);
	tableRowElement.appendChild(nameTableCell);
	tableRowElement.appendChild(displayNameTableCell);
	tableRowElement.appendChild(tagsTableCell);
	tableRowElement.appendChild(lastModifiedTableCell);
	tableRowElement.appendChild(drawActionButtons());

	return tableRowElement;
}

function drawCategories(categoriesJSON) {

	var tableBodyElement = document.getElementById("table_body");
	var categoriesObject = JSON.parse(categoriesJSON);

	console.log(categoriesObject);

	for(var i = 0; i < categoriesObject.length; i++) {

		var id = name = display_name = tags = last_modified = "";

		if(categoriesObject[i]._id)
			id = categoriesObject[i]._id;

		if(categoriesObject[i].category_name)
			name = categoriesObject[i].category_name;

		if(categoriesObject[i].display_name)
			display_name = categoriesObject[i].display_name;

		if(categoriesObject[i].category_tags)
			tags = categoriesObject[i].category_tags;

		if(categoriesObject[i].last_modified_date)
			last_modified = categoriesObject[i].last_modified_date;

		var tableRowElement = drawTableRowElement(id, name, display_name, tags, last_modified);
		tableBodyElement.appendChild(tableRowElement);
	}
}

function getAllCategories() {

	var xhr = new XMLHttpRequest();

	var offset = 0;
	var limit = 0;
	var searchValue = "";
	var params = "offset=" + offset + "&limit=" + limit + "&searchValue=" + searchValue;

	//var url = "/api/categories/get_categories?" + params;
	var url = "/api/categories/";
	xhr.open("GET", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function() {

		if(xhr.readyState == 4) {

			if(xhr.status === 200) {

				console.log("xhr.responseText");
				drawCategories(xhr.responseText);
			}
		}
	}
	xhr.send(params);
}

window.onload = function() {

	getAllCategories();
};