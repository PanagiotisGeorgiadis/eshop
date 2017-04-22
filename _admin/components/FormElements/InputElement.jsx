import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
import Label from "./Label.jsx";

export default class InputElement extends React.Component {

	constructor() {

		super();
		this.state = {
			containerData: {
				id: null,
				className: null
			},
			labelData: {
				id: null,
				className: null,
				inputName: null,
				text: null
			},
			inputData: {
				id: null,
				className: null,
				name: null,
				value: undefined,
				type: undefined,
				onChange: null,
				onClick: null
			}
		};
	}

	componentDidMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props.elementData);
		this.setState(updatedComponentState);
	}

	render() {

		return (

			<div id = {this.state.containerData.id} className = {this.state.containerData.className}>
				<Label key = { Date.now() } labelData = { this.state.labelData } />
				<input id = {this.state.inputData.id} className = {this.state.inputData.className} type = {this.state.inputData.type} name = {this.state.inputData.name} value = {this.state.inputData.value} onChange = {this.state.inputData.onChange} onClick = { this.state.inputData.onClick } />
			</div>
		);
	}
}