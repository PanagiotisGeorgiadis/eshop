import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
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

	shouldComponentUpdate(nextProps, nextState) {

		if(nextProps.tableShouldUpdate)
			return true;

		return false;
	}

	componentWillReceiveProps(nextProps) {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, nextProps);
		this.setState(updatedComponentState);
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
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
