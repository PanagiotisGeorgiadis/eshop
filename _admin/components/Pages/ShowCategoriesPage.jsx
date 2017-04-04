import React from "react";
// import ReactDOM from "react-dom";

// import AdminMenu from "../AdminMenu/AdminMenu.jsx";
import PageTitle from "../Generic/PageTitle.jsx";
import CategoriesDataTable from "../DataTable/CategoriesDataTable.jsx";
// import CategoryForm from "../Forms/CategoryForm.jsx";
// import AdminFooter from "../Generic/AdminFooter.jsx";

export default class ShowCategoriesPage extends React.Component {

	constructor() {

		super();

		this.state = {
			adminMenuData: {
			},
			pageTitleData: {
				containerId: null,
				containerClassName: null,
				pageTitleId: null,
				pageTitleClassName: "text-center",
				pageTitleText: "Εμφάνιση Κατηγοριών"
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
				container: {
					id: null,
					className: "footer_container"
				},
				footer: {					
					id: null,
					className: "footer_content",
					text: "Copyright 2017"
				}
			}
		};
	}
	// TODO: Add the message update through react!
	componentWillMount() {

	}

	render() {

		return (

			<div>
				<PageTitle pageTitleData = {this.state.pageTitleData} />
				<CategoriesDataTable />
			</div>
		);
	}
}

/* Previous render function 
	
	<AdminMenu />
	<PageTitle pageTitleData = {this.state.pageTitleData} />
	<CategoryForm />
	<AdminFooter containerData = {this.state.adminFooterData.container} footerData = {this.state.adminFooterData.footer} />
*/

// const page_root = document.getElementById("show_categories_root");
// ReactDOM.render(<ShowCategoriesPage />, page_root);