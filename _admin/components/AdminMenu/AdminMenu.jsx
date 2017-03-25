import React from "react";

import LogoContainer from "./LogoContainer.jsx";
import FillerDiv from "./FillerDiv.jsx";
import AdminMenuOptionsContainer from "./AdminMenuOptionsContainer.jsx";

export default class AdminMenu extends React.Component {

	constructor() {

		super();
		this.state = {

			menuOptions: []
		}
	}

	componentWillMount() {

		this.setState({menuOptions: [ 
			{
				name: "Κατηγορίες Προϊόντων",
				suboptions: [
					{
						name: "Νέα Κατηγορία",
						hrefValue: "/admin/add_category"
					},
					{
						name: "Εμφάνιση Κατηγοριών",
						hrefValue: "/admin/show_categories"
					}
				]
			},
			{
				name: "Γενικές Υποκατηγορίες Προϊόντων",
				suboptions: [
					{
						name: "Νέα Γενική Υποκατηγορία",
						hrefValue: "/admin/add_generic_subcategory"
					}, 
					{
						name: "Εμφάνιση Γενικών Υποκατηγοριών",
						hrefValue: "/admin/show_generic_subcategories"
					}
				]
			},
			{
				name: "Ειδικές Υποκατηγορίες Προϊόντων",
				suboptions: [
					{
						name: "Νέα Ειδική Υποκατηγορία",
						hrefValue: "/admin/add_specific_subcategory"
					}, 
					{
						name: "Εμφάνιση Ειδικών Υποκατηγοριών",
						hrefValue: "/admin/show_specific_subcategories"
					}
				]
			},
			{
				name: "Προϊόντα",
				suboptions: [
					{
						name: "Καταχώρηση Προϊόντος",
						hrefValue: "/admin/add_product"
					},
					{
						name: "Εμφάνιση Προϊόντων",
						hrefValue: "/admin/show_products"
					},
					{
						name: "Αναζήτηση Προϊόντων",
						hrefValue: "/admin/search_products"
					}
				]
			}  
		]});
	}

	render() {
		return (
			<div className = "admin_menu_container">
				<LogoContainer />
				<FillerDiv />
				<AdminMenuOptionsContainer menuOptions = { this.state.menuOptions } />
			</div>
		);
	}
}