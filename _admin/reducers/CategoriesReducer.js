import Beautifier from "../utils/Beautifier";

import {
		INIT_ADD_CATEGORY_FORM, INIT_EDIT_CATEGORY_FORM,
		UPDATE_CATEGORY_NAME, UPDATE_CATEGORY_DISPLAY_NAME, UPDATE_CATEGORY_TAGS,
		SAVE_CATEGORY, SAVE_CATEGORY_SUCCESS, SAVE_CATEGORY_FAILED,
		UPDATE_CATEGORY, UPDATE_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAILED, 
		DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILED,
		GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED } from "../actions/CategoriesActions";

const defaultCategoryFormRows = [
	{
		inputElements: [
			{
				containerData: {
					className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
				},
				labelData: {
					className: "input_text_label",
					inputName: "display_name",
					text: "Όνομα κατηγορίας στα Ελληνικά: "
				},
				inputData: {
					id: "display_name_input",
					className: "form-control",
					name: "display_name",
					defaultValue: undefined,
					value: undefined,
					type: "text",
					onChange: null
				},
				actionType: UPDATE_CATEGORY_DISPLAY_NAME
			},
			{
				containerData: {
					className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
				},
				labelData: {
					className: "input_text_label",
					inputName: "category_name",
					text: "Όνομα κατηγορίας στα Αγγλικά: "
				},
				inputData: {
					id: "category_name_input",
					className: "form-control",
					name: "category_name",
					defaultValue: undefined,
					value: undefined,
					type: "text",
					onChange: null
				},
				actionType: UPDATE_CATEGORY_NAME
			}
		]
	},
	{
		textareaElements: [
			{
				containerData: {
					className: "form-group col-xs-offset-2 col-xs-8"
				},
				labelData: {
					className: "input_text_label",
					inputName: "tags",
					text: "Tags: "
				},
				textareaData: {
					id: "category_tags_input",
					className: "form-control",
					name: "tags",
					rows: 5,
					placeholder: "Υφάσματα, μαξιλάρια, πετσέτες..",
					defaultValue: undefined,
					value: undefined,
					onChange: null
				},
				actionType: UPDATE_CATEGORY_TAGS
			}
		]
	},
	{
		inputElements: [
			{
				containerData: {
					className: "form-group text-center"
				},
				inputData: {
					id: "submit_button",
					className: "btn btn-success",
					name: "submit_button",
					defaultValue: "Αποθήκευση",
					value: undefined,
					type: "submit",
					onClick: null
				},
				actionType: SAVE_CATEGORY
			}
		]
	}
];

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case INIT_ADD_CATEGORY_FORM:

			updatedState.formShouldUpdate = action.payload.formShouldUpdate;
			updatedState.formId = action.payload.formId;
			updatedState.formMethod = action.payload.formMethod;
			updatedState.formURL = action.payload.formURL;
			updatedState.formRows = defaultCategoryFormRows;

			updatedState.formRows[2].inputElements[0].actionType = SAVE_CATEGORY;

			updatedState.categoryNameValue = null;
			updatedState.categoryDisplayNameValue = null;
			updatedState.categoryTagsValue = null;
			break;

		case INIT_EDIT_CATEGORY_FORM:

			updatedState.formShouldUpdate = action.payload.formShouldUpdate;
			updatedState.formId = action.payload.formId;
			updatedState.formMethod = action.payload.formMethod;
			updatedState.formURL = action.payload.formURL;
			updatedState.formRows = defaultCategoryFormRows;

			updatedState.formRows[2].inputElements[0].actionType = UPDATE_CATEGORY;

			updatedState.categoryNameValue = null;
			updatedState.categoryDisplayNameValue = null;
			updatedState.categoryTagsValue = null;
			break;

		case UPDATE_CATEGORY_DISPLAY_NAME:

			updatedState.formShouldUpdate = false;
			updatedState.categoryDisplayNameValue = action.payload.value;
			break;

		case UPDATE_CATEGORY_NAME:

			updatedState.formShouldUpdate = false;
			updatedState.categoryNameValue = action.payload.value;
			break;

		case UPDATE_CATEGORY_TAGS:

			updatedState.formShouldUpdate = false;
			updatedState.categoryTagsValue = action.payload.value;
			break;

		case SAVE_CATEGORY_SUCCESS:

			updatedState.formShouldUpdate = true;

			updatedState.categoryNameValue = null;
			updatedState.categoryDisplayNameValue = null;
			updatedState.categoryTagsValue = null;
			break;

		case SAVE_CATEGORY_FAILED:

			updatedState.formShouldUpdate = false;
			break;

		case GET_CATEGORIES_SUCCESS:

			console.log("CategoriesReducer GET_CATEGORIES_SUCCESS");
			break;

		case GET_CATEGORIES_FAILED:

			console.log("CategoriesReducer GET_CATEGORIES_FAILED");
			break;

		case DELETE_CATEGORY:

			console.log("CategoriesReducer DELETE_CATEGORY");
			break;

		case DELETE_CATEGORY_SUCCESS:

			console.log("CategoriesReducer DELETE_CATEGORY_SUCCESS");
			break;

		case DELETE_CATEGORY_FAILED:

			console.log("CategoriesReducer DELETE_CATEGORY_FAILED");
			break;

		case UPDATE_CATEGORY_SUCCESS:

			console.log("CategoriesReducer UPDATE_SUCCESS");
			break;
		case UPDATE_CATEGORY_FAILED:

			console.log("CategoriesReducer UPDATE_FAILED");
			break;

		
	}

	return updatedState;
}

