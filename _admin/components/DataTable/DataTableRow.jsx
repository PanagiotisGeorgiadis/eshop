import React from "react";

export default class DataTableRow extends React.Component {

	constructor() {

		super();
		this.deleteEntryHandler = this.deleteEntries.bind(this);

		this.state = {
			tableRowData: {
				id: null,
				className: null,
				name: null,
				display_name: null,
				tags: null,
				last_modified: null
			}
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

	updateComponentState(tableRowData) {

		console.log("DataTableRow updateComponentState function called!");
		console.log(tableRowData);
		var updatedTableRowData = Object.assign({}, this.state.tableRowData);

		if(tableRowData.id)
			updatedTableRowData.id = tableRowData.id;

		if(tableRowData.className)
			updatedTableRowData.className = tableRowData.className;

		if(tableRowData.name)
			updatedTableRowData.name = tableRowData.name;

		if(tableRowData.display_name)
			updatedTableRowData.display_name = tableRowData.display_name;

		if(tableRowData.tags)
			updatedTableRowData.tags = tableRowData.tags;

		if(tableRowData.last_modified)
			updatedTableRowData.last_modified = tableRowData.last_modified;

		this.setState({
			tableRowData: updatedTableRowData
		});
	}

	componentWillMount() {

		if(this.props.tableRowData)
			this.updateComponentState(this.props.tableRowData);
	}

	render() {

		return (
			<tr className = "table_row" id = { this.state.tableRowData.id }>
				<td> { this.state.tableRowData.id } </td>
				<td> { this.state.tableRowData.name } </td>
				<td> { this.state.tableRowData.display_name } </td>
				<td> { this.state.tableRowData.tags } </td>
				<td> { this.state.tableRowData.last_modified } </td>
				<td>
					<a className = "edit_category_button" href = "javascript:void(0);">
						<i className = "fa fa-pencil" aria-hidden = "true"></i>
					</a>
					<a className = "delete_category_button" href = "javascript:void(0);" onClick = { this.deleteEntryHandler }>
						<i className = "fa fa-trash-o" aria-hidden = "true"></i>
					</a>
				</td>
			</tr>
		);
	}