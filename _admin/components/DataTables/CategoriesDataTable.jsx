import React from "react";

import APIManager from "../../utils/APIManager";
import Beautifier from "../../utils/Beautifier";
import ComponentHelper from "../../utils/ComponentHelperClass";
import DataTable from "../DataTableElements/DataTable.jsx";

export default class CategoriesDataTable extends React.Component {

	constructor() {
		super();

		this.state = {
			tableShouldUpdate: false,
			tableHeaders: [],
			tableRows: [],
			tableActionCells: []
		};
	}

	removeTableRowFromState(tableRowId) {

		var selectedTableRow;
		var updatedTableRowsState = Object.assign([], this.state.tableRows);

		for(var i = 0; i < updatedTableRowsState.length; i++) {

			if(updatedTableRowsState[i].tableRowId === tableRowId) {
				updatedTableRowsState.splice(i, 1);
				break;
			}
		}

		this.setState({
			tableShouldUpdate: true,
			tableRows: updatedTableRowsState
		});
	}

	updateCategoriesState(err, response) {

		var categories = JSON.parse(response).message;
		var updatedTableRowsState = Object.assign([], this.state.tableRows);
		var updatedTableHeadersState = this.getTableHeaders(categories[0]);

		updatedTableRowsState = categories.map( (entry, iterator) => {

			var dataTableRowObject = {};
			dataTableRowObject.tableRowCells = [];

			for(var entryProperties in entry) {

				if(entryProperties === "_id")
					dataTableRowObject.tableRowId = entry[entryProperties];

				dataTableRowObject.tableRowCells.push(entry[entryProperties]);
			}

			dataTableRowObject.tableActionCells = this.getTableActionCells();
			return dataTableRowObject;
		});

		//updatedTableRowsState = tableRowsArray;

		this.setState({
			tableShouldUpdate: true,
			tableHeaders: updatedTableHeadersState,
			tableRows: updatedTableRowsState
		});
	}

	getCategories() {

		var url = "/api/category/";
		var offset = 0;
		var limit = 0;
		var searchValue = "";
		var params = "offset=" + offset + "&limit=" + limit + "&searchValue=" + searchValue;

		APIManager.get(url, params, this.updateCategoriesState.bind(this));
	}

	getTableHeaders(objectData) {
		
		var tableHeaders = [];
		var updatedTableHeadersState = Object.assign([], this.state.tableHeaders);
		
		for(var objectProperties in objectData) {
			tableHeaders.push(Beautifier.capitalizeFirstLetter(objectProperties));
		}
		tableHeaders.push("Options");

		updatedTableHeadersState = tableHeaders;
		return updatedTableHeadersState;
	}

	getTableActionCells() {

		return this.state.tableActionCells;
	}

	componentWillReceiveProps(nextProps) {

		if(nextProps.tableRowId)
			this.removeTableRowFromState(nextProps.tableRowId);
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		this.getCategories();

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}

	render() {

		return (
			<DataTable tableHeaderData = { this.state.tableHeaders } tableBodyData = { this.state.tableRows } tableShouldUpdate = { this.state.tableShouldUpdate } />
		);
	}
}