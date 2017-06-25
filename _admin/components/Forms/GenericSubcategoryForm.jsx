import React from "react";

import APIManager from "../../utils/APIManager.js";
import ComponentHelper from "../../utils/ComponentHelperClass";
import DataForm from "../FormElements/DataForm.jsx";

export default class GenericSubcategoryForm extends React.Component {

	constructor() {

		super();

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
								defaultValue: undefined,
								value: undefined,
								onChange: this.updateCategorySelection.bind(this)
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
								defaultValue: undefined,
								value: undefined,
								type: "text",
								onChange: this.updateGenericSubcategoryDisplayName.bind(this)
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
								defaultValue: undefined,
								value: undefined,
								type: "text",
								onChange: this.updateGenericSubcategoryName.bind(this)
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
								defaultValue: undefined,
								value: undefined,
								onChange: this.updateGenericSubcategoryTags.bind(this)
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
								defaultValue: "Αποθήκευση",
								value: undefined,
								type: "submit",
								onClick: this.saveGenericSubcategory.bind(this)
							}
						}
					]
				}
			],
			informationMessageHandler: null
		};
	}

	resetInputElements() {

		let updatedFormRowsState = Object.assign({}, this.state.formRows);

		updatedFormRowsState[0].selectElements[0].selectData.value = updatedFormRowsState[0].selectElements[0].options[0].value;
		updatedFormRowsState[1].inputElements[0].inputData.value = undefined;
		updatedFormRowsState[1].inputElements[1].inputData.value = undefined;
		updatedFormRowsState[2].textareaElements[0].textareaData.value = undefined;

		this.setState({
			formShouldUpdate: true,
		 	formRows: updatedFormRowsState
		});
	}

	saveGenericSubcategory(event) {

		event.preventDefault();

		var url = "/api/genericSubcategory";
		var params = JSON.stringify({
			"category": this.state.formRows[0].selectElements[0].selectData.value,
			"display_name": this.state.formRows[1].inputElements[0].inputData.value,
			"name": this.state.formRows[1].inputElements[1].inputData.value,
			"tags": this.state.formRows[2].textareaElements[0].textareaData.value
		});

		APIManager.post(url, "", params, this.state.informationMessageHandler);
	}

	/* Start of Input Handler functions */
	updateCategorySelection(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[0].selectElements[0].selectData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	updateGenericSubcategoryDisplayName(event) {

		console.log(event.target.value);
		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[1].inputElements[0].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	updateGenericSubcategoryName(event) {

		console.log(event.target.value);
		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[1].inputElements[1].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	updateGenericSubcategoryTags(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[2].textareaElements[0].textareaData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}
	/* End of Input Handler functions */
	
	/* Start of Select Input fetch & update functions */
	updateCategoryOptions(error, response) {

		var categories = JSON.parse(response).message;
		var updatedFormRowsState = Object.assign([], this.state.formRows);

		var optionsArray = [];

		for(var i = 0; i < categories.length; i++) {

			var option = {};
			option.id = categories[i]._id;
			option.value = categories[i].display_name;

			optionsArray.push(option);
		}

		updatedFormRowsState[0].selectElements[0].selectData.value = optionsArray[0].value;
		updatedFormRowsState[0].selectElements[0].options = optionsArray;

		this.setState({
			formShouldUpdate: true,
			formRows: updatedFormRowsState
		});
	}

	getCategories() {

		var url = "/api/category/";
		var offset = 0;
		var limit = 0;
		var searchValue = "";
		var params = "offset=" + offset + "&limit=" + limit + "&searchValue=" + searchValue;

		// APIManager.get(url, params, this.updateCategoryOptions.bind(this));
		APIManager.getWithPromise(url, params).then((response) => {

			this.updateCategoryOptions(null, response);

		}).catch((error) => {
			this.updateCategoryOptions(error, null);
		});
	}
	/* End of Select Input fetch & update functions */

	componentWillReceiveProps(nextProps) {

		if(nextProps.resetInputElements)
			this.resetInputElements();
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		this.getCategories();

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}
	
	render() {

		console.log("Render function called!");
		return (
			<div>
				<DataForm formId = { this.state.formId } formMethod = { this.state.formMethod } formRows = { this.state.formRows } formShouldUpdate = { this.state.formShouldUpdate } />
			</div>
		);
	}
}
