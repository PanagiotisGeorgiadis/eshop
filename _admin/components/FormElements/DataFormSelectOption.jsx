import React from "react";

export default class DataFormSelectOption extends React.Component {

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

	updateComponentState(propsObject) {

		let updatedOptionData = Object.assign({}, this.state.optionData);

		if(propsObject.optionId)
			updatedOptionData.id = propsObject.optionId;

		if(propsObject.optionClass)
			updatedOptionData.className = propsObject.optionClass;

		if(propsObject.optionValue)
			updatedOptionData.value = propsObject.optionValue;

		this.setState({
			optionData: updatedOptionData
		});
	}

	componentWillMount() {

		this.updateComponentState(this.props.inputData);
	}
	
	render() {

		return (
			<option id = {this.state.optionData.id} className = {this.state.optionData.className} value = {this.state.optionData.value}></option>
		);
	}
}
