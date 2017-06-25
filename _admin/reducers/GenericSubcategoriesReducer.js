import { 
			INIT_ADD_GENERIC_SUBCATEGORY_FORM, INIT_EDIT_GENERIC_SUBCATEGORY_FORM,
			UPDATE_CATEGORY_DISPLAY_NAME,
			UPDATE_GENERIC_SUBCATEGORY_DISPLAY_NAME, UPDATE_GENERIC_SUBCATEGORY_NAME, UPDATE_GENERIC_SUBCATEGORY_TAGS,
			SAVE_GENERIC_SUBCATEGORY, SAVE_GENERIC_SUBCATEGORY_SUCCESS, SAVE_GENERIC_SUBCATEGORY_FAILED,
			UPDATE_GENERIC_SUBCATEGORY, UPDATE_GENERIC_SUBCATEGORY_SUCCESS, UPDATE_GENERIC_SUBCATEGORY_FAILED,
			DELETE_GENERIC_SUBCATEGORY, DELETE_GENERIC_SUBCATEGORY_SUCCESS, DELETE_GENERIC_SUBCATEGORY_FAILED
		} from "../actions/GenericSubcategoriesActions";

import { GET_CATEGORIES_SUCCESS } from "../actions/CategoriesActions";

const defaultGenericSubcategoryFormRows = [
	{
		selectElements: [
			{
				containerData: {
					className: "form-group col-xs-offset-4 col-xs-4 text-center"
				},
				labelData: {
					inputName: "category_name",
					text: "Κατηγορία που ανήκει:"
				},
				selectData: {
					className: "form-control",
					name: "category_name",
					defaultValue: undefined,
					value: undefined,
					onChange: null
				},
				options: [],
				actionType: UPDATE_CATEGORY_DISPLAY_NAME
			}
		]
	},
	{
		inputElements: [
			{
				containerData: {
					className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
				},
				labelData: {
					inputName: "generic_subcategory_display_name",
					text: "Όνομα γενικής υπόκατηγορίας στα Ελληνικά: "
				},
				inputData: {
					className: "form-control",
					name: "generic_subcategory_display_name",
					defaultValue: undefined,
					value: undefined,
					type: "text",
					onChange: null
				},
				actionType: UPDATE_GENERIC_SUBCATEGORY_DISPLAY_NAME
			},
			{
				containerData: {
					className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
				},
				labelData: {
					inputName: "generic_subcategory_name",
					text: "Όνομα γενικής υπόκατηγορίας στα Αγγλικά: "
				},
				inputData: {
					className: "form-control",
					name: "generic_subcategory_name",
					defaultValue: undefined,
					value: undefined,
					type: "text",
					onChange: null
				},
				actionType: UPDATE_GENERIC_SUBCATEGORY_NAME
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
					inputName: "generic_subcategory_tags",
					text: "Tags: "
				},
				textareaData: {
					className: "form-control",
					name: "generic_subcategory_tags",
					rows: 5,
					placeholder: "Υφάσματα, μαξιλάρια, πετσέτες..",
					defaultValue: undefined,
					value: undefined,
					onChange: null
				},
				actionType: UPDATE_GENERIC_SUBCATEGORY_TAGS
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
				actionType: SAVE_GENERIC_SUBCATEGORY
			}
		]
	}
]

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case INIT_ADD_GENERIC_SUBCATEGORY_FORM:

			updatedState.formShouldUpdate = action.payload.formShouldUpdate;
			updatedState.formId = action.payload.formId;
			updatedState.formMethod = action.payload.formMethod;
			updatedState.formURL = action.payload.formURL;
			updatedState.formRows = defaultGenericSubcategoryFormRows;

			updatedState.genericSubcategoryNameValue = null;
			updatedState.genericSubcategoryDisplayNameValue = null;
			updatedState.genericSubcategoryTagsValue = null;
			updatedState.categoryDisplayNameValue = null;
			break;

		case INIT_EDIT_GENERIC_SUBCATEGORY_FORM:

			// updatedState.formShouldUpdate = action.payload.formShouldUpdate;
			// updatedState.formId = action.payload.formId;
			// updatedState.formMethod = action.payload.formMethod;
			// updatedState.formURL = action.payload.formURL;
			// updatedState.formRows = defaultCategoryFormRows;
			// updatedState.categoryNameValue = "";
			// updatedState.categoryDisplayNameValue = "";
			// updatedState.categoryTagsValue = "";
			break;

		case UPDATE_CATEGORY_DISPLAY_NAME:

			updatedState.formShouldUpdate = false;
			updatedState.categoryDisplayNameValue = action.payload.value;
			break;

		case UPDATE_GENERIC_SUBCATEGORY_DISPLAY_NAME:

			updatedState.formShouldUpdate = false;
			updatedState.genericSubcategoryDisplayNameValue = action.payload.value;
			break;

		case UPDATE_GENERIC_SUBCATEGORY_NAME:

			updatedState.formShouldUpdate = false;
			updatedState.genericSubcategoryNameValue = action.payload.value;
			break;

		case UPDATE_GENERIC_SUBCATEGORY_TAGS:

			updatedState.formShouldUpdate = false;
			updatedState.genericSubcategoryTagsValue = action.payload.value;
			break;

		case SAVE_GENERIC_SUBCATEGORY_SUCCESS:

			updatedState.formShouldUpdate = true;

			updatedState.categoryDisplayNameValue = updatedState.formRows[0].selectElements[0].options[0].value;

			updatedState.genericSubcategoryDisplayNameValue = null;
			updatedState.genericSubcategoryNameValue = null;
			updatedState.genericSubcategoryTagsValue = null;
			break;

		case SAVE_GENERIC_SUBCATEGORY_FAILED:

			updatedState.formShouldUpdate = false;
			break;

		case UPDATE_GENERIC_SUBCATEGORY_SUCCESS:
			console.log("GenericSubcategoriesReducer UPDATE_GENERIC_SUBCATEGORY_SUCCESS");
			break;

		case UPDATE_GENERIC_SUBCATEGORY_FAILED:
			console.log("GenericSubcategoriesReducer UPDATE_GENERIC_SUBCATEGORY_FAILED");
			break;

		case DELETE_GENERIC_SUBCATEGORY_SUCCESS:
			console.log("GenericSubcategoriesReducer DELETE_GENERIC_SUBCATEGORY_SUCCESS");
			break;

		case DELETE_GENERIC_SUBCATEGORY_FAILED:
			console.log("GenericSubcategoriesReducer DELETE_GENERIC_SUBCATEGORY_FAILED");
			break;
	}

	return updatedState;
}