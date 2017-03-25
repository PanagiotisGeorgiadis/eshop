import React from "react";

export default class DataTableRow extends React.Component {

	constructor() {

		super();
		this.deleteEntry = this.deleteEntries.bind(this);
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

	}

	render() {

		let id = "";
		let name = "";
		let display_name = ""; 
		let tags = "";
		let last_modified = "";

		if(this.props.tableCells._id)
			id = this.props.tableCells._id;

		if(this.props.tableCells.name)
			name = this.props.tableCells.name;

		if(this.props.tableCells.display_name)
			display_name = this.props.tableCells.display_name;

		if(this.props.tableCells.tags)
			tags = this.props.tableCells.tags;

		if(this.props.tableCells.last_modified)
			last_modified = this.props.tableCells.last_modified;

		return (
			<tr className="table_row" id={ id }>
				<td> { name } </td>
				<td> { display_name } </td>
				<td className="categoryTags"> { tags } </td>
				<td> { last_modified } </td>
				<td>
					<a className="edit_category_button" href="javascript:void(0);">
						<i className="fa fa-pencil" aria-hidden="true"></i>
					</a>
					<a className="delete_category_button" href="javascript:void(0);" onClick={this.deleteEntry}>
						<i className="fa fa-trash-o" aria-hidden="true"></i>
					</a>
				</td>
			</tr>
		);
	}
}