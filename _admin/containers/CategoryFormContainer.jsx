import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import APIManager from "../utils/APIManager.js";
// import ComponentHelper from "../utils/ComponentHelperClass";

import { updatePageTitle } from "../actions/PageTitleActions";
import { getInformationMessageInitialState } from "../actions/InformationMessageActions";

import {
			SAVE_CATEGORY, UPDATE_CATEGORY,
			initAddCategoryForm as getFormInitialState, onChangeHandler, saveCategory
		} from "../actions/CategoriesActions";

import DataForm from "../components/FormElements/DataForm.jsx";
import InformationMessage from "../components/Generic/InformationMessage.jsx";
import PageTitle from "../components/Generic/PageTitle.jsx";


class CategoryFormContainer extends React.Component {

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
			saveCategory: null,
			categoryNameValue: null,
			categoryDisplayNameValue: null,
			categoryTagsValue: null
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

	saveCategoryHandler(actionType, value) {

		var url = this.state.formURL;
		var params = JSON.stringify({
			"display_name": this.state.categoryDisplayNameValue,
			"name": this.state.categoryNameValue,
			"tags": this.state.categoryTagsValue
		});

		if(actionType === SAVE_CATEGORY || actionType === UPDATE_CATEGORY)
			this.state.saveCategory(url, "", params);	// It is better to use the same same function in order to Save or Update the category since the formUrl and method is dynamic on the container.
	}

	componentWillReceiveProps(nextProps) {

		let updatedComponentState = Object.assign({}, this.state, nextProps);

		updatedComponentState.formRows[0].inputElements[0].inputData.onChange = this.onChangeHandler.bind(this);
		updatedComponentState.formRows[0].inputElements[1].inputData.onChange = this.onChangeHandler.bind(this);
		updatedComponentState.formRows[1].textareaElements[0].textareaData.onChange = this.onChangeHandler.bind(this);
		updatedComponentState.formRows[2].inputElements[0].inputData.onClick = this.saveCategoryHandler.bind(this);

		this.setState(updatedComponentState);
	}

	componentWillMount() {

		this.props.updatePageTitle("Προσθήκη νέας Κατηγορίας");
		this.props.getInformationMessageInitialState();
		this.props.getFormInitialState();
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
// You can try replacing the state by using defaultProps.
/*CategoryFormContainer.defaultProps = {
	formShouldUpdate: false,
	formId: undefined,
	formMethod: undefined,
	formURL: undefined,
	formRows: [],
	pageTitle: {},
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
	resetInputElements: true,
	onChangeHandler: null,
	saveCategory: null,
	categoryNameValue: null,
	categoryDisplayNameValue: null,
	categoryTagsValue: null
};*/


const mapStateToProps = (state) => {

	return {
		formShouldUpdate: state.CategoriesReducer.formShouldUpdate,
		formId: state.CategoriesReducer.formId,
		formMethod: state.CategoriesReducer.formMethod,
		formURL: state.CategoriesReducer.formURL,
		formRows: state.CategoriesReducer.formRows,
		informationMessageData: state.InformationMessageReducer.informationMessageData,
		pageTitle: state.PageTitleReducer,
		categoryNameValue: state.CategoriesReducer.categoryNameValue,
		categoryDisplayNameValue: state.CategoriesReducer.categoryDisplayNameValue,
		categoryTagsValue: state.CategoriesReducer.categoryTagsValue,
		saveSuccess: state.CategoriesReducer.saveSuccess
	};
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		updatePageTitle,
		getInformationMessageInitialState,
		getFormInitialState,
		onChangeHandler,
		saveCategory,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFormContainer);
