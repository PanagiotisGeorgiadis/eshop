import React from "react";

import APIManager from "../../utils/APIManager";
import CategoryForm from "../Forms/CategoryForm.jsx";
import InformationMessage from "../Generic/InformationMessage.jsx";
import PageTitle from "../Generic/PageTitle.jsx";

export default class EditCategoryPage extends React.Component {

	constructor() {

		super();

		this.state = {
			pageTitle: {
				containerData: {
					id: null,
					className: null
				},
				pageTitleData: {
					id: null,
					className: "text-center page_title",
					text: "Επεξεργασία κατηγορίας"
				}
			},
			informationMessageData: {
				containerData: {
					id: null,
					className: "container text-center"
				},
				messageData: {
					id: "message_container",
					className: "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 hiddenMessage",
					text: null
				}
			},
			formShouldUpdate: true,
			formId: null,
			formMethod: "PUT",
			formURL: null,
			formRows: [
				{
					inputElements: [
						{
							inputData: {
								value: undefined,
							}
						},
						{
							inputData: {
								value: undefined,
							}
						}
					]
				},
				{
					textareaElements: [
						{
							textareaData: {
								value: undefined,
							}
						}
					]
				}
			],
			resetInputElements: false,
			informationMessageHandler: this.printInformationMessage.bind(this),
		};
	}	

	printInformationMessage(err, response) {

		let updatedInformationMessageState = Object.assign({}, this.state.informationMessageData);

		if(response) {

			if(response.includes("Successfully"))
				updatedInformationMessageState.messageData.className = "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 bg-success";
			else
				updatedInformationMessageState.messageData.className = "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 bg-danger";

			updatedInformationMessageState.messageData.text = response;

		} else {

			updatedInformationMessageState.messageData.text = err;
		}
		
		this.setState({
			informationMessageData: updatedInformationMessageState
		});
	}

	updateFormState(err, response) {

		// Maybe go one step back in history or redirect somewhere.
		if(err) {
			console.log("Some Error Occured!" + err);
			return;
		}

		var serverResponse = JSON.parse(response);
		var serverConfirmation = serverResponse.confirmation;

		if(serverConfirmation.includes("success")) {
			
			var categoryObject = Object.assign({}, serverResponse.message);
			var updatedComponentState = Object.assign({}, this.state);

			updatedComponentState.formId = categoryObject._id;
			updatedComponentState.formURL = "/api/category/" + categoryObject._id;
			updatedComponentState.formRows[0].inputElements[0].inputData.value = categoryObject.display_name;
			updatedComponentState.formRows[0].inputElements[1].inputData.value = categoryObject.name;
			updatedComponentState.formRows[1].textareaElements[0].textareaData.value = categoryObject.tags.join();

			this.setState(updatedComponentState);
		}
	}

	getCategories(categoryId) {

		var url = "/api/category/" + categoryId;
		var offset = 0;
		var limit = 0;
		var searchValue = "";
		var params = "offset=" + offset + "&limit=" + limit + "&searchValue=" + searchValue;

		// APIManager.get(url, params, this.updateCategoryOptions.bind(this));
		APIManager.get(url, params, this.updateFormState.bind(this));
	}

	componentWillMount() {
		this.getCategories(this.props.match.params.id);
	}

	render() {

		return (
			<div>
				<PageTitle pageTitleData = { this.state.pageTitle.pageTitleData } containerData = { this.state.pageTitle.containerData } />
				<InformationMessage key = { Date.now() } informationMessageData = { this.state.informationMessageData } />
				<CategoryForm informationMessageHandler = { this.state.informationMessageHandler } resetInputElements = { this.state.resetInputElements } formMethod = { this.state.formMethod } formURL = { this.state.formURL } formRows = { this.state.formRows } formShouldUpdate = { this.state.formShouldUpdate } />
			</div>
		);
	}
}