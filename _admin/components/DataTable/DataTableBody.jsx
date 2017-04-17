import React from "react";

import DataTableRow from "./DataTableRow.jsx";

export default class DataTableBody extends React.Component {

	constructor() {

		super();
		this.state = {
			tableRows: []
		}
	}

	updateComponentState(tableBodyData) {

		var updatedTableBodyState = Object.assign({}, this.state);

		if(tableBodyData)
			updatedTableBodyState.tableRows = tableBodyData;

		this.setState({
			tableRows: updatedTableBodyState.tableRows
		});
	}

	componentWillMount() {

		console.log("DataTableBody componentWillMount function called!");
		console.log(this.props);
		if(this.props.tableRows)
			this.updateComponentState(this.props.tableRows);
	}

	render() {

		console.log("DataTableBody render function called!");
		console.log(this.state);
		let dataTableRows;
		if(this.state.tableRows.length) {

			dataTableRows = this.state.tableRows.map( (tableRow) => {

				return (
					<DataTableRow key = {tableRow._id} tableRowData = { tableRow } />
				);
			});
		}

		return (

			<tbody id = "table_body">
				{ dataTableRows }
			</tbody>
		);
	}
	
}