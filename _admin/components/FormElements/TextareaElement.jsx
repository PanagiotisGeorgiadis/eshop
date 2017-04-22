import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
import Label from "./Label.jsx";

export default class TextareaElement extends React.Component {

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
			textareaData: {
				id: null,
				className: null,
				name: null,
				rows: 5,
				placeholder: null,
				value: undefined,
				onChange: null
			}
		};
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props.elementData);
		this.setState(updatedComponentState);
	}
	
	render() {

		return (
			
			<div id = {this.state.containerData.id} className = {this.state.containerData.className}>
				<Label key = { Date.now() } labelData = { this.state.labelData } />
				<textarea id = {this.state.textareaData.id} className = {this.state.textareaData.className} rows = {this.state.textareaData.rows} name = {this.state.textareaData.name} placeholder = {this.state.textareaData.placeholder} value = {this.state.textareaData.value} onChange = {this.state.textareaData.onChange}></textarea>
			</div>
		);
	}
}