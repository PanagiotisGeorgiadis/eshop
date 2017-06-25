import React from "react";

export default class DataTableHead extends React.Component {

	constructor() {

		super();
		this.state = {
			tableHeaderData: []
		};
	}

	updateComponentState(tableHeaderData) {

		var updatedComponentState = Object.assign({}, this.state);

		if(tableHeaderData)
			updatedComponentState.tableHeaderData = tableHeaderData;

		this.setState({
			tableHeaderData: updatedComponentState.tableHeaderData
		});
	}
	
	componentWillMount() {

		if(this.props.tableHeaderData)
			this.updateComponentState(this.props.tableHeaderData);
	}

	render() {

		let dataTableHeaders;
		if(this.state.tableHeaderData.length) {

			dataTableHeaders = this.state.tableHeaderData.map( (tableHeader, iterator) => {

				return (
					<th key = { iterator } > { tableHeader } </th>
				);
			});
		}

		return (

			<thead className = "table_header">
				<tr>
					{ dataTableHeaders }
					<th> { "Options" } </th>
				</tr>
			</thead>
		);
	}
	
}