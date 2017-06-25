import {
			INIT_ADD_PRODUCT_FORM, INIT_EDIT_PRODUCT_FORM,
			UPDATE_CATEGORY_DISPLAY_NAME, UPDATE_GENERIC_SUBCATEGORY_DISPLAY_NAME, UPDATE_SPECIFIC_SUBCATEGORY_DISPLAY_NAME,
			UPDATE_PRODUCT_DISPLAY_NAME, UPDATE_PRODUCT_NAME, UPDATE_PRODUCT_DESCRIPTION,
			SAVE_PRODUCT, SAVE_PRODUCT_SUCCESS, SAVE_PRODUCT_FAILED,
			UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILED,
			DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILED
		} from "../actions/ProductsActions";

const defaultProductFormRows = [
	{
		selectElements: [
			{
				containerData: {
					className: "form-group col-xs-offset-1 col-xs-3 text-center"
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
					className: "form-group col-xs-offset-1 col-xs-3 text-center"
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
			},
			{
				containerData: {
					className: "form-group col-xs-offset-1 col-xs-3 text-center"
				},
				labelData: {
					inputName: "specific_subcategory_name",
					text: "Ειδική Υποκατηγορία που ανήκει:"
				},
				selectData: {
					className: "form-control",
					name: "specific_subcategory_name",
					defaultValue: undefined,
					value: undefined,
					onChange: null
				},
				options: [],
				actionType: UPDATE_SPECIFIC_SUBCATEGORY_DISPLAY_NAME
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
				actionType: UPDATE_PRODUCT_DISPLAY_NAME
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
				actionType: UPDATE_PRODUCT_NAME
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
				actionType: UPDATE_PRODUCT_DESCRIPTION
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
				actionType: SAVE_PRODUCT
			}
		]
	}
];

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case INIT_ADD_PRODUCT_FORM:

			updatedState.formShouldUpdate = action.payload.formShouldUpdate;
			updatedState.formId = action.payload.formId;
			updatedState.formMethod = action.payload.formMethod;
			updatedState.formURL = action.payload.formURL;
			updatedState.formRows = defaultProductFormRows;

			updatedState.categoryDisplayNameValue = null;
			updatedState.genericSubcategoryDisplayNameValue = null;
			updatedState.specificSubcategoryDisplayNameValue = null;

			updatedState.productDisplayNameValue = null;
			updatedState.productNameValue = null;
			updatedState.productDescriptionValue = null;
			break;

		case INIT_EDIT_PRODUCT_FORM:

			// updatedState.formShouldUpdate = action.payload.formShouldUpdate;
			// updatedState.formId = action.payload.formId;
			// updatedState.formMethod = action.payload.formMethod;
			// updatedState.formURL = action.payload.formURL;
			// updatedState.formRows = defaultCategoryFormRows;

			// updatedState.categoryDisplayNameValue = null;
			// updatedState.genericSubcategoryDisplayNameValue = null;
			// updatedState.specificSubcategoryDisplayNameValue = null;

			// updatedState.productDisplayNameValue = null;
			// updatedState.productNameValue = null;
			// updatedState.productDescriptionValue = null;
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

		case UPDATE_PRODUCT_DISPLAY_NAME:

			updatedState.formShouldUpdate = false;
			updatedState.productDisplayNameValue = action.payload.value;
			break;

		case UPDATE_PRODUCT_NAME:

			updatedState.formShouldUpdate = false;
			updatedState.productNameValue = action.payload.value;
			break;

		case UPDATE_PRODUCT_DESCRIPTION:

			updatedState.formShouldUpdate = false;
			updatedState.productDescriptionValue = action.payload.value;
			break;

		case SAVE_PRODUCT_SUCCESS:

			updatedState.formShouldUpdate = true;

			updatedState.categoryDisplayNameValue = updatedState.formRows[0].selectElements[0].options[0].value;
			updatedState.genericSubcategoryDisplayNameValue = updatedState.formRows[0].selectElements[1].options[0].value;
			updatedState.specificSubcategoryDisplayNameValue = updatedState.formRows[0].selectElements[2].options[0].value;

			updatedState.productDisplayNameValue = null;
			updatedState.productNameValue = null;
			updatedState.productDescriptionValue = null;
			break;

		case SAVE_PRODUCT_FAILED:

			updatedState.formShouldUpdate = false;
			break;

		case UPDATE_PRODUCT_SUCCESS:
			console.log("ProductsReducer UPDATE_PRODUCT_SUCCESS");
			break;

		case UPDATE_PRODUCT_FAILED:
			console.log("ProductsReducer UPDATE_PRODUCT_FAILED");
			break;

		case DELETE_PRODUCT_SUCCESS:
			console.log("ProductsReducer DELETE_PRODUCT_SUCCESS");
			break;

		case DELETE_PRODUCT_FAILED:
			console.log("ProductsReducer DELETE_PRODUCT_FAILED");
			break;
	}

	return updatedState;
}