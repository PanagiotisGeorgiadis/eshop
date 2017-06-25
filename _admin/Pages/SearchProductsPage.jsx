import React from "react";

import PageTitle from "../Generic/PageTitle.jsx";
// import SearchBar from "../../containers/SearchBar.jsx";
import { SearchBar } from "../../containers/index.js";

export default class SearchProductsPage extends React.Component {

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
					text: "Αναζήτηση Προϊόντων"
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
			informationMessageHandler: this.printInformationMessage.bind(this)
		};
	}

	/* Start of Information Message functions */
	// hideInformationMessage() {

	// 	let updatedInformationMessageState = Object.assign({}, this.state.informationMessageData);
	// 	updatedInformationMessageState.messageData.className += " hiddenMessage";

	// 	this.setState({
	// 		informationMessageData: updatedInformationMessageState
	// 	});
	// }

	printInformationMessage(err, response) {

		let updatedInformationMessageState = Object.assign({}, this.state.informationMessageData);

		if(response) {

			if(response.includes("Successfully"))
				updatedInformationMessageState.messageData.className = "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 bg-success";
			else
				updatedInformationMessageState.messageData.className = "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 bg-danger";

			updatedInformationMessageState.messageData.text = response;
			this.resetInputElements();

		} else {

			updatedInformationMessageState.messageData.text = err;
		}
		
		this.setState({
			informationMessageData: updatedInformationMessageState
		});

		// setTimeout( () => {
		// 	this.hideInformationMessage();
		// }, 10000);
	}
	/* End of Information Message functions */

	componentWillMount() {

	}

	render() {

		return(
			<div>
				<PageTitle pageTitleData = { this.state.pageTitle.pageTitleData } containerData = { this.state.pageTitle.containerData } />
				<SearchBar />
			</div>
		);
	}
}