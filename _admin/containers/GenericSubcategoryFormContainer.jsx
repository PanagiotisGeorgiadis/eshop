import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import APIManager from "../utils/APIManager.js";
// import ComponentHelper from "../utils/ComponentHelperClass";

import { updatePageTitle } from "../actions/PageTitleActions";
import { getInformationMessageInitialState } from "../actions/InformationMessageActions";

import {
		SAVE_GENERIC_SUBCATEGORY, UPDATE_GENERIC_SUBCATEGORY,
		initAddGenericSubcategoryForm as getFormInitialState, onChangeHandler, saveGenericSubcategory } from "../actions/GenericSubcategoriesActions";

import DataForm from "../components/FormElements/DataForm.jsx";
import InformationMessage from "../components/Generic/InformationMessage.jsx";
import PageTitle from "../components/Generic/PageTitle.jsx";

import { getCategories } from "../actions/CrudOperationActions";

class GenericSubcategoryFormContainer extends React.Component {

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
			saveGenericSubcategory: null,
			categoryDisplayNameValue: null,
			genericSubcategoryNameValue: null,
			genericSubcategoryDisplayNameValue: null,
			genericSubcategoryTagsValue: null,
			categories: null,
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

	saveGenericSubcategoryHandler(actionType, value) {

		var url = this.state.formURL;
		var params = JSON.stringify({
			"category": this.state.categoryDisplayNameValue,
			"display_name": this.state.genericSubcategoryDisplayNameValue,
			"name": this.state.genericSubcategoryNameValue,
			"tags": this.state.genericSubcategoryTagsValue
		});
		
		if(actionType === SAVE_GENERIC_SUBCATEGORY || actionType === UPDATE_GENERIC_SUBCATEGORY)
			this.state.saveGenericSubcategory(url, "", params);// As it seems, it is better to use the same same function in order to Save or Update the generic subcategory since the formUrl and method is dynamic on the container.
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
		let updatedComponentState = Object.assign({}, this.state, nextProps);

		updatedComponentState.formRows[0].selectElements[0].selectData.onChange = this.onChangeHandler.bind(this);
		updatedComponentState.formRows[1].inputElements[0].inputData.onChange = this.onChangeHandler.bind(this);
		updatedComponentState.formRows[1].inputElements[1].inputData.onChange = this.onChangeHandler.bind(this);
		updatedComponentState.formRows[2].textareaElements[0].textareaData.onChange = this.onChangeHandler.bind(this);
		updatedComponentState.formRows[3].inputElements[0].inputData.onClick = this.saveGenericSubcategoryHandler.bind(this);

		if(nextProps.categories && nextProps.categories.length)
			categoryDisplayNameInitialValue = this.updateSelectElementOptions(nextProps.categories, updatedComponentState.formRows[0].selectElements[0]);

		if(!updatedComponentState.categoryDisplayNameValue && !nextProps.categoryDisplayNameValue)
			updatedComponentState.categoryDisplayNameValue = categoryDisplayNameInitialValue;

		this.setState(updatedComponentState);
	}

	componentWillMount() {

		this.props.updatePageTitle("Προσθήκη νέας Γενικής Υποκατηγορίας");
		this.props.getInformationMessageInitialState();
		this.props.getFormInitialState();

		if(!this.props.categories)
			this.props.getCategories("/api/category");
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
		formShouldUpdate: state.GenericSubcategoriesReducer.formShouldUpdate,
		formId: state.GenericSubcategoriesReducer.formId,
		formMethod: state.GenericSubcategoriesReducer.formMethod,
		formURL: state.GenericSubcategoriesReducer.formURL,
		formRows: state.GenericSubcategoriesReducer.formRows,
		informationMessageData: state.InformationMessageReducer.informationMessageData,
		pageTitle: state.PageTitleReducer,
		categoryDisplayNameValue: state.GenericSubcategoriesReducer.categoryDisplayNameValue,
		genericSubcategoryNameValue: state.GenericSubcategoriesReducer.genericSubcategoryNameValue,
		genericSubcategoryDisplayNameValue: state.GenericSubcategoriesReducer.genericSubcategoryDisplayNameValue,
		genericSubcategoryTagsValue: state.GenericSubcategoriesReducer.genericSubcategoryTagsValue,
		categories: state.CrudOperationReducer.categories
	};
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		updatePageTitle,
		getInformationMessageInitialState,
		getFormInitialState,
		onChangeHandler,
		saveGenericSubcategory,
		getCategories,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericSubcategoryFormContainer);
