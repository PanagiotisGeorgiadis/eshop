import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";

export default class Label extends React.Component {
	
	constructor() {
		super();
		this.state = {
			id: null,
			className: null,
			inputName: null,
			text: null 
		};
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props.labelData);
		this.setState(updatedComponentState);
	}

	render() {

		return(
			<label id = { this.state.id } className = { this.state.className } htmlFor = { this.state.inputName }>
				{ this.state.text }
			</label>
		);
	}
}