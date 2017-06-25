import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
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
				defaultValue: undefined,
				value: undefined,
				onChange: null
			},
			actionType: null
		};
	}

	componentWillReceiveProps(nextProps) {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, nextProps.elementData);
		this.setState(updatedComponentState);
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props.elementData);
		this.setState(updatedComponentState);
	}

	onChangeHandler(event) {

		if(this.state.textareaData.onChange)
			this.state.textareaData.onChange(this.state.actionType, event.target.value);
	}

	render() {

		return (
			<div id = { this.state.containerData.id } className = { this.state.containerData.className }>
				<Label key = { Date.now() } labelData = { this.state.labelData } />
				<textarea id = { this.state.textareaData.id } className = { this.state.textareaData.className } rows = { this.state.textareaData.rows } name = { this.state.textareaData.name } placeholder = { this.state.textareaData.placeholder }  defaultValue = { this.state.textareaData.defaultValue } value = { this.state.textareaData.value } onChange = { this.onChangeHandler.bind(this) }></textarea>
			</div>
		);
	}
}