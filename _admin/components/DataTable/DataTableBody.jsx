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

		if(this.props.tableRows)
			this.updateComponentState(this.props.tableRows);
	}

	render() {

		let dataTableRows;
		if(this.state.tableRows.length) {

			dataTableRows = this.state.tableRows.map( (tableRow) => {

				return (
					<DataTableRow key = {tableRow.id} tableRowData = { tableRow } />
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