import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import APIManager from "../utils/APIManager";
import Beautifier from "../utils/Beautifier";
// import ComponentHelper from "../utils/ComponentHelperClass";

import { updatePageTitle } from "../actions/PageTitleActions";
import { deleteProduct } from "../actions/ProductsActions";
import { getProducts } from "../actions/CrudOperationActions";

import DataTable from "../components/DataTableElements/DataTable.jsx";
import InformationMessage from "../components/Generic/InformationMessage.jsx";
import PageTitle from "../components/Generic/PageTitle.jsx";

class ProductsDataTableContainer extends React.Component {

	constructor(props) {

		super(props);
		this.state = {

			pageTitle: {},
			tableShouldUpdate: false,
			tableHeaders: [],
			tableRows: [],
			pageTitle: {},
			informationMessageData: {},
		};
	}

	removeEntry(entryId) {

		this.state.deleteProduct(entryId);
	}

	updateEntry(entryId) {

		console.log(entryId);
	}

	attachActionHandlers(tableRow) {

		tableRow.tableActionCells[0].actionButtons[0].buttonData.onClick = this.updateEntry.bind(this);
		tableRow.tableActionCells[0].actionButtons[1].buttonData.onClick = this.removeEntry.bind(this);
	}

	getTableActionCells() {

		return [
			{
				actionButtons: [
					{
						buttonData: {
							className: "edit_category_button",
							href: "javascript:void(0);",
							onClick: this.updateEntry.bind(this)
						},
						iconData: {
							className: "fa fa-pencil"
						}
					},
					{
						buttonData: {
							className: "delete_category_button",
							href: "javascript:void(0);",
							onClick: this.removeEntry.bind(this)
						},
						iconData: {
							className: "fa fa-trash-o"
						}
					}
				]
			}
		];
	}

	updateTableRows(updatedState, entries) {

		updatedState.tableShouldUpdate = true;

		updatedState.tableHeaders = [];
		for(var objectProperties in entries[0]) {
			updatedState.tableHeaders.push(Beautifier.capitalizeFirstLetter(objectProperties));
		}
		updatedState.tableHeaders.push("Options");
		
		updatedState.tableRows = entries.map((entry, iterator) => {
			
			var dataTableRowObject = {};
			dataTableRowObject.tableRowCells = [];

			for(var entryProperties in entry) {

				if(entryProperties === "_id")
					dataTableRowObject.tableRowId = entry[entryProperties];

				dataTableRowObject.tableRowCells.push(entry[entryProperties]);
			}

			dataTableRowObject.tableActionCells = this.getTableActionCells();
			return dataTableRowObject;
		});
	}

	componentWillReceiveProps(nextProps) {

		var updatedState = Object.assign({}, this.state, nextProps);

		if(nextProps.products && nextProps.products.length)
			this.updateTableRows(updatedState, nextProps.products);

		this.setState(updatedState);
	}

	componentWillMount() {

		var url = "/api/product";
		var offset = 0;
		var limit = 0;
		var searchValue = "";
		var params = "offset=" + offset + "&limit=" + limit + "&searchValue=" + searchValue;

		this.props.updatePageTitle("Εμφάνιση Προϊόντων");

		if(!this.props.products)
			this.props.getProducts(url);
	}

	render() {

		return (
			<div>
				<PageTitle pageTitleData = { this.state.pageTitle.pageTitleData } containerData = { this.state.pageTitle.containerData } />
				<div className = "table-responsive">
					<DataTable tableHeaderData = { this.state.tableHeaders } tableBodyData = { this.state.tableRows } tableShouldUpdate = { this.state.tableShouldUpdate } />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {

	return {
		pageTitle: state.PageTitleReducer,
		tableShouldUpdate: state.CategoriesReducer.tableShouldUpdate,
		tableHeaders: state.CategoriesReducer.tableHeaders,
		tableRows: state.CategoriesReducer.tableRows,
		tableActionCells: state.CategoriesReducer.tableActionCells,
		products: state.CrudOperationReducer.products
	};
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		updatePageTitle,
		getProducts,
		deleteProduct
		
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDataTableContainer);
