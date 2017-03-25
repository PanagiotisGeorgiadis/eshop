import React from "react";

export default class DataFormTextarea extends React.Component {

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

	getContainerState(propsObject) {

		let updatedContainerState = Object.assign({}, this.state.containerData);

		if(propsObject.containerId)
			updatedContainerState.id = propsObject.containerId;

		if(propsObject.containerClass)
			updatedContainerState.className = propsObject.containerClass;

		return updatedContainerState;
	}

	getLabelState(propsObject) {

		let updatedLabelState = Object.assign({}, this.state.labelData);

		if(propsObject.labelId)
			updatedLabelState.id = propsObject.labelId;

		if(propsObject.labelClass)
			updatedLabelState.className = propsObject.labelClass;

		if(propsObject.labelText)
			updatedLabelState.text = propsObject.labelText;

		return updatedLabelState;
	}

	getTextareaState(propsObject) {

		let updatedTextareaState = Object.assign({}, this.state.textareaData);

		if(propsObject.textareaId)
			updatedTextareaState.id = propsObject.textareaId;

		if(propsObject.textareaClass)
			updatedTextareaState.className = propsObject.textareaClass;

		if(propsObject.textareaName)
			updatedTextareaState.name = propsObject.textareaName;

		if(propsObject.textareaRows)
			updatedTextareaState.rows = propsObject.textareaRows;

		if(propsObject.textareaPlaceholder)
			updatedTextareaState.placeholder = propsObject.textareaPlaceholder;

		if(propsObject.textareaValue)
			updatedTextareaState.value = propsObject.textareaValue;

		if(propsObject.onChange) {

			updatedTextareaState.onChange = propsObject.onChange;
			updatedTextareaState.onChange.bind(this);
		}

		return updatedTextareaState;
	}

	updateComponentState(propsObject) {

		let updatedContainerState = this.getContainerState(propsObject);
		let updatedLabelState = this.getLabelState(propsObject);
		let updatedTextareaState = this.getTextareaState(propsObject);

		this.setState({
			containerData: updatedContainerState,
			labelData: updatedLabelState,
			textareaData: updatedTextareaState
		});
	}

	componentWillMount() {

		this.updateComponentState(this.props.inputData);
	}
	
	render() {

		return (
			
			<div id = {this.state.containerData.id} className = {this.state.containerData.className}>
				<label id = {this.state.labelData.id} className = {this.state.labelData.className} for = {this.state.textareaData.name} > {this.state.labelData.text} </label>
				<textarea id = {this.state.textareaData.id} className = {this.state.textareaData.className} rows = {this.state.textareaData.rows} name = {this.state.textareaData.name} placeholder = {this.state.textareaData.placeholder} value = {this.state.textareaData.value} onChange = {this.state.textareaData.onChange}></textarea>
			</div>
		);
	}
}
