import React from "react";

// Iterate through an object and its unknown props.
/*var data = [{},{},{},{},{},{},{},{}];
for( props in data[0] ) {
    console.log(props);
	console.log(data[0][props]);
}*/
import DataFormTextInput from "../FormElements/DataFormTextInput.jsx";
import DataFormSelect from "../FormElements/DataFormSelect.jsx";
import DataFormTextarea from "../FormElements/DataFormTextarea.jsx";
import DataFormButton from "../FormElements/DataFormButton.jsx";



export default class DataForm extends React.Component {

	constructor() {

		super();
	}
	
	render() {



		return (
			<form className = "data_table">
				<DataTableHead tableHeaders = { this.props.tableHeaders } />
				<DataTableBody tableRows = { this.props.tableRows } />
			</form>
		);
	}
}
