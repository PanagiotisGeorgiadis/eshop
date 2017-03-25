import React from "react";

// Iterate through an object and its unknown props.
/*var data = [{},{},{},{},{},{},{},{}];
for( props in data[0] ) {
    console.log(props);
	console.log(data[0][props]);
}*/
import DataFormInput from "./DataFormInput.jsx";
import DataFormSelect from "./DataFormSelect.jsx";
import DataFormTextarea from "./DataFormTextarea.jsx";
import DataFormButton from "./DataFormButton.jsx";



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
