import React from "react";
import { Redirect } from "react-router-dom";

import PageTitle from "../Generic/PageTitle.jsx";
import CategoriesDataTable from "../DataTables/CategoriesDataTable.jsx";

export default class ShowCategoriesPage extends React.Component {

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
					text: "Προβολή κατηγοριών"
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
			tableActionCells: [
				{
					actionButtons: [
						{
							buttonData: {
								className: "edit_category_button",
								href: "javascript:void(0);",
								onClick: this.editCategoryHandler.bind(this)
							},
							iconData: {
								className: "fa fa-pencil"
							}
						},
						{
							buttonData: {
								className: "delete_category_button",
								href: "javascript:void(0);",
								onClick: this.deleteCategoryHandler.bind(this)
							},
							iconData: {
								className: "fa fa-trash-o"
							}
						}
					]
				}
			],
			tableRowId: null
		};
	}

	/* Start of Information Message functions */
	/*hideInformationMessage() {

		let updatedInformationMessageState = Object.assign({}, this.state.informationMessageData);
		updatedInformationMessageState.messageData.className += " hiddenMessage";

		this.setState({
			informationMessageData: updatedInformationMessageState
		});
	}*/

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

		/*setTimeout( () => {
			this.hideInformationMessage();
		}, 10000);*/
	}
	/* End of Information Message functions */

	// Update Inline Style in here in order to make it "fade out" and also call the APIManager delete function to delete the entry.
	deleteCategoryHandler(tableRowId) {

		console.log("ShowCategoriesPage deleteCategoryHandler fired!");
		console.log(tableRowId);
		// console.log("deleteCategoryHandler");
		// console.log(tableRowId);
		var selectedTableRow;
		var updatedTableRowsState = Object.assign([], this.state.tableRows);

		// selectedTableRow = updatedTableRowsState.map( (tableRow, iterator) => {

		// 	if(tableRow.tableRowId === tableRowId) {
		// 		updatedTableRowsState[iterator].tableRowStyle = { opacity: 0 }; 
		// 	}
		// });

		for(var i = 0; i < updatedTableRowsState.length; i++) {

			// if(updatedTableRowsState[i].tableRowId === tableRowId)
				// updatedTableRowsState[i].tableRowStyle = {opacity: 0};
		}

		// this.setState({
		// 	tableShouldUpdate: true,
		// 	tableRows: updatedTableRowsState
		// });
		this.setState({
			tableRowId: tableRowId
		});
		/*
		var tableRow = this.getTableRowParent(event.target);
		var tableRowId = "";
		var tableElement = null;

		if(tableRow) {	
			tableRowId = tableRow.id;
			tableElement = tableRow.parentNode;
		}

		if(tableRowId) {

			var xhr = new XMLHttpRequest();
			var url = "/api/category/" + tableRowId;

			xhr.open("DELETE", url, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			xhr.onreadystatechange = function() {

				if(xhr.readyState == 4 && xhr.status === 200) {

					if(tableElement) {

						tableRow.style.opacity = 0;
						setTimeout(function() {
							tableElement.removeChild(tableRow);
						}, 1100);
					}
				}
			}
			xhr.send();
		} */
	}
	// redirect to a new page where you will edit the category.
	editCategoryHandler(tableRowId) {

		this.setState({
			tableRowId: tableRowId
		});
	}

	// TODO: Add the message update through react!
	componentWillMount() {

	}

	render() {

		if(this.state.tableRowId) {
			return (
				<Redirect to = { "/admin/edit_category/" + this.state.tableRowId } />
			);
		}

		return (
			<div>
				<PageTitle pageTitleData = { this.state.pageTitle.pageTitleData } containerData = { this.state.pageTitle.containerData } />
				<CategoriesDataTable tableActionCells = { this.state.tableActionCells } tableRowId = { this.state.tableRowId } />
			</div>
		);
	}
}
