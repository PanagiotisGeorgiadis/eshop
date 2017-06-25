import APIManager from "../utils/APIManager";
import { showSuccessMessage, showFailureMessage } from "./InformationMessageActions";
import { updateSpecificSubcategoriesState, removeSpecificSubcategoryFromState } from "../actions/CrudOperationActions";

export const INIT_ADD_SPECIFIC_SUBCATEGORY_FORM = "INIT/ADD/SPECIFIC_SUBCATEGORY/FORM";
export const INIT_EDIT_SPECIFIC_SUBCATEGORY_FORM = "INIT/EDIT/SPECIFIC_SUBCATEGORY/FORM";

export const UPDATE_CATEGORY_DISPLAY_NAME = "UPDATE/SPECIFIC_SUBCATEGORY/CATEGORY/DISPLAY_NAME";
export const UPDATE_GENERIC_SUBCATEGORY_DISPLAY_NAME = "UPDATE/SPECIFIC_SUBCATEGORY/GENERIC_SUBCATEGORY/DISPLAY_NAME";

export const UPDATE_SPECIFIC_SUBCATEGORY_DISPLAY_NAME = "UPDATE/SPECIFIC_SUBCATEGORY/DISPLAY_NAME";
export const UPDATE_SPECIFIC_SUBCATEGORY_NAME = "UPDATE/SPECIFIC_SUBCATEGORY/NAME";
export const UPDATE_SPECIFIC_SUBCATEGORY_TAGS = "UPDATE/SPECIFIC_SUBCATEGORY/TAGS";

export const SAVE_SPECIFIC_SUBCATEGORY = "SAVE/SPECIFIC_SUBCATEGORY"; // It is used by the component in order to throw the appropriate action.
export const SAVE_SPECIFIC_SUBCATEGORY_SUCCESS = "SAVE/SPECIFIC_SUBCATEGORY/SUCCESS";
export const SAVE_SPECIFIC_SUBCATEGORY_FAILED = "SAVE/SPECIFIC_SUBCATEGORY/FAILED";

export const UPDATE_SPECIFIC_SUBCATEGORY = "UPDATE/SPECIFIC_SUBCATEGORY";
export const UPDATE_SPECIFIC_SUBCATEGORY_SUCCESS = "UPDATE/SPECIFIC_SUBCATEGORY/SUCCESS";
export const UPDATE_SPECIFIC_SUBCATEGORY_FAILED = "UPDATE/SPECIFIC_SUBCATEGORY/FAILED";

export const DELETE_SPECIFIC_SUBCATEGORY = "DELETE/SPECIFIC_SUBCATEGORY";
export const DELETE_SPECIFIC_SUBCATEGORY_SUCCESS = "DELETE/SPECIFIC_SUBCATEGORY/SUCCESS";
export const DELETE_SPECIFIC_SUBCATEGORY_FAILED = "DELETE/SPECIFIC_SUBCATEGORY/FAILED";

// export const GET_CATEGORY = "GET/SPECIFIC_SUBCATEGORY";
export const GET_SPECIFIC_SUBCATEGORY_SUCCESS = "GET/SPECIFIC_SUBCATEGORY/SUCCESS";
export const GET_SPECIFIC_SUBCATEGORY_FAILED = "GET/SPECIFIC_SUBCATEGORY/FAILED";

export const GET_SPECIFIC_SUBCATEGORIES = "GET/SPECIFIC_SUBCATEGORIES";
export const GET_SPECIFIC_SUBCATEGORIES_SUCCESS = "GET/SPECIFIC_SUBCATEGORIES/SUCCESS";
export const GET_SPECIFIC_SUBCATEGORIES_FAILED = "GET/SPECIFIC_SUBCATEGORIES/FAILED";



/*****	Start of Initialization Functions	*****/
export const initAddSpecificSubcategoryForm = () => ({

	type: INIT_ADD_SPECIFIC_SUBCATEGORY_FORM,
	payload: {
		formShouldUpdate: true,
		formId: undefined,
		formMethod: "POST",
		formURL: "/api/specificSubcategory",
		formRows: [],
	}
});

export const initEditSpecificSubcategoryForm = () => ({

	type: INIT_EDIT_SPECIFIC_SUBCATEGORY_FORM,
	payload: {
		formShouldUpdate: true,
		formId: undefined,
		formMethod: "PUT",
		formURL: "/api/specificSubcategory",
		formRows: [],
	}
});

export const onChangeHandler = (actionType, value) => ({

	type: actionType,
	payload: {
		value
	}
});
/*****	End of Initialization Functions		*****/

/*****	Start of SpecificSubcategories CRUD operations	*****/
export const saveSpecificSubcategory = (url, requestHeader, specificSubcategoryObject) => {

	return (dispatch) => {
		APIManager.postWithPromise(url, requestHeader, specificSubcategoryObject)
			.then((response) => {
				response = JSON.parse(response);
				dispatch(onSaveSuccess(response.message));
				dispatch(showSuccessMessage(response.message));
				dispatch(updateSpecificSubcategoriesState(response.result));
			})
			.catch((error) => {
				dispatch(onSaveFailed(error));
				dispatch(showFailureMessage(error));
			});
	};
};

const onSaveSuccess = (message) => ({

	type: SAVE_SPECIFIC_SUBCATEGORY_SUCCESS,
	payload: {
		message
	}
});

const onSaveFailed = (message) => ({

	type: SAVE_SPECIFIC_SUBCATEGORY_FAILED,
	payload: {
		message
	}
});

export const deleteSpecificSubcategory = (id) => {
	
	return (dispatch) => {
		APIManager.deleteWithPromise("/api/specificSubcategory/" + id)
			.then((message) => {
				dispatch(onDeleteSuccess(message));
				dispatch(removeSpecificSubcategoryFromState(id))
			})
			.catch((error) => {
				dispatch(onDeleteFailed(error))
			});
	};
};

const onDeleteSuccess = (message) => ({

	type: DELETE_SPECIFIC_SUBCATEGORY_SUCCESS,
	payload: {
		message
	}
});

const onDeleteFailed = (message) => ({

	type: DELETE_SPECIFIC_SUBCATEGORY_FAILED,
	payload: {
		message
	}
});
/*****	End of GenericSubcategories CRUD operations	*****/