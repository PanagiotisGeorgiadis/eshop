import React from "react";

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

	getUpdatedContainerState(containerData) {

		let updatedContainerState = Object.assign({}, this.state.containerData);

		if(containerData.id)
			updatedContainerState.id = containerData.id;

		if(containerData.className)
			updatedContainerState.className = containerData.className;

		return updatedContainerState;
	}

	getUpdatedLabelState(labelData) {

		let updatedLabelState = Object.assign({}, this.state.labelData);

		if(labelData.id)
			updatedLabelState.id = labelData.id;

		if(labelData.className)
			updatedLabelState.className = labelData.className;

		if(labelData.inputName)
			updatedLabelState.inputName = labelData.inputName;

		if(labelData.text)
			updatedLabelState.text = labelData.text;

		return updatedLabelState;
	}

	getUpdatedTextareaState(containerData) {

		let updatedTextareaState = Object.assign({}, this.state.textareaData);

		if(containerData.id)
			updatedTextareaState.id = containerData.id;

		if(containerData.className)
			updatedTextareaState.className = containerData.className;

		if(containerData.name)
			updatedTextareaState.name = containerData.name;

		if(containerData.rows)
			updatedTextareaState.rows = containerData.rows;

		if(containerData.placeholder)
			updatedTextareaState.placeholder = containerData.placeholder;

		if(containerData.value)
			updatedTextareaState.value = containerData.value;

		if(containerData.onChange) {

			updatedTextareaState.onChange = containerData.onChange;
			updatedTextareaState.onChange.bind(this);
		}

		return updatedTextareaState;
	}

	updateComponentState(propsObject) {

		let updatedContainerState = Object.assign({}, this.state.containerData);
		let updatedLabelState = Object.assign({}, this.state.labelData);
		let updatedTextareaState = Object.assign({}, this.state.textareaData);

		if(propsObject.containerData)
			updatedContainerState = this.getUpdatedContainerState(propsObject.containerData);

		if(propsObject.labelData)
			updatedLabelState = this.getUpdatedLabelState(propsObject.labelData);

		if(propsObject.textareaData)
			updatedTextareaState = this.getUpdatedTextareaState(propsObject.textareaData);

		this.setState({
			containerData: updatedContainerState,
			labelData: updatedLabelState,
			textareaData: updatedTextareaState
		});
	}

	componentWillMount() {

		if(this.props.elementData)
			this.updateComponentState(this.props.elementData);
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