import React from "react";
//import ReactDOM from "react-dom";

import DataFormInputText from "../FormElements/DataFormInputText.jsx";
import DataFormTextarea from "../FormElements/DataFormTextarea.jsx";
import DataFormInputButton from "../FormElements/DataFormInputButton.jsx";
import InformationMessage from "../Generic/InformationMessage.jsx";
import APIManager from "../../utils/APIManager.js";

export default class CategoryForm extends React.Component {

	constructor() {

		super();
		this.textareaHandler = this.handleTextareaChange.bind(this);
		this.displayInputHandler = this.handleDisplayInputChange.bind(this);
		this.categoryInputHandler = this.handleCategoryInputChange.bind(this);
		this.saveCategoryHandler = this.saveCategory.bind(this);
		// this.printInformationMessageHandler = this.printInformationMessage.bind(this);

		// textInputs is kept for backup purposes of dynamic examples.
			// textInputs: [
			// 	{
			// 		containerClass: "form-group col-xs-offset-1 col-xs-10 col-md-offset-1 col-md-4",
			// 		labelClass: "input_text_label",
			// 		labelText: "Όνομα κατηγορίας στα Ελληνικά: ",
			// 		inputName: "display_name",
			// 		inputId: "display_name_input",
			// 		inputClass: "form-control",
			// 		inputValue: ""
			// 	},
			// 	{
			// 		containerClass: "form-group col-xs-offset-1 col-xs-10 col-md-offset-1 col-md-4",
			// 		labelClass: "input_text_label",
			// 		labelText: "Όνομα κατηγορίας στα Αγγλικά: ",
			// 		inputName: "category_name",
			// 		inputId: "category_name_input",
			// 		inputClass: "form-control",
			// 		inputValue: ""
			// 	}
			// ],
		this.state = {
			display_name: {
				containerClass: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3",
				labelClass: "input_text_label",
				labelText: "Όνομα κατηγορίας στα Ελληνικά: ",
				inputName: "display_name",
				inputId: "display_name_input",
				inputClass: "form-control",
				inputValue: "",
				onChange: this.displayInputHandler,
				timestamp: "1"
			},
			category_name: {
				containerClass: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3",
				labelClass: "input_text_label",
				labelText: "Όνομα κατηγορίας στα Αγγλικά: ",
				inputName: "category_name",
				inputId: "category_name_input",
				inputClass: "form-control",
				inputValue: "",
				onChange: this.categoryInputHandler,
				timestamp: "2"
			},
			textarea: {
				containerClass: "form-group col-xs-offset-2 col-xs-8",
				labelClass: "input_text_label",
				labelText: "Tags: ",
				textareaName: "tags",
				textareaId: "category_tags_input",
				textareaClass: "form-control",
				textareaRows: 5,
				textareaPlaceholder: "Υφάσματα, μαξιλάρια, πετσέτες..",
				textareaValue: "",
				onChange: this.textareaHandler,
				timestamp: "3"
			},
			submitButton: {
				id: "submit_button",
				className: "btn btn-success",
				name: "submit_button",
				value: "Αποθήκευση",
				onClick: this.saveCategoryHandler
			},
			informationMessageData: {
				containerId: null,
				containerClassName: "container text-center",
				informationMessageId: "message_container",
				informationMessageClassName: "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 hiddenMessage",
				informationMessageText: null,
				timestamp: "4"
			},
		};
	}

	handleTextareaChange(event) {

		let updatedTextareaState = Object.assign({}, this.state.textarea);
		updatedTextareaState.textareaValue = event.target.value;

		this.setState({
			textarea: updatedTextareaState
		});
	}

	handleDisplayInputChange(event) {

		let updatedInputState = Object.assign({}, this.state.display_name);
		updatedInputState.inputValue = event.target.value;

		this.setState({
			display_name: updatedInputState
		});
	}

	handleCategoryInputChange(event) {

		let updatedInputState = Object.assign({}, this.state.category_name);
		updatedInputState.inputValue = event.target.value;

		this.setState({
			category_name: updatedInputState
		});
	}

	resetInputElements() {

		let displayNameTextInputState = Object.assign({}, this.state.display_name);
		let categoryNameTextInputState = Object.assign({}, this.state.category_name);
		let updatedTextareaState = Object.assign({}, this.state.textarea);

		displayNameTextInputState.inputValue = "";
		displayNameTextInputState.timestamp = Date.now();
		
		categoryNameTextInputState.inputValue = "";
		categoryNameTextInputState.timestamp = Date.now() + 10;

		updatedTextareaState.textareaValue = "";
		updatedTextareaState.timestamp = Date.now() + 20;

		this.setState({
			display_name: displayNameTextInputState,
			category_name: categoryNameTextInputState,
			textarea: updatedTextareaState
		});
	}

	hideInformationMessage() {

		let updatedInformationMessageState = Object.assign({}, this.state.informationMessageData);
		updatedInformationMessageState.informationMessageClassName += " hiddenMessage";
		updatedInformationMessageState.timestamp = Date.now() + 40;

		this.setState({
			informationMessageData: updatedInformationMessageState
		});
	}

	printInformationMessage(err, response, viewScope) {

		let updatedInformationMessageState = Object.assign({}, viewScope.state.informationMessageData);

		if(response.includes("Successfully"))
			updatedInformationMessageState.informationMessageClassName = "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 bg-success";
		else
			updatedInformationMessageState.informationMessageClassName = "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 bg-danger";

		updatedInformationMessageState.informationMessageText = response;
		viewScope.resetInputElements();
		updatedInformationMessageState.timestamp = Date.now() + 30;

		viewScope.setState({
			informationMessageData: updatedInformationMessageState
		});

		setTimeout(function() {
			viewScope.hideInformationMessage();
		}, 10000);
	}

	saveCategory(event) {

		event.preventDefault();

		var viewScope = this;
		var url = "/api/category";
		var params = JSON.stringify({
			"display_name": this.state.display_name.inputValue,
			"category_name": this.state.category_name.inputValue,
			"category_tags": this.state.textarea.textareaValue
		});
		
		APIManager.post(url, "", params, this.printInformationMessage, this);
	}

	componentWillMount() {
	}

	render() {

		// let textInputs;
		// if(this.state.textInputs.length) {

		// 	textInputs = this.state.textInputs.map( (textInput, iterator) => {

		// 		return (
		// 			<DataFormInputText key = {iterator} inputData = {textInput} />
		// 		);
		// 	});
		// }

		// let textAreas;
		// if(this.state.textAreas.length) {

		// 	textAreas = this.state.textAreas.map( (textArea, iterator) => {

		// 		return (
		// 			<DataFormTextarea key = {iterator} inputData = {textArea} />
		// 		);
		// 	});
		// }

		return (

			<div>
				<InformationMessage key = {this.state.informationMessageData.timestamp} informationMessageData = {this.state.informationMessageData} />

				<form id="add_category_form" method="POST">

					<div className = "container">

						<div className = "row">
							<DataFormInputText key = {this.state.display_name.timestamp} inputData = {this.state.display_name} />
							<DataFormInputText key = {this.state.category_name.timestamp} inputData = {this.state.category_name} />
						</div>

						<div className = "row">
							<DataFormTextarea key = {this.state.textarea.timestamp} inputData = {this.state.textarea} />
						</div>

						<div className = "row text-center">
							<DataFormInputButton inputData = {this.state.submitButton} />
						</div>

					</div>

				</form>

			</div>
		);
	}
}

//const categoryFormContainer = document.getElementById("category_form_root");

//ReactDOM.render(<CategoryForm />, categoryFormContainer);