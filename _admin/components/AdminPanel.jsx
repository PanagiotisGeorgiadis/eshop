import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import AdminMenu from "./AdminMenu/AdminMenu.jsx";
import AdminFooter from "./Generic/AdminFooter.jsx";
import PageTitle from "./Generic/PageTitle.jsx";

import AddCategoryPage from "./Pages/AddCategoryPage.jsx";
import ShowCategoriesPage from "./Pages/ShowCategoriesPage.jsx";

import AddGenericSubcategoryPage from "./Pages/AddGenericSubcategoryPage.jsx";
import ShowGenericSubcategoriesPage from "./Pages/ShowGenericSubcategoriesPage.jsx";

import AddSpecificSubcategoryPage from "./Pages/AddSpecificSubcategoryPage.jsx";
import ShowSpecificSubcategoriesPage from "./Pages/ShowSpecificSubcategoriesPage.jsx";

import AddProductPage from "./Pages/AddProductPage.jsx";
import ShowProductsPage from "./Pages/ShowProductsPage.jsx";
import SearchProductsPage from "./Pages/SearchProductsPage.jsx";
/* Admin Panel href values:

	/admin/add_category 					"Add Category"
	/admin/show_categories 					"Show Categories"

	/admin/add_generic_subcategory 			"Add Generic Subcategory"
	/admin/show_generic_subcategories 		"Show Generic Subcategories"

	/admin/add_specific_subcategory 		"Add Specific Subcategory"
	/admin/show_specific_subcategories 		"Show Specific Subcategories"

	/admin/add_product 						"Add Product"
	/admin/show_products					"Show Products"
	/admin/search_products					"Search Products"

*/

// var Home = () => (

// 	<div>Welcome Home!</div>
// )

export default class AdminPanel extends React.Component {

	constructor() {

		super();
		this.state = {
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

	render() {
		return (
			<Router>
				<div>
					<AdminMenu />

					<Route exact path = "/admin/" component = { AddCategoryPage } />
					<Route exact path = "/admin/add_category" component = { AddCategoryPage } />
					<Route exact path = "/admin/show_categories" component = { ShowCategoriesPage } />
					<Route exact path = "/admin/add_generic_subcategory" component = { AddGenericSubcategoryPage } />
					<Route exact path = "/admin/show_generic_subcategories" component = { ShowGenericSubcategoriesPage } />
					<Route exact path = "/admin/add_specific_subcategory" component = { AddSpecificSubcategoryPage } />
					<Route exact path = "/admin/show_specific_subcategories" component = { ShowSpecificSubcategoriesPage } />
					<Route exact path = "/admin/add_product" component = { AddProductPage } />
					<Route exact path = "/admin/show_products" component = { ShowProductsPage } />
					<Route exact path = "/admin/search_products" component = { SearchProductsPage } />
					
					<AdminFooter containerData = {this.state.adminFooterData.container} footerData = {this.state.adminFooterData.footer} />
				</div>
			</Router>
		);
	}
}

/* Future pages to be implemented.

	<Route path = "/admin/add_generic_subcategory" component = { AddGenericSubcategory } />
	<Route path = "/admin/show_generic_subcategories" component = { ShowGenericSubcategories } />
	<Route path = "/admin/add_specific_subcategory" component = { AddSpecificSubcategory } />
	<Route path = "/admin/show_specific_subcategories" component = { ShowSpecificSubcategories } />
	<Route path = "/admin/add_product" component = { AddProduct } />
	<Route path = "/admin/show_products" component = { ShowProducts } />
	<Route path = "/admin/search_products" component = { SearchProducts } />

*/

var reactRoot = document.getElementById("react-root");
ReactDOM.render(<AdminPanel />, reactRoot);