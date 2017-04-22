import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
import InputElement from "./InputElement.jsx";
import SelectElement from "./SelectElement.jsx";
import TextareaElement from "./TextareaElement.jsx";

export default class FormRow extends React.Component {
	
	constructor() {
		super();
		this.state = {
			inputElements: [],
			selectElements: [],
			textareaElements: []
		};
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props.rowElements);
		this.setState(updatedComponentState);
	}

	render() {

		let selectElements;
		if(this.state.selectElements) {
			
			selectElements = this.state.selectElements.map( (selectElementData, iterator) => {

				var key = Date.now() + iterator;
				return (
					<SelectElement key = { key } elementData = { selectElementData } />
				);
			});
		}

		let inputElements;
		if(this.state.inputElements) {

			inputElements = this.state.inputElements.map( (inputElementData, iterator) => {

				var key = Date.now() + iterator;
				return (
					<InputElement key = { key } elementData = { inputElementData } />
				);
			});
		}

		let textareaElements;
		if(this.state.textareaElements) {

			textareaElements = this.state.textareaElements.map( (textareaElementData, iterator) => {

				var key = Date.now() + iterator;
				return (
					<TextareaElement key = { key } elementData = { textareaElementData } />
				);
			});
		}
		
		return (

			<div className = "row">
				{ selectElements }
				{ inputElements }
				{ textareaElements }
			</div>
		);
	}
}