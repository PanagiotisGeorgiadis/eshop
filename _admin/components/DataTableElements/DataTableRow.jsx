import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
import DataTableRowCell from "./DataTableRowCell.jsx";
import DataTableActionCell from "./DataTableActionCell.jsx";

export default class DataTableRow extends React.Component {

	constructor() {

		super();
		this.deleteEntryHandler = this.deleteEntries.bind(this);

		this.state = {
			tableRowId: null,
			tableRowStyle: null,
			tableRowCells: [],
			tableActionCells: []
		};
	}

	getTableRowParent(element) {

		if(element && element.parentNode) {

			var parentElement = element.parentNode;
			while(!parentElement.className.includes("table_row")) {

				parentElement = parentElement.parentNode;
			}
			return parentElement;
		}

		return null;
	}

	deleteEntries(event) {

		var tableRow = this.getTableRowParent(event.target);
		var tableRowId = "";
		var tableElement = null;

		if(tableRow) {
			
			tableRowId = tableRow.id;
			tableElement = tableRow.parentNode;
		}

		if(tableRowId) {

			var xhr = new XMLHttpRequest();
			var url = "/api/category/" + tableRowId;

			xhr.open("DELETE", url, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			xhr.onreadystatechange = function() {

				if(xhr.readyState == 4 && xhr.status === 200) {

					if(tableElement) {

						tableRow.style.opacity = 0;
						setTimeout(function() {
							tableElement.removeChild(tableRow);
						}, 1100);
					}
				}
			}
			xhr.send();
		}
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}

	render() {

		let tableRowCells;
		if(this.state.tableRowCells.length) {
			tableRowCells = this.state.tableRowCells.map( (tableCell, iterator) => {
				return (
					<DataTableRowCell key = { iterator } content = { tableCell } />
				);
			});
		}

		let tableActionCells;
		if(this.state.tableActionCells.length) {
			tableActionCells = this.state.tableActionCells.map( (actionCell, iterator) => {
				return (
					<DataTableActionCell key = { iterator } actionButtons = { actionCell.actionButtons } tableRowId = { this.state.tableRowId } />
				);
			});
		}

		return (
			<tr id = { this.state.tableRowId } className = "table_row" style = { this.state.tableRowStyle } >
				{ tableRowCells }
				{ tableActionCells }
			</tr>
		);
	}
}