import React from "react";

import InformationMessage from "../Generic/InformationMessage.jsx";
import DataForm from "../FormElements/DataForm.jsx";
import APIManager from "../../utils/APIManager.js";

export default class CategoryForm extends React.Component {

	constructor() {

		super();
		this.textareaHandler = this.handleTextareaChange.bind(this);
		this.displayInputHandler = this.handleDisplayInputChange.bind(this);
		this.categoryInputHandler = this.handleCategoryInputChange.bind(this);
		this.saveCategoryHandler = this.saveCategory.bind(this);
		// this.printInformationMessageHandler = this.printInformationMessage.bind(this);
		this.state = {
			formShouldUpdate: false,
			formId: "add_categories_form",
			formMethod: "POST",
			formRows: [
				{
					inputElements: [
						{
							containerData: {
								className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
							},
							labelData: {
								className: "input_text_label",
								inputName: "display_name",
								text: "Όνομα κατηγορίας στα Ελληνικά: "
							},
							inputData: {
								id: "display_name_input",
								className: "form-control",
								name: "display_name",
								value: undefined,
								type: "text",
								onChange: this.displayInputHandler
							}
						},
						{
							containerData: {
								className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
							},
							labelData: {
								className: "input_text_label",
								inputName: "category_name",
								text: "Όνομα κατηγορίας στα Αγγλικά: "
							},
							inputData: {
								id: "category_name_input",
								className: "form-control",
								name: "category_name",
								value: undefined,
								type: "text",
								onChange: this.categoryInputHandler
							}
						}
					]
				},
				{
					textareaElements: [
						{
							containerData: {
								className: "form-group col-xs-offset-2 col-xs-8"
							},
							labelData: {
								className: "input_text_label",
								inputName: "tags",
								text: "Tags: "
							},
							textareaData: {
								id: "category_tags_input",
								className: "form-control",
								name: "tags",
								rows: 5,
								placeholder: "Υφάσματα, μαξιλάρια, πετσέτες..",
								value: undefined,
								onChange: this.textareaHandler
							}
						}
					]
				},
				{
					inputElements: [
						{
							containerData: {
								className: "form-group text-center"
							},
							inputData: {
								id: "submit_button",
								className: "btn btn-success",
								name: "submit_button",
								value: "Αποθήκευση",
								type: "submit",
								onClick: this.saveCategoryHandler
							}
						}
					]
				}
			],
			informationMessageData: {
				containerId: null,
				containerClassName: "container text-center",
				informationMessageId: "message_container",
				informationMessageClassName: "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 hiddenMessage",
				informationMessageText: null,
			}
		};
	}

	handleTextareaChange(event) {

		let updatedFormRowsState = Object.assign([], this.state.formRows);
		updatedFormRowsState[1].textareaElements[0].textareaData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedFormRowsState
		});
	}

	handleDisplayInputChange(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[0].inputElements[0].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	handleCategoryInputChange(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[0].inputElements[1].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	resetInputElements() {

		let updatedFormRowsState = Object.assign({}, this.state.formRows);

		updatedFormRowsState[0].inputElements[0].inputData.value = undefined;
		updatedFormRowsState[0].inputElements[1].inputData.value = undefined;
		updatedFormRowsState[1].textareaElements[0].textareaData.value = undefined;

		this.setState({
			formShouldUpdate: true,
		 	formRows: updatedFormRowsState
		});
	}

	hideInformationMessage() {

		let updatedInformationMessageState = Object.assign({}, this.state.informationMessageData);
		updatedInformationMessageState.informationMessageClassName += " hiddenMessage";

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
			"display_name": this.state.formRows[0].inputElements[0].inputData.value,
			"category_name": this.state.formRows[0].inputElements[1].inputData.value,
			"category_tags": this.state.formRows[1].textareaElements[0].textareaData.value
		});

		APIManager.post(url, "", params, this.printInformationMessage, this);
	}

	componentWillMount() {
		// Nothing happens here for now.
	}

	render() {

		return (

			<div>
				<InformationMessage key = { Date.now() } informationMessageData = {this.state.informationMessageData} />
				<DataForm formId = { this.state.formId } formMethod = { this.state.formMethod } formRows = { this.state.formRows } formShouldUpdate = { this.state.formShouldUpdate } />
			</div>
		);
	}
}