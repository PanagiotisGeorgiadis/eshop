import React from "react";

import GenericSubcategoryForm from "../Forms/GenericSubcategoryForm.jsx";
import InformationMessage from "../Generic/InformationMessage.jsx";
import PageTitle from "../Generic/PageTitle.jsx";

export default class AddGenericSubcategoryPage extends React.Component {

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
					text: "Προσθήκη νέας Γενικής Υποκατηγορίας"
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
			informationMessageHandler: this.printInformationMessage.bind(this),
			resetInputElements: true
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

	componentWillMount() {

	}

	render() {

		return(
			<div>
				<PageTitle pageTitleData = { this.state.pageTitle.pageTitleData } containerData = { this.state.pageTitle.containerData } />
				<InformationMessage key = { Date.now() } informationMessageData = { this.state.informationMessageData } />
				<GenericSubcategoryForm informationMessageHandler = { this.state.informationMessageHandler } resetInputElements = { this.state.resetInputElements } />
			</div>
		);
	}
}