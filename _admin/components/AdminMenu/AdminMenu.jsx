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

		this.menuClickHandler = this.handleMenuClick.bind(this);
	}

	componentWillMount() {

		this.setState({
			menuOptions: [ 
			{
				name: "Κατηγορίες Προϊόντων",
				suboptions: [
					{
						name: "Νέα Κατηγορία",
						hrefValue: "/admin/add_category",
						pageName: "addCategory",
						clickHandler: this.menuClickHandler
					},
					{
						name: "Εμφάνιση Κατηγοριών",
						hrefValue: "/admin/show_categories",
						pageName: "showCategories",
						clickHandler: this.menuClickHandler
					}
				]
			},
			{
				name: "Γενικές Υποκατηγορίες Προϊόντων",
				suboptions: [
					{
						name: "Νέα Γενική Υποκατηγορία",
						hrefValue: "/admin/add_generic_subcategory",
						pageName: "addGenericSubcategory",
						clickHandler: this.menuClickHandler
					}, 
					{
						name: "Εμφάνιση Γενικών Υποκατηγοριών",
						hrefValue: "/admin/show_generic_subcategories",
						pageName: "showGenericSubcategories",
						clickHandler: this.menuClickHandler
					}
				]
			},
			{
				name: "Ειδικές Υποκατηγορίες Προϊόντων",
				suboptions: [
					{
						name: "Νέα Ειδική Υποκατηγορία",
						hrefValue: "/admin/add_specific_subcategory",
						pageName: "addSpecificSubcategory",
						clickHandler: this.menuClickHandler
					}, 
					{
						name: "Εμφάνιση Ειδικών Υποκατηγοριών",
						hrefValue: "/admin/show_specific_subcategories",
						pageName: "showSpecificSubcategories",
						clickHandler: this.menuClickHandler
					}
				]
			},
			{
				name: "Προϊόντα",
				suboptions: [
					{
						name: "Καταχώρηση Προϊόντος",
						hrefValue: "/admin/add_product",
						pageName: "addProduct",
						clickHandler: this.menuClickHandler
					},
					{
						name: "Εμφάνιση Προϊόντων",
						hrefValue: "/admin/show_products",
						pageName: "showProducts",
						clickHandler: this.menuClickHandler
					},
					{
						name: "Αναζήτηση Προϊόντων",
						hrefValue: "/admin/search_products",
						pageName: "searchProducts",
						clickHandler: this.menuClickHandler
					}
				]
			}  
		]});
	}

	handleMenuClick(event) {

		console.log(event.target.getAttribute("href"));
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