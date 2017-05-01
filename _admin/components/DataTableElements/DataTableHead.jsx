import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
import DataTableHeadCell from "./DataTableHeadCell.jsx";

export default class DataTableHead extends React.Component {

	constructor() {

		super();
		this.state = {
			tableHeaderData: []
		};
	}
	
	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}

	render() {

		let dataTableHeaders;
		if(this.state.tableHeaderData.length) {

			dataTableHeaders = this.state.tableHeaderData.map( (tableHeader, iterator) => {

				return (
					<DataTableHeadCell key = { iterator } content = { tableHeader } />
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