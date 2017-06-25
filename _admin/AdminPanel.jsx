import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/";
import initialState from "./AdminPanelState";

import AdminMenu from "./components/AdminMenu/AdminMenu.jsx";
import AdminFooter from "./components/Generic/AdminFooter.jsx";
import PageTitle from "./components/Generic/PageTitle.jsx";

import CategoryFormContainer from "./containers/CategoryFormContainer.jsx";
import CategoriesDataTableContainer from "./containers/CategoriesDataTableContainer.jsx";

import GenericSubcategoryFormContainer from "./containers/GenericSubcategoryFormContainer.jsx";
import GenericSubcategoriesDataTableContainer from "./containers/GenericSubcategoriesDataTableContainer.jsx";

import SpecificSubcategoryFormContainer from "./containers/SpecificSubcategoryFormContainer.jsx";
import SpecificSubcategoriesDataTableContainer from "./containers/SpecificSubcategoriesDataTableContainer.jsx";

import ProductFormContainer from "./containers/ProductFormContainer.jsx";
import ProductsDataTableContainer from "./containers/ProductsDataTableContainer.jsx";

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
					text: "Copyright 2016 - " + new Date().getFullYear()
				}
			}
		};
	}

	render() {
		return (
			<Router>
				<div>
					<AdminMenu />

					<Route exact path = "/admin/" component = { CategoryFormContainer } />
					<Route exact path = "/admin/add_category" component = { CategoryFormContainer } />
					<Route exact path = "/admin/show_categories" component = { CategoriesDataTableContainer } />

					<Route exact path = "/admin/add_generic_subcategory" component = { GenericSubcategoryFormContainer } />
					<Route exact path = "/admin/show_generic_subcategories" component = { GenericSubcategoriesDataTableContainer } />

					<Route exact path = "/admin/add_specific_subcategory" component = { SpecificSubcategoryFormContainer } />
					<Route exact path = "/admin/show_specific_subcategories" component = { SpecificSubcategoriesDataTableContainer } />

					<Route exact path = "/admin/add_product" component = { ProductFormContainer } />
					<Route exact path = "/admin/show_products" component = { ProductsDataTableContainer } />
					
					
					<AdminFooter containerData = {this.state.adminFooterData.container} footerData = {this.state.adminFooterData.footer} />
				</div>
			</Router>
		);
	}
}

/*
	<Route exact path = "/admin/edit_category/:id" component = { EditCategoryPage } />
	
	<Route exact path = "/admin/add_product" component = { AddProductPage } />
	<Route exact path = "/admin/show_products" component = { ShowProductsPage } />
	<Route exact path = "/admin/search_products" component = { SearchProductsPage } />
*/

var reactRoot = document.getElementById("react-root");

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(<Provider store = { store } >
					<AdminPanel />
				</Provider>,
				reactRoot);