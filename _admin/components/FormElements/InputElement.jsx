import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
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
				defaultValue: undefined,
				value: undefined,
				type: undefined,
				onChange: undefined,
				onClick: undefined
			},
			actionType: null
		};
	}

	componentWillReceiveProps(nextProps) {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, nextProps.elementData);
		this.setState(updatedComponentState);
	}

	componentDidMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props.elementData);
		this.setState(updatedComponentState);
	}

	onChangeHandler(event) {

		if(this.state.inputData.onChange)
			this.state.inputData.onChange(this.state.actionType, event.target.value);
	}

	onClickHandler(event) {

		event.preventDefault();
		if(this.state.inputData.onClick)
			this.state.inputData.onClick(this.state.actionType, event.target.value);
	}

	render() {

		return (

			<div id = { this.state.containerData.id } className = { this.state.containerData.className }>
				<Label key = { Date.now() } labelData = { this.state.labelData } />
				<input id = { this.state.inputData.id } className = { this.state.inputData.className } type = { this.state.inputData.type } name = { this.state.inputData.name } defaultValue = { this.state.inputData.defaultValue } value = { this.state.inputData.value } onChange = { this.onChangeHandler.bind(this) } onClick = { this.onClickHandler.bind(this) } />
			</div>
		);
	}
}
