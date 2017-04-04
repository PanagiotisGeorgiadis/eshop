import React from "react";

import DataForm from "../FormElements/DataForm.jsx";
import InformationMessage from "../Generic/InformationMessage.jsx";
import APIManager from "../../utils/APIManager.js";

export default class GenericSubcategoryForm extends React.Component {

	constructor() {

		super();

		this.categoryNameSelectHandler = this.handleCategoryNameSelectElementChange.bind(this);
		this.genericSubcategoryDisplayNameInputHandler = this.handleGenericSubcategoryDisplayNameInputChange.bind(this);
		this.genericSubcategoryNameInputHandler = this.handleGenericSubcategoryNameInputChange.bind(this);
		this.genericSubcategoryTagsHandler = this.handleGenericSubcategoryTagsInputChange.bind(this);
		this.saveGenericSubcategoryHandler = this.saveGenericSubcategory.bind(this);

		this.state = {
			formShouldUpdate: false,
			formId: "generic_subcategory_form",
			formMethod: "POST",
			formRows: [
				{
					selectElements: [
						{
							containerData: {
								className: "form-group col-xs-offset-4 col-xs-4"
							},
							labelData: {
								inputName: "category_name",
								text: "Κατηγορία που ανήκει:"
							},
							selectData: {
								className: "form-control",
								name: "category_name",
								value: undefined,
								onChange: this.categoryNameSelectHandler
							},
							options: []
						}
					]
				},
				{
					inputElements: [
						{
							containerData: {
								className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
							},
							labelData: {
								inputName: "generic_subcategory_display_name",
								text: "Όνομα γενικής υπόκατηγορίας στα Ελληνικά: "
							},
							inputData: {
								className: "form-control",
								name: "generic_subcategory_display_name",
								value: undefined,
								type: "text",
								onChange: this.genericSubcategoryDisplayNameInputHandler
							}
						},
						{
							containerData: {
								className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
							},
							labelData: {
								inputName: "generic_subcategory_name",
								text: "Όνομα γενικής υπόκατηγορίας στα Αγγλικά: "
							},
							inputData: {
								className: "form-control",
								name: "generic_subcategory_name",
								value: undefined,
								type: "text",
								onChange: this.genericSubcategoryNameInputHandler
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
								inputName: "generic_subcategory_tags",
								text: "Tags: "
							},
							textareaData: {
								className: "form-control",
								name: "generic_subcategory_tags",
								rows: 5,
								placeholder: "Υφάσματα, μαξιλάρια, πετσέτες..",
								value: undefined,
								onChange: this.genericSubcategoryTagsHandler
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
								onClick: this.saveGenericSubcategoryHandler
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

	handleCategoryNameSelectElementChange(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[0].selectElements[0].selectData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	handleGenericSubcategoryDisplayNameInputChange(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[1].inputElements[0].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	handleGenericSubcategoryNameInputChange(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[1].inputElements[1].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	handleGenericSubcategoryTagsInputChange(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[2].textareaElements[0].textareaData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	resetInputElements() {

		let updatedFormRowsState = Object.assign({}, this.state.formRows);

		updatedFormRowsState[0].selectElements[0].selectData.value = undefined;
		updatedFormRowsState[1].inputElements[0].inputData.value = undefined;
		updatedFormRowsState[1].inputElements[1].inputData.value = undefined;
		updatedFormRowsState[2].textareaElements[0].textareaData.value = undefined;

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

	updateInformationMessageState(updatedInformationMessageState) {

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
		viewScope.updateInformationMessageState(updatedInformationMessageState);

		// This here causes some kind of a problem because of the timeout. Investigate into it!
		setTimeout(function() {
			viewScope.hideInformationMessage();
		}, 10000);
	}

	saveGenericSubcategory(event) {

		event.preventDefault();

		var viewScope = this;
		var url = "/api/genericSubcategory";
		var params = JSON.stringify({
			"category_name": this.state.formRows[0].selectElements[0].selectData.value,
			"generic_subcategory_display_name": this.state.formRows[1].inputElements[0].inputData.value,
			"generic_subcategory_name": this.state.formRows[1].inputElements[1].inputData.value,
			"generic_subcategory_tags": this.state.formRows[2].textareaElements[0].textareaData.value
		});

		APIManager.post(url, "", params, this.printInformationMessage, this);
	}

	saveCategoriesState(updatedFormRowsState) {

		this.setState({
			formShouldUpdate: true,
			formRows: updatedFormRowsState
		});
	}

	updateCategoriesState(error, response, componentScope) {

		var categories = JSON.parse(response).message;
		var updatedFormRowsState = Object.assign([], componentScope.state.formRows);

		var optionsArray = [];

		for(var i = 0; i < categories.length; i++) {

			var option = {};
			option.id = categories[i]._id;
			option.value = categories[i].display_name;

			optionsArray.push(option);
		}

		updatedFormRowsState[0].selectElements[0].selectData.value = optionsArray[0].value;
		updatedFormRowsState[0].selectElements[0].options = optionsArray;

		componentScope.saveCategoriesState(updatedFormRowsState);
	}

	getCategories() {

		var url = "/api/category/";
		var offset = 0;
		var limit = 0;
		var searchValue = "";
		var params = "offset=" + offset + "&limit=" + limit + "&searchValue=" + searchValue;

		APIManager.get(url, params, this.updateCategoriesState, this);
	}

	componentWillMount() {

		this.getCategories();
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