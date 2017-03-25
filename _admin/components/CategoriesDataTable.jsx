import React from "react";
import ReactDOM from "react-dom";

import DataTable from "./DataTable/DataTable.jsx"

export default class CategoriesDataTable extends React.Component {

	getTableRows(reactComponent) {

		var xhr = new XMLHttpRequest();
		var offset = 0;
		var limit = 0;
		var searchValue = "";
		var params = "offset=" + offset + "&limit=" + limit + "&searchValue=" + searchValue;
		//var url = "/api/categories/get_categories?" + params;
		var url = "/api/category/";

		xhr.open("GET", url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = function() {

			if(xhr.readyState == 4) {

				if(xhr.status === 200) {

					var response = JSON.parse(xhr.responseText);
					var tableRows = response.message;
					var tableHeaders = reactComponent.getTableHeaders(response.message[0]);

					reactComponent.setState({

						tableHeaders: tableHeaders,
						tableRows: tableRows
					});
				}
			}
		}
		xhr.send();
	}

	getTableHeaders(objectData) {

		var objectProperties = [];
		
		for(var props in objectData) {

			objectProperties.push(props);
		}

		return objectProperties;
	}

	constructor() {

		super();
		this.state = {
			tableHeaders: [],
			tableRows: []
		};

	}

	componentWillMount() {

		this.getTableRows(this);
	}

	render() {

		return (
			<DataTable tableHeaders = { this.state.tableHeaders } tableRows = { this.state.tableRows } />
		);
	}
}

const reactTableRoot = document.getElementById("react_table_root");

ReactDOM.render(<CategoriesDataTable />, reactTableRoot);