import React from "react";

import APIManager from "../../utils/APIManager.js";
import ComponentHelper from "../../utils/ComponentHelperClass";
import DataForm from "../FormElements/DataForm.jsx";

export default class SpecificSubcategoryForm extends React.Component {

	constructor() {

		super();

		this.state = {
			formShouldUpdate: false,
			formId: "add_specific_subcategories_form",
			formMethod: "POST",
			formRows: [
				{
					selectElements: [
						{
							containerData: {
								className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
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
						},
						{
							containerData: {
								className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
							},
							labelData: {
								inputName: "generic_subcategory_name",
								text: "Γενική Υπο-Κατηγορία που ανήκει:"
							},
							selectData: {
								className: "form-control",
								name: "generic_subcategory_name",
								defaultValue: undefined,
								value: undefined,
								onChange: this.updateGenericSubcategorySelection.bind(this)
							},
							options: []
						}
					] // End of selectInputs Array.
				},
				{
					inputElements: [
						{
							containerData: {
								className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
							},
							labelData: {
								inputName: "specific_subcategory_display_name",
								text: "Όνομα ειδικής υποκατηγορίας στα Ελληνικά:"
							},
							inputData: {
								className: "form-control",
								name: "specific_subcategory_display_name",
								defaultValue: undefined,
								value: undefined,
								type: "text",
								onChange: this.updateSpecificSubcategoryDisplayName.bind(this)
							}
						},
						{
							containerData: {
								className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
							},
							labelData: {
								inputName: "specific_subcategory_name",
								text: "Όνομα ειδικής υποκατηγορίας στα Αγγλικά:"
							},
							inputData: {
								className: "form-control",
								name: "specific_subcategory_name",
								defaultValue: undefined,
								value: undefined,
								type: "text",
								onChange: this.updateSpecificSubcategoryName.bind(this)
							}
						}
					] // End of textInputs Array.
				},
				{
					textareaElements: [
						{
							containerData: {
								className: "form-group col-xs-offset-2 col-xs-8"
							},
							labelData: {
								inputName: "specific_subcategory_tags",
								text: "Tags:"
							},
							textareaData: {
								className: "form-control",
								name: "specific_subcategory_tags",
								rows: 5,
								placeholder: "Υφάσματα, μαξιλάρια, πετσέτες..",
								defaultValue: undefined,
								value: undefined,
								onChange: this.updateSpecificSubcategoryTags.bind(this)
							}
						}
					] // End of textareaInputs Array.
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
								onClick: this.saveSpecificSubcategory.bind(this)
							}
						}
					] // End of submitInput Array.
				}
			], // End Of FormRows Array
			informationMessageHandler: null
		};
	}

	resetInputElements() {

		let updatedFormRowsState = Object.assign({}, this.state.formRows);

		updatedFormRowsState[0].selectElements[0].selectData.value = updatedFormRowsState[0].selectElements[0].options[0].value;
		updatedFormRowsState[0].selectElements[1].selectData.value = updatedFormRowsState[0].selectElements[1].options[0].value;
		updatedFormRowsState[1].inputElements[0].inputData.value = undefined;
		updatedFormRowsState[1].inputElements[1].inputData.value = undefined;
		updatedFormRowsState[2].textareaElements[0].textareaData.value = undefined;

		this.setState({
			formShouldUpdate: true,
		 	formRows: updatedFormRowsState
		});
	}

	saveSpecificSubcategory(event) {

		event.preventDefault();

		var url = "/api/specificSubcategory";
		var params = JSON.stringify({
			"category": this.state.formRows[0].selectElements[0].selectData.value,
			"generic_subcategory": this.state.formRows[0].selectElements[1].selectData.value,
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

	updateGenericSubcategorySelection(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[0].selectElements[1].selectData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	updateSpecificSubcategoryDisplayName(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[1].inputElements[0].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	updateSpecificSubcategoryName(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[1].inputElements[1].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	updateSpecificSubcategoryTags(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[2].textareaElements[0].textareaData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}
	/* End of Input Handler functions */

	/* Start of Select Input fetch & update functions */
	updateGenericSubcategoryOptions(error, response) {

		var optionsArray = [];
		var genericSubcategories = JSON.parse(response).message;
		var updatedFormRowsState = Object.assign([], this.state.formRows);

		for(var i = 0; i < genericSubcategories.length; i++) {

			var option = {};
			option.id = genericSubcategories[i]._id;
			option.value = genericSubcategories[i].display_name;

			optionsArray.push(option);
		}

		updatedFormRowsState[0].selectElements[1].selectData.value = optionsArray[0].value;
		updatedFormRowsState[0].selectElements[1].options = optionsArray;

		this.setState({
			formShouldUpdate: true,
			formRows: updatedFormRowsState
		});
	}

	getGenericSubcategories() {

		var url = "/api/genericSubcategory/";
		var offset = 0;
		var limit = 0;
		var searchValue = "";
		var params = "offset=" + offset + "&limit=" + limit + "&searchValue=" + searchValue;

		APIManager.get(url, params, this.updateGenericSubcategoryOptions.bind(this));
	}

	updateCategoryOptions(error, response) {

		var optionsArray = [];
		var categories = JSON.parse(response).message;
		var updatedFormRowsState = Object.assign([], this.state.formRows);

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

		APIManager.get(url, params, this.updateCategoryOptions.bind(this));
	}
	/* End of Select Input fetch & update functions */

	componentWillReceiveProps(nextProps) {

		if(nextProps.resetInputElements)
			this.resetInputElements();
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		this.getCategories();
		this.getGenericSubcategories();

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}

	render() {

		return (
			<div>
				<DataForm formId = { this.state.formId } formMethod = { this.state.formMethod } formRows = { this.state.formRows } formShouldUpdate = { this.state.formShouldUpdate } />
			</div>
		);
	}
}
