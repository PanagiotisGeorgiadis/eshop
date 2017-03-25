import React from "react";

import DataTableRow from "./DataTableRow.jsx";

export default class DataTableBody extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {

		let dataTableRows;
		if(this.props.tableRows.length) {

			dataTableRows = this.props.tableRows.map( tableRow => {

				return (
					<DataTableRow key = {tableRow._id} tableCells = { tableRow } />
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