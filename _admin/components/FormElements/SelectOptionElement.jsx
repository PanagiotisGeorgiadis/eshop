import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";

export default class SelectOptionElement extends React.Component {

	constructor() {

		super();
		this.state = {
			optionData: {
				id: null,
				className: null,
				value: null
			}
		};
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}
	
	render() {

		return (
			<option id = {this.state.optionData.id} className = {this.state.optionData.className} value = {this.state.optionData.value}>
				{ this.state.optionData.value }
			</option>
		);
	}
}
