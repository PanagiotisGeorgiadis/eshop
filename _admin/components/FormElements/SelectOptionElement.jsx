import React from "react";

export default class SelectOptionElement extends React.Component {

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

		if(propsObject.id)
			updatedOptionData.id = propsObject.id;

		if(propsObject.className)
			updatedOptionData.className = propsObject.className;

		if(propsObject.value)
			updatedOptionData.value = propsObject.value;

		this.setState({
			optionData: updatedOptionData
		});
	}

	componentWillMount() {

		if(this.props.inputData)
			this.updateComponentState(this.props.inputData);
	}
	
	render() {

		return (
			<option id = {this.state.optionData.id} className = {this.state.optionData.className} value = {this.state.optionData.value}>
				{ this.state.optionData.value }
			</option>
		);
	}
}
