import React from "react";
import ReactDOM from "react-dom";

import AdminMenu from "./AdminMenu/AdminMenu.jsx";
import PageTitle from "./Generic/PageTitle.jsx";
import InformationMessage from "./Generic/InformationMessage.jsx";
import CategoryForm from "./Forms/CategoryForm.jsx";
import AdminFooter from "./Generic/AdminFooter.jsx";

export default class AddCategoryPage extends React.Component {

	constructor() {

		super();
		this.textareaHandler = this.handleTextareaChange.bind(this);
		this.displayInputHandler = this.handleDisplayInputChange.bind(this);
		this.categoryInputHandler = this.handleCategoryInputChange.bind(this);
		this.saveCategoryHandler = this.saveCategory.bind(this);
		this.state = {
			adminMenuData: {
			},
			pageTitleData: {
				containerId: null,
				containerClassName: null,
				pageTitleId: null,
				pageTitleClassName: "text-center",
				pageTitleText: "Προσθήκη νέας Κατηγορίας"
			},
			informationMessageData: {
				containerId: null,
				containerClassName: "container text-center",
				informationMessageId: "message_container",
				informationMessageClassName: "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 hidden",
				informationMessageText: null 
			},
			categoryFormData: {

			},
			adminFooterData: {
				containerId: null,
				containerClassName: "footer_container",
				footerId: null,
				footerClassName: "footerContent",
				footerText: "Copyright 2017"
			}
		};
	}
	// TODO: Add the message update through react!
	componentWillMount() {

	}

	render() {

		//<form id="add_category_form" method="POST">

		//	<div className = "container">

		//		<div className = "row">
		//			<DataFormInputText key = {this.state.display_name.timestamp} inputData = {this.state.display_name} />
		//			<DataFormInputText key = {this.state.category_name.timestamp} inputData = {this.state.category_name} />
		//		</div>

		//		<div className = "row">
		//			<DataFormTextarea key = {this.state.textarea.timestamp} inputData = {this.state.textarea} />
		//		</div>

		//		<div className = "row text-center">
		//			<DataFormInputButton inputData = {this.state.submitButton} />
		//		</div>

		//	</div>

		//</form>

		return (

			<div>
				<AdminMenu />
				<PageTitle pageTitleData = {this.state.pageTitleData} />
				<InformationMessage informationMessageData = {this.state.informationMessageData} />
				<CategoryForm />
				<AdminFooter adminFooterData = {this.state.adminFooterData} />
			</div>
		);
	}
}

const page_root = document.getElementById("add_category_root");

ReactDOM.render(<AddCategoryPage />, page_root);