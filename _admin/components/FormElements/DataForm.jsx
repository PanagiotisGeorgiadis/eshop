import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
import FormRow from "./FormRow.jsx";

export default class DataForm extends React.Component {

	constructor() {
		super();
		this.state = {
			formId: null,
			formMethod: "POST",
			formRows: []
		};
	}

	shouldComponentUpdate(nextProps, nextState) {

		if(nextProps.formShouldUpdate)
			return true;

		return false;
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}
	
	render() {

		let formRows;
		if(this.state.formRows.length) {

			formRows = this.state.formRows.map( (formRow, iterator) => {

				var key = Date.now() + iterator;
				return (
					<FormRow key = { key } rowElements = { formRow } />
				);
			});
		}

		return (
			<div className = "container" >
				<form id = { this.state.formId } method = { this.state.formMethod } >
					{ formRows }
				</form>
			</div>
		);
	}
}
