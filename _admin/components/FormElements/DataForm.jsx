import React from "react";

// Iterate through an object and its unknown props.
/*var data = [{},{},{},{},{},{},{},{}];
for( props in data[0] ) {
    console.log(props);
	console.log(data[0][props]);
}*/

import FormRow from "./FormRow.jsx";

export default class DataForm extends React.Component {

	constructor() {
		super();
		this.state = {
			formId: "add_categories_form",
			formMethod: "POST",
			formRows: []
		};
	}

	updateFormState(formId, formMethod) {

		let updatedFormState = Object.assign({}, this.state);

		if(formId)
			updatedFormState.formId = formId;

		if(formMethod)
			updatedFormState.formMethod = formMethod;

		return updatedFormState;
	}

	updateFormRowsState(formRows) {

		let updatedFormRows = Object.assign([], this.state.formRows);

		if(formRows)
			updatedFormRows = formRows;

		return updatedFormRows;
	}

	shouldComponentUpdate(nextProps, nextState) {

		if(nextProps.formShouldUpdate)
			return true;

		return false;
	}

	componentWillReceiveProps() {

		// console.log("DataForm componentWillReceiveProps called!");
	}

	componentWillMount() {

		let updatedFormState = Object.assign({}, this.state);
		let updatedFormRowsState = Object.assign([], this.state.formRows)

		if(this.props.formId && this.props.formMethod)
			updatedFormState = this.updateFormState(this.props.formId, this.props.formMethod);

		if(this.props.formRows)
			updatedFormRowsState = this.updateFormRowsState(this.props.formRows);

		this.setState({
			formId: updatedFormState.formId,
			formMethod: updatedFormState.formMethod,
			formRows: updatedFormRowsState
		});
	}
	
	render() {

		let formRows;
		if(this.state.formRows.length) {

			formRows = this.state.formRows.map( (formRow, iterator) => {

				var key = Date.now() + iterator;
				return (
					<FormRow key = { key } rowElements = { this.state.formRows[iterator] } />
				);
			});
		}

		return (
			<div className="container">
				<form id = { this.state.formId } method = { this.state.formMethod } >
					{ formRows }
				</form>
			</div>
		);
	}
}
