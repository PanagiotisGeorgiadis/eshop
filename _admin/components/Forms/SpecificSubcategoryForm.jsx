import React from "react";

// Iterate through an object and its unknown props.
/*var data = [{},{},{},{},{},{},{},{}];
for( props in data[0] ) {
    console.log(props);
	console.log(data[0][props]);
}*/
import InformationMessage from "../Generic/InformationMessage.jsx";
import DataForm from "../FormElements/DataForm.jsx";

export default class SpecificSubcategoryForm extends React.Component {

	constructor() {

		super();
		this.state = {
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
								name: "category_name"
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
								name: "generic_subcategory_name"
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
								value: undefined,
								type: "text",
								onChange: null
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
								value: undefined,
								type: "text",
								onChange: null
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
								value: undefined,
								onChange: null
							}
						}
					] // End of textareaInputs Array
				}
			], // End Of FormRows Array
			informationMessageData: {
				containerId: null,
				containerClassName: "container text-center",
				informationMessageId: "message_container",
				informationMessageClassName: "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 hiddenMessage",
				informationMessageText: null,
				timestamp: "4"
			}
		}
	}
	
	render() {

		return (
			<div>
				<InformationMessage key = {this.state.informationMessageData.timestamp} informationMessageData = {this.state.informationMessageData} />
				<DataForm formId = { this.state.formId } formMethod = { this.state.formMethod } formRows = { this.state.formRows } />
			</div>
		);
	}
}
