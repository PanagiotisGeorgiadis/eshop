import {
			INIT_ADD_SPECIFIC_SUBCATEGORY_FORM, INIT_EDIT_SPECIFIC_SUBCATEGORY_FORM,
			UPDATE_CATEGORY_DISPLAY_NAME, UPDATE_GENERIC_SUBCATEGORY_DISPLAY_NAME,
			UPDATE_SPECIFIC_SUBCATEGORY_DISPLAY_NAME, UPDATE_SPECIFIC_SUBCATEGORY_NAME, UPDATE_SPECIFIC_SUBCATEGORY_TAGS,
			SAVE_SPECIFIC_SUBCATEGORY, SAVE_SPECIFIC_SUBCATEGORY_SUCCESS, SAVE_SPECIFIC_SUBCATEGORY_FAILED,
			UPDATE_SPECIFIC_SUBCATEGORY, UPDATE_SPECIFIC_SUBCATEGORY_SUCCESS, UPDATE_SPECIFIC_SUBCATEGORY_FAILED,
			DELETE_SPECIFIC_SUBCATEGORY, DELETE_SPECIFIC_SUBCATEGORY_SUCCESS, DELETE_SPECIFIC_SUBCATEGORY_FAILED
		} from "../actions/SpecificSubcategoriesActions";

const defaultSpecificSubcategoryFormRows = [
	{
		selectElements: [
			{
				containerData: {
					className: "form-group col-xs-offset-2 col-xs-3 text-center"
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
			},
			{
				containerData: {
					className: "form-group col-xs-offset-2 col-xs-3 text-center"
				},
				labelData: {
					inputName: "generic_subcategory_name",
					text: "Γενική Υποκατηγορία που ανήκει:"
				},
				selectData: {
					className: "form-control",
					name: "generic_subcategory_name",
					defaultValue: undefined,
					value: undefined,
					onChange: null
				},
				options: [],
				actionType: UPDATE_GENERIC_SUBCATEGORY_DISPLAY_NAME
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
					text: "Όνομα ειδικής υπόκατηγορίας στα Ελληνικά: "
				},
				inputData: {
					className: "form-control",
					name: "generic_subcategory_display_name",
					defaultValue: undefined,
					value: undefined,
					type: "text",
					onChange: null
				},
				actionType: UPDATE_SPECIFIC_SUBCATEGORY_DISPLAY_NAME
			},
			{
				containerData: {
					className: "form-group col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-3"
				},
				labelData: {
					inputName: "generic_subcategory_name",
					text: "Όνομα ειδικής υπόκατηγορίας στα Αγγλικά: "
				},
				inputData: {
					className: "form-control",
					name: "generic_subcategory_name",
					defaultValue: undefined,
					value: undefined,
					type: "text",
					onChange: null
				},
				actionType: UPDATE_SPECIFIC_SUBCATEGORY_NAME
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
				actionType: UPDATE_SPECIFIC_SUBCATEGORY_TAGS
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
				actionType: SAVE_SPECIFIC_SUBCATEGORY
			}
		]
	}
];

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case INIT_ADD_SPECIFIC_SUBCATEGORY_FORM:

			updatedState.formShouldUpdate = action.payload.formShouldUpdate;
			updatedState.formId = action.payload.formId;
			updatedState.formMethod = action.payload.formMethod;
			updatedState.formURL = action.payload.formURL;
			updatedState.formRows = defaultSpecificSubcategoryFormRows;

			updatedState.categoryDisplayNameValue = null;
			updatedState.genericSubcategoryDisplayNameValue = null;

			updatedState.specificSubcategoryNameValue = null;
			updatedState.specificSubcategoryDisplayNameValue = null;
			updatedState.specificSubcategoryTagsValue = null;

			break;

		case INIT_EDIT_SPECIFIC_SUBCATEGORY_FORM:

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

		case UPDATE_SPECIFIC_SUBCATEGORY_DISPLAY_NAME:

			updatedState.formShouldUpdate = false;
			updatedState.specificSubcategoryDisplayNameValue = action.payload.value;
			break;

		case UPDATE_SPECIFIC_SUBCATEGORY_NAME:

			updatedState.formShouldUpdate = false;
			updatedState.specificSubcategoryNameValue = action.payload.value;
			break;

		case UPDATE_SPECIFIC_SUBCATEGORY_TAGS:

			updatedState.formShouldUpdate = false;
			updatedState.specificSubcategoryTagsValue = action.payload.value;
			break;

		case SAVE_SPECIFIC_SUBCATEGORY_SUCCESS:

			updatedState.formShouldUpdate = true;

			updatedState.categoryDisplayNameValue = updatedState.formRows[0].selectElements[0].options[0].value;
			updatedState.genericSubcategoryDisplayNameValue = updatedState.formRows[0].selectElements[1].options[0].value;

			updatedState.specificSubcategoryNameValue = null;
			updatedState.specificSubcategoryDisplayNameValue = null;
			updatedState.specificSubcategoryTagsValue = null;
			break;

		case SAVE_SPECIFIC_SUBCATEGORY_FAILED:

			updatedState.formShouldUpdate = false;
			break;

		case UPDATE_SPECIFIC_SUBCATEGORY_SUCCESS:
			console.log("SpecificSubcategoriesReducer UPDATE_SPECIFIC_SUBCATEGORY_SUCCESS");
			break;

		case UPDATE_SPECIFIC_SUBCATEGORY_FAILED:
			console.log("SpecificSubcategoriesReducer UPDATE_SPECIFIC_SUBCATEGORY_FAILED");
			break;

		case DELETE_SPECIFIC_SUBCATEGORY_SUCCESS:
			console.log("SpecificSubcategoriesReducer DELETE_SPECIFIC_SUBCATEGORY_SUCCESS");
			break;

		case DELETE_SPECIFIC_SUBCATEGORY_FAILED:
			console.log("SpecificSubcategoriesReducer DELETE_SPECIFIC_SUBCATEGORY_FAILED");
			break;
	}

	return updatedState;
}