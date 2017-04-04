import React from "react";

import SelectElement from "./SelectElement.jsx";
import InputElement from "./InputElement.jsx";
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

	getUpdatedRowElementsState(rowElements) {

		let updatedRowElementsState = Object.assign({}, this.state);

		if(rowElements) {
			
			if(rowElements.inputElements)
				updatedRowElementsState.inputElements = rowElements.inputElements;

			if(rowElements.selectElements)
				updatedRowElementsState.selectElements = rowElements.selectElements;

			if(rowElements.textareaElements)
				updatedRowElementsState.textareaElements = rowElements.textareaElements;
		}

		return updatedRowElementsState;
	}

	shouldComponentUpdate() {

		// console.log("FormRow shouldComponentUpdate called!");

		// return false;
	}

	componentWillReceiveProps() {

		// console.log("FormRow componentWillReceiveProps called!");
	}

	componentWillMount() {

		let updatedRowElementsState = Object.assign({}, this.state);

		if(this.props.rowElements)
			updatedRowElementsState = this.getUpdatedRowElementsState(this.props.rowElements);


		this.setState({
			inputElements: updatedRowElementsState.inputElements,
			selectElements: updatedRowElementsState.selectElements,
			textareaElements: updatedRowElementsState.textareaElements
		});
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