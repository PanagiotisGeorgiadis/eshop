import React from "react";

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

	getUpdatedTextInputState(inputData) {

		let updatedInputState = Object.assign({}, this.state.inputData);

		if(inputData.id)
			updatedInputState.id = inputData.id;

		if(inputData.className)
			updatedInputState.className = inputData.className;

		if(inputData.name)
			updatedInputState.name = inputData.name;

		if(inputData.value)
			updatedInputState.value = inputData.value;

		if(inputData.type)
			updatedInputState.type = inputData.type;

		if(inputData.onChange) {

			updatedInputState.onChange = inputData.onChange;
			updatedInputState.onChange.bind(this);
		}

		if(inputData.onClick) {
			updatedInputState.onClick = inputData.onClick;
			updatedInputState.onClick.bind(this);
		}

		return updatedInputState;
	}

	updateComponentState(propsObject) {

		let updatedContainerState = Object.assign({}, this.state.containerData);
		let updatedLabelState = Object.assign({}, this.state.labelData);
		let updatedInputState = Object.assign({}, this.state.inputData);

		if(propsObject.containerData)
			updatedContainerState = this.getUpdatedContainerState(propsObject.containerData);

		if(propsObject.labelData)
			updatedLabelState = this.getUpdatedLabelState(propsObject.labelData);

		if(propsObject.inputData)
			updatedInputState = this.getUpdatedTextInputState(propsObject.inputData);

		this.setState({
			containerData: updatedContainerState,
			labelData: updatedLabelState,
			inputData: updatedInputState
		});
	}

	componentDidMount() {

		if(this.props.elementData)
			this.updateComponentState(this.props.elementData);
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