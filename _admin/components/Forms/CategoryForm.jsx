import React from "react";

import APIManager from "../../utils/APIManager.js";
import ComponentHelper from "../../utils/ComponentHelperClass";
import DataForm from "../FormElements/DataForm.jsx";

export default class CategoryForm extends React.Component {

	constructor() {

		super();

		this.state = {
			formShouldUpdate: false,
			formId: undefined,
			formMethod: "POST",
			formURL: "/api/category",
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
								defaultValue: undefined,
								value: undefined,
								type: "text",
								onChange: this.updateCategoryDisplayName.bind(this)
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
								defaultValue: undefined,
								value: undefined,
								type: "text",
								onChange: this.updateCategoryName.bind(this)
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
								defaultValue: undefined,
								value: undefined,
								onChange: this.updateCategoryTags.bind(this)
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
								onClick: this.saveCategory.bind(this)
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

		updatedFormRowsState[0].inputElements[0].inputData.value = undefined;
		updatedFormRowsState[0].inputElements[1].inputData.value = undefined;
		updatedFormRowsState[1].textareaElements[0].textareaData.value = undefined;

		this.setState({
			formShouldUpdate: true,
		 	formRows: updatedFormRowsState
		});
	}

	saveCategory(event) {

		event.preventDefault();

		var url = this.state.formURL;
		var params = JSON.stringify({
			"display_name": this.state.formRows[0].inputElements[0].inputData.value,
			"name": this.state.formRows[0].inputElements[1].inputData.value,
			"tags": this.state.formRows[1].textareaElements[0].textareaData.value
		});

		APIManager.post(url, "", params, this.state.informationMessageHandler);
	}

	/* Start of Input Handler functions */
	updateCategoryDisplayName(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[0].inputElements[0].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	updateCategoryName(event) {

		let updatedInputState = Object.assign([], this.state.formRows);
		updatedInputState[0].inputElements[1].inputData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedInputState
		});
	}

	updateCategoryTags(event) {

		let updatedFormRowsState = Object.assign([], this.state.formRows);
		updatedFormRowsState[1].textareaElements[0].textareaData.value = event.target.value;

		this.setState({
			formShouldUpdate: false,
			formRows: updatedFormRowsState
		});
	}
	/* End of Input Handler functions */

	shouldComponentUpdate(nextProps, nextState) {

		if(nextProps.formShouldUpdate)
			return true;

		return false;
	}

	componentWillReceiveProps(nextProps) {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);

		if(nextProps.resetInputElements)
			this.resetInputElements();
	}

	componentWillMount() {
		let updatedComponentState = Object.assign({}, this.state);

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
