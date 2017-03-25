import React from "react";

export default class DataTableHead extends React.Component {

	constructor() {

		super();
	}

	render() {

		let dataTableHeaders;
		
		if(this.props.tableHeaders.length) {

			dataTableHeaders = this.props.tableHeaders.map( (tableHeader, iterator) => {

				return (
					<th key = {iterator}> {tableHeader} </th>
				);
			});
		}

		return (

			<thead className = "table_header">
				<tr>
					{ dataTableHeaders }
				</tr>
			</thead>
		);
	}
	
}