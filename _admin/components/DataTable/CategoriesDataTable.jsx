import React from "react";

import APIManager from "../../utils/APIManager";
import Beautifier from "../../utils/Beautifier";
import DataTable from "./DataTable.jsx";

export default class CategoriesDataTable extends React.Component {

	constructor() {
		super();
		this.state = {
			tableShouldUpdate: false,
			categoryHeaders: [],
			categories: []
		};
	}

	updateCategoriesState(err, response, componentScope) {

		var categories = JSON.parse(response).message;

		var updatedCategoryHeadersState = Object.assign([], componentScope.state.categoryHeaders);
		var updatedCategoriesState = Object.assign([], componentScope.state.categories);
		
		var categoriesArray = [];
		var categoryHeaders = componentScope.getTableHeaders(categories[0]);

		for(var i = 0; i < categories.length; i++) {

			var option = {};
			option.id = categories[i]._id;
			option.name = categories[i].name;
			option.display_name = categories[i].display_name;

			categoriesArray.push(option);
		}

		updatedCategoryHeadersState = categoryHeaders;
		updatedCategoriesState = categoriesArray;

		componentScope.setState({
			tableShouldUpdate: true,
			categoryHeaders: updatedCategoryHeadersState,
			categories: updatedCategoriesState
		});
	}

	getCategories() {

		var url = "/api/category/";
		var offset = 0;
		var limit = 0;
		var searchValue = "";
		var params = "offset=" + offset + "&limit=" + limit + "&searchValue=" + searchValue;

		APIManager.get(url, params, this.updateCategoriesState, this);
	}

	getTableHeaders(objectData) {

		var objectProperties = [];
		
		for(var props in objectData) {
			objectProperties.push(Beautifier.capitalizeFirstLetter(props));
		}

		return objectProperties;
	}

	componentWillMount() {

		this.getCategories();
	}

	render() {

		return (
			<DataTable tableHeaderData = { this.state.categoryHeaders } tableBodyData = { this.state.categories } tableShouldUpdate = { this.state.tableShouldUpdate } />
		);
	}
}