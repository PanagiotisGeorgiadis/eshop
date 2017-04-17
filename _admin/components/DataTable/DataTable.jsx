import React from "react";

import DataTableHead from "./DataTableHead.jsx";
import DataTableBody from "./DataTableBody.jsx";

export default class DataTable extends React.Component {

	constructor() {

		super();
		this.state = {
			tableShouldUpdate: false,
			tableHeaderData: [],
			tableBodyData: []
		};
	}

	updateComponentState(tableHeaderData, tableBodyData) {

		let updatedComponentState = Object.assign({}, this.state);

		if(tableHeaderData)
			updatedComponentState.tableHeaderData = tableHeaderData;

		if(tableBodyData)
			updatedComponentState.tableBodyData = tableBodyData;

		this.setState({
			tableShouldUpdate: true,
			tableHeaderData: tableHeaderData,
			tableBodyData: tableBodyData
		});
	}	

	shouldComponentUpdate(nextProps, nextState) {

		if(nextProps.tableShouldUpdate)
			return true;

		return false;
	}

	componentWillReceiveProps(nextProps) {

		this.updateComponentState(nextProps.tableHeaderData, nextProps.tableBodyData);
	}

	componentWillMount() {

		var updatedComponentState = Object.assign({}, this.state);

		if(this.props.tableHeaderData)
			updatedComponentState.tableHeaderData = this.props.tableHeaderData;

		if(this.props.tableBodyData)
			updatedComponentState.tableBodyData = this.props.tableBodyData;

		this.setState({
			tableHeaderData: updatedComponentState.tableHeaderData,
			tableBodyData: updatedComponentState.tableBodyData
		});
	}
	
	render() {

		return (
			<table className = "data_table">
				<DataTableHead key = { Date.now() + 1 } tableHeaderData = { this.state.tableHeaderData } />
				<DataTableBody key = { Date.now() + 2 } tableRows = { this.state.tableBodyData } />
			</table>
		);
	}
}
