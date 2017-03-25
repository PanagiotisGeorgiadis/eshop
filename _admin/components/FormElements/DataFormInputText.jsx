import React from "react";

export default class DataFormInputText extends React.Component {

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
			inputData: {
				id: null,
				className: null,
				name: null,
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

	getTextInputState(propsObject) {

		let updatedInputState = Object.assign({}, this.state.inputData);

		if(propsObject.inputId)
			updatedInputState.id = propsObject.inputId;

		if(propsObject.inputClass)
			updatedInputState.className = propsObject.inputClass;

		if(propsObject.inputName)
			updatedInputState.name = propsObject.inputName;

		if(propsObject.inputValue)
			updatedInputState.value = propsObject.inputValue;

		if(propsObject.onChange) {

			updatedInputState.onChange = propsObject.onChange;
			updatedInputState.onChange.bind(this);
		}

		return updatedInputState;
	}

	updateComponentState(propsObject) {

		let updatedContainerState = this.getContainerState(propsObject);
		let updatedLabelState = this.getLabelState(propsObject);		
		let updatedInputState = this.getTextInputState(propsObject);		

		this.setState({
			containerData: updatedContainerState,
			labelData: updatedLabelState,
			inputData: updatedInputState
		});
	}

	componentDidMount() {

		this.updateComponentState(this.props.inputData);
	}
	
	render() {

		return (

			<div id = {this.state.containerData.id} className = {this.state.containerData.className}>
				<label id = {this.state.labelData.id} className = {this.state.labelData.className} for = {this.state.inputData.name}>
					{this.state.labelData.text}
				</label>
				<input id = {this.state.inputData.id} className = {this.state.inputData.className} type="text" name = {this.state.inputData.name} value = {this.state.inputData.value} onChange = {this.state.inputData.onChange} />
			</div>
		);
	}
}
