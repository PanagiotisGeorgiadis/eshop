import APIManager from "../utils/APIManager";
import { showSuccessMessage, showFailureMessage } from "./InformationMessageActions";
import { updateGenericSubcategoriesState, removeGenericSubcategoryFromState } from "../actions/CrudOperationActions";

export const INIT_ADD_GENERIC_SUBCATEGORY_FORM = "INIT/ADD/GENERIC_SUBCATEGORY/FORM";
export const INIT_EDIT_GENERIC_SUBCATEGORY_FORM = "INIT/EDIT/GENERIC_SUBCATEGORY/FORM";

export const UPDATE_CATEGORY_DISPLAY_NAME = "UPDATE/GENERIC_SUBCATEGORY/CATEGORY/DISPLAY_NAME";

export const UPDATE_GENERIC_SUBCATEGORY_DISPLAY_NAME = "UPDATE/GENERIC_SUBCATEGORY/DISPLAY_NAME";
export const UPDATE_GENERIC_SUBCATEGORY_NAME = "UPDATE/GENERIC_SUBCATEGORY/NAME";
export const UPDATE_GENERIC_SUBCATEGORY_TAGS = "UPDATE/GENERIC_SUBCATEGORY/TAGS";

export const SAVE_GENERIC_SUBCATEGORY = "SAVE/GENERIC_SUBCATEGORY"; // It is used by the component in order to throw the appropriate action.
export const SAVE_GENERIC_SUBCATEGORY_SUCCESS = "SAVE/GENERIC_SUBCATEGORY/SUCCESS";
export const SAVE_GENERIC_SUBCATEGORY_FAILED = "SAVE/GENERIC_SUBCATEGORY/FAILED";

export const UPDATE_GENERIC_SUBCATEGORY = "UPDATE/GENERIC_SUBCATEGORY";
export const UPDATE_GENERIC_SUBCATEGORY_SUCCESS = "UPDATE/GENERIC_SUBCATEGORY/SUCCESS";
export const UPDATE_GENERIC_SUBCATEGORY_FAILED = "UPDATE/GENERIC_SUBCATEGORY/FAILED";

export const DELETE_GENERIC_SUBCATEGORY = "DELETE/GENERIC_SUBCATEGORY";
export const DELETE_GENERIC_SUBCATEGORY_SUCCESS = "DELETE/GENERIC_SUBCATEGORY/SUCCESS";
export const DELETE_GENERIC_SUBCATEGORY_FAILED = "DELETE/GENERIC_SUBCATEGORY/FAILED";

// export const GET_CATEGORY = "GET/GENERIC_SUBCATEGORY";
export const GET_GENERIC_SUBCATEGORY_SUCCESS = "GET/GENERIC_SUBCATEGORY/SUCCESS";
export const GET_GENERIC_SUBCATEGORY_FAILED = "GET/GENERIC_SUBCATEGORY/FAILED";

export const GET_GENERIC_SUBCATEGORIES = "GET/GENERIC_SUBCATEGORIES";
export const GET_GENERIC_SUBCATEGORIES_SUCCESS = "GET/GENERIC_SUBCATEGORIES/SUCCESS";
export const GET_GENERIC_SUBCATEGORIES_FAILED = "GET/GENERIC_SUBCATEGORIES/FAILED";

/*****	Start of Initialization Functions	*****/
export const initAddGenericSubcategoryForm = () => ({

	type: INIT_ADD_GENERIC_SUBCATEGORY_FORM,
	payload: {
		formShouldUpdate: true,
		formId: undefined,
		formMethod: "POST",
		formURL: "/api/genericSubcategory",
		formRows: [],
	}
});

export const initEditGenericSubcategoryForm = () => ({

	type: INIT_EDIT_GENERIC_SUBCATEGORY_FORM,
	payload: {
		formShouldUpdate: true,
		formId: undefined,
		formMethod: "PUT",
		formURL: "/api/genericSubcategory",
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

/*****	Start of GenericSubcategories CRUD operations	*****/
export const saveGenericSubcategory = (url, requestHeader, genericSubcategoryObject) => {

	return (dispatch) => {
		APIManager.postWithPromise(url, requestHeader, genericSubcategoryObject)
			.then((response) => {
				response = JSON.parse(response);
				dispatch(onSaveSuccess(response.message));
				dispatch(showSuccessMessage(response.message));
				dispatch(updateGenericSubcategoriesState(response.result));
			})
			.catch((error) => {
				dispatch(onSaveFailed(error));
				dispatch(showFailureMessage(error));
			});
	};
};

const onSaveSuccess = (message) => ({

	type: SAVE_GENERIC_SUBCATEGORY_SUCCESS,
	payload: {
		message
	}
});

const onSaveFailed = (message) => ({

	type: SAVE_GENERIC_SUBCATEGORY_FAILED,
	payload: {
		message
	}
});

export const deleteGenericSubcategory = (id) => {

	return (dispatch) => {
		APIManager.deleteWithPromise("/api/genericSubcategory/" + id)
			.then((message) => {
				dispatch(onDeleteSuccess(message));
				dispatch(removeGenericSubcategoryFromState(id))
			})
			.catch((error) => {
				dispatch(onDeleteFailed(error))
			});
	};
};

const onDeleteSuccess = (message) => ({

	type: DELETE_GENERIC_SUBCATEGORY_SUCCESS,
	payload: {
		message
	}
});

const onDeleteFailed = (message) => ({

	type: DELETE_GENERIC_SUBCATEGORY_FAILED,
	payload: {
		message
	}
});
/*****	End of GenericSubcategories CRUD operations	*****/
