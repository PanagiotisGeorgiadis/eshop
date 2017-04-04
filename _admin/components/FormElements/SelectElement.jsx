import React from "react";

import Label from "./Label.jsx";
import SelectOptionElement from "./SelectOptionElement.jsx";

export default class SelectElement extends React.Component {

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
			selectData: {
				id: null,
				className: null,
				name: null,
				onChange: null
			},
			options: []
		};
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

	getUpdatedContainerState(containerData) {

		let updatedContainerState = Object.assign({}, this.state.containerData);

		if(containerData.id)
			updatedContainerState.id = containerData.id;

		if(containerData.className)
			updatedContainerState.className = containerData.className;

		return updatedContainerState;
	}

	getUpdatedSelectElementState(selectData) {

		let updatedSelectState = Object.assign({}, this.state.selectData);

		if(selectData.id)
			updatedSelectState.id = selectData.id;

		if(selectData.className)
			updatedSelectState.className = selectData.className;

		if(selectData.name)
			updatedSelectState.name = selectData.name;

		if(selectData.onChange) {

			updatedSelectState.onChange = selectData.onChange;
			updatedSelectState.onChange.bind(this);
		}

		return updatedSelectState;
	}

	getUpdatedOptionElements(optionsData) {

		let updatedOptions = Object.assign([], this.state.options);

		if(optionsData.length)
			updatedOptions = optionsData;

		return updatedOptions;
	}

	updateComponentState(propsObject) {

		let updatedLabelState = Object.assign({}, this.state.labelData);
		let updatedContainerState = Object.assign({}, this.state.containerData);
		let updatedSelectState = Object.assign({}, this.state.selectData);
		let updatedOptions = Object.assign([], this.state.options);

		if(propsObject.labelData)
			updatedLabelState = this.getUpdatedLabelState(propsObject.labelData);

		if(propsObject.containerData)
			updatedContainerState = this.getUpdatedContainerState(propsObject.containerData);

		if(propsObject.selectData)
			updatedSelectState = this.getUpdatedSelectElementState(propsObject.selectData);

		if(propsObject.options)
			updatedOptions = this.getUpdatedOptionElements(propsObject.options);

		this.setState({
			labelData: updatedLabelState,
			containerData: updatedContainerState,
			selectData: updatedSelectState,
			options: updatedOptions
		});
	}

	componentWillMount() {

		if(this.props.elementData)
			this.updateComponentState(this.props.elementData);
	}

	render() {

		let selectOptions;
		if(this.state.options.length) {

			selectOptions = this.state.options.map( (option, iterator) => {

				return (
					<SelectOptionElement key = {iterator} inputData = {option} />
				);
			});
		}

		return (
			<div id = { this.state.containerData.id } className = { this.state.containerData.className } >
				<Label key = { Date.now() } labelData = { this.state.labelData } />
				<select id = { this.state.selectData.id } className = { this.state.selectData.className } name = { this.state.selectData.name } onChange = { this.state.selectData.onChange }>
					{ selectOptions }
				</select>
			</div>
		);
	}
}