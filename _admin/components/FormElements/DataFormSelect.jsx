import React from "react";

import DataFormSelectOption from "./DataFormSelectOption.jsx";

export default class DataFormSelect extends React.Component {

	constructor() {

		super();
		this.state = {
			selectData: {
				id: null,
				className: null,
				name: null
			},
			options: []
		};
	}

	getSelectElementState() {

		let updatedSelectState = Object.assign({}, this.state.selectData);

		if(propsObject.selectId)
			updatedSelectState.id = propsObject.selectId;

		if(propsObject.selectClass)
			updatedSelectState.className = propsObject.selectClass;

		if(propsObject.selectName)
			updatedSelectState.name = propsObject.selectName;

		return updatedSelectState;
	}

	getOptionElements() {

		let updatedOptions = Object.assign([], this.state.options);

		if(propsObject.options)
			updatedOptions = propsObject.options;

		return updatedOptions;
	}

	updateComponentState(propsObject) {

		let updatedSelectState = this.getSelectElementState();
		let updatedOptions = this.getOptionElements();

		this.setState({
			selectData: updatedSelectState,
			options: updatedOptions
		});
	}

	componentWillMount() {

		this.updateComponentState(this.props.inputData);
	}
	
	render() {

		let options;
		if(this.state.options.length) {

			options = this.state.options.map( (option, iterator) => {

				return (
					<DataFormSelectOption key = {iterator} inputData = {option} />
				);
			});
		}

		return (
			<select id = {this.state.selectData.id} className = {this.state.selectData.className} name = {this.state.selectData.name}>
				{ options }
			</select>
		);
	}
}
