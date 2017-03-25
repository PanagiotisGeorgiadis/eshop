import React from "react";

export default class DataFormInputButton extends React.Component {

	constructor() {

		super();
		this.state = {
			buttonData: {
				id: null,
				className: null,
				name: null,
				value: null,
				onClick: null
			}
		};
	}

	updateComponentState(propsObject) {

		let updatedButtonState = Object.assign({}, this.state.buttonData);

		if(propsObject.id)
			updatedButtonState.id = propsObject.id;

		if(propsObject.className)
			updatedButtonState.className = propsObject.className;

		if(propsObject.name)
			updatedButtonState.name = propsObject.name;

		if(propsObject.value)
			updatedButtonState.value = propsObject.value;

		if(propsObject.onClick) {

			updatedButtonState.onClick = propsObject.onClick;
			updatedButtonState.onClick.bind(this);
		}

		this.setState({
			buttonData: updatedButtonState
		});
	}

	componentWillMount() {

		this.updateComponentState(this.props.inputData);
	}
	
	render() {

		return (
			<input id = {this.state.buttonData.id} className = {this.state.buttonData.className} type = "submit" name = {this.state.buttonData.name} value = {this.state.buttonData.value} onClick  = {this.state.buttonData.onClick} />
		);
	}
}
