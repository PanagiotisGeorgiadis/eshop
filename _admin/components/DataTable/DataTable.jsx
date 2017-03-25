import React from "react";

// Iterate through an object and its unknown props.
/*var data = [{},{},{},{},{},{},{},{}];
for( props in data[0] ) {
    console.log(props);
	console.log(data[0][props]);
}*/

import DataTableHead from "./DataTableHead.jsx";
import DataTableBody from "./DataTableBody.jsx";

export default class DataTable extends React.Component {

	constructor() {

		super();
	}
	
	render() {



		return (
			<table className = "data_table">
				<DataTableHead tableHeaders = { this.props.tableHeaders } />
				<DataTableBody tableRows = { this.props.tableRows } />
			</table>
		);
	}
}
