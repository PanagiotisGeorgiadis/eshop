import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import APIManager from "../utils/APIManager.js";
// import ComponentHelper from "../utils/ComponentHelperClass";

import { updatePageTitle } from "../actions/PageTitleActions";
import { getInformationMessageInitialState } from "../actions/InformationMessageActions";

import {
		SAVE_PRODUCT, UPDATE_PRODUCT,
		initAddProductForm as getFormInitialState, onChangeHandler, saveProduct } from "../actions/ProductsActions";

import DataForm from "../components/FormElements/DataForm.jsx";
import InformationMessage from "../components/Generic/InformationMessage.jsx";
import PageTitle from "../components/Generic/PageTitle.jsx";

import { getCategories, getGenericSubcategories, getSpecificSubcategories } from "../actions/CrudOperationActions";

class ProductFormContainer extends React.Component {

	constructor(props) {

		super(props);
		this.state = {

			formShouldUpdate: false,
			formId: undefined,
			formMethod: undefined,
			formURL: undefined,
			formRows: [],
			pageTitle: {},
			informationMessageData: {},
			resetInputElements: true,
			onChangeHandler: null,
			saveProduct: null,
			categoryDisplayNameValue: null,
			genericSubcategoryDisplayNameValue: null,
			specificSubcategoryDisplayNameValue: null,
			productDisplayNameValue: null,
			productNameValue: null,
			productDescriptionValue: null
		};
	}

	shouldComponentUpdate(nextProps) {

		if(nextProps.formShouldUpdate)
			return true;

		return false;
	}

	onChangeHandler(actionType, value) {

		this.state.onChangeHandler(actionType, value);
	}

	saveProductHandler(actionType, value) {

		var url = this.state.formURL;
		var params = JSON.stringify({
			"category": this.state.categoryDisplayNameValue,
			"generic_subcategory": this.state.genericSubcategoryDisplayNameValue,
			"specific_subcategory": this.state.specificSubcategoryDisplayNameValue,
			"display_name": this.state.productDisplayNameValue,
			"name": this.state.productNameValue,
			"description": this.state.productDescriptionValue
		});

		if(actionType === SAVE_PRODUCT || actionType === UPDATE_PRODUCT)
			this.state.saveProduct(url, "", params);// As it seems, it is better to use the same same function in order to Save or Update the category since the formUrl and method is dynamic on the container.
	}

	updateSelectElementOptions(entitiesObject, updatedSelectElementState) {

		var optionsArray = [];

		for(var i = 0; i < entitiesObject.length; i++) {

			var option = {};
			option.id = entitiesObject[i]._id;
			option.value = entitiesObject[i].display_name;

			optionsArray.push(option);
		}

		updatedSelectElementState.selectData.value = optionsArray[0].value;
		updatedSelectElementState.options = optionsArray;

		return optionsArray[0].value;
	}

	componentWillReceiveProps(nextProps) {

		let categoryDisplayNameInitialValue = null;
		let genericSubcategoryDisplayNameInitialValue = null;
		let specificSubcategoryDisplayNameInitialValue = null;
		let updatedComponentState = Object.assign({}, this.state, nextProps);

		if(updatedComponentState.formRows && updatedComponentState.formRows.length) {

			updatedComponentState.formRows[0].selectElements[0].selectData.onChange = this.onChangeHandler.bind(this);
			updatedComponentState.formRows[0].selectElements[1].selectData.onChange = this.onChangeHandler.bind(this);
			updatedComponentState.formRows[0].selectElements[2].selectData.onChange = this.onChangeHandler.bind(this);
			updatedComponentState.formRows[1].inputElements[0].inputData.onChange = this.onChangeHandler.bind(this);
			updatedComponentState.formRows[1].inputElements[1].inputData.onChange = this.onChangeHandler.bind(this);
			updatedComponentState.formRows[2].textareaElements[0].textareaData.onChange = this.onChangeHandler.bind(this);
			updatedComponentState.formRows[3].inputElements[0].inputData.onClick = this.saveProductHandler.bind(this);
		}

		if(nextProps.categories && nextProps.categories.length)
			categoryDisplayNameInitialValue = this.updateSelectElementOptions(nextProps.categories, updatedComponentState.formRows[0].selectElements[0]);

		if(nextProps.genericSubcategories && nextProps.genericSubcategories.length)
			genericSubcategoryDisplayNameInitialValue = this.updateSelectElementOptions(nextProps.genericSubcategories, updatedComponentState.formRows[0].selectElements[1]);

		if(nextProps.specificSubcategories && nextProps.specificSubcategories.length)
			specificSubcategoryDisplayNameInitialValue = this.updateSelectElementOptions(nextProps.specificSubcategories, updatedComponentState.formRows[0].selectElements[2]);

		if(!updatedComponentState.categoryDisplayNameValue && !nextProps.categoryDisplayNameValue)
			updatedComponentState.categoryDisplayNameValue = categoryDisplayNameInitialValue;

		if(!updatedComponentState.genericSubcategoryDisplayNameValue && !nextProps.genericSubcategoryDisplayNameValue)
			updatedComponentState.genericSubcategoryDisplayNameValue = genericSubcategoryDisplayNameInitialValue;

		if(!updatedComponentState.specificSubcategoryDisplayNameValue && !nextProps.specificSubcategoryDisplayNameValue)
			updatedComponentState.specificSubcategoryDisplayNameValue = specificSubcategoryDisplayNameInitialValue;

		this.setState(updatedComponentState);
	}

	componentWillMount() {

		this.props.updatePageTitle("Προσθήκη Προϊόντος");
		this.props.getInformationMessageInitialState();
		this.props.getFormInitialState();

		if(!this.props.categories && this.props.getCategories)
			this.props.getCategories("/api/category");

		if(!this.props.genericSubcategories && this.props.getGenericSubcategories)
			this.props.getGenericSubcategories("/api/genericSubcategory");

		if(!this.props.specificSubcategories && this.props.getSpecificSubcategories)
			this.props.getSpecificSubcategories("/api/specificSubcategory");
	}

	render() {

		return (
			<div>
				<PageTitle pageTitleData = { this.state.pageTitle.pageTitleData } containerData = { this.state.pageTitle.containerData } />
				<InformationMessage informationMessageData = { this.state.informationMessageData } />
				<DataForm formId = { this.state.formId } formMethod = { this.state.formMethod } formRows = { this.state.formRows } formShouldUpdate = { this.state.formShouldUpdate } />
			</div>
		);
	}
}

const mapStateToProps = (state) => {

	return {
		formShouldUpdate: state.ProductsReducer.formShouldUpdate,
		formId: state.ProductsReducer.formId,
		formMethod: state.ProductsReducer.formMethod,
		formURL: state.ProductsReducer.formURL,
		formRows: state.ProductsReducer.formRows,
		informationMessageData: state.InformationMessageReducer.informationMessageData,
		pageTitle: state.PageTitleReducer,
		categoryDisplayNameValue: state.ProductsReducer.categoryDisplayNameValue,
		genericSubcategoryDisplayNameValue: state.ProductsReducer.genericSubcategoryDisplayNameValue,
		specificSubcategoryDisplayNameValue: state.ProductsReducer.specificSubcategoryDisplayNameValue,
		productDisplayNameValue: state.ProductsReducer.productDisplayNameValue,
		productNameValue: state.ProductsReducer.productNameValue,
		productDescriptionValue: state.ProductsReducer.productDescriptionValue,
		categories: state.CrudOperationReducer.categories,
		genericSubcategories: state.CrudOperationReducer.genericSubcategories,
		specificSubcategories: state.CrudOperationReducer.specificSubcategories
	};
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		updatePageTitle,
		getInformationMessageInitialState,
		getFormInitialState,
		onChangeHandler,
		saveProduct,
		getCategories,
		getGenericSubcategories,
		getSpecificSubcategories
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormContainer);
