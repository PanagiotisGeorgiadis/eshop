import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
import DataTableRow from "./DataTableRow.jsx";

export default class DataTableBody extends React.Component {

	constructor() {

		super();
		this.state = {
			tableRows: []
		}
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}

	render() {

		let dataTableRows;
		if(this.state.tableRows.length) {

			dataTableRows = this.state.tableRows.map( (tableRow, iterator) => {

				return (
					<DataTableRow key = { iterator } tableRowId = { tableRow.tableRowId } tableRowCells = { tableRow.tableRowCells } tableActionCells = { tableRow.tableActionCells } tableRowStyle = { tableRow.tableRowStyle } />
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