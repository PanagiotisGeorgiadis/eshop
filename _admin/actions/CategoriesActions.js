import APIManager from "../utils/APIManager";
import { showSuccessMessage, showFailureMessage } from "./InformationMessageActions";
import { updateCategoriesState, removeCategoryFromState } from "../actions/CrudOperationActions";

export const INIT_ADD_CATEGORY_FORM = "INIT/ADD/CATEGORY/FORM";
export const INIT_EDIT_CATEGORY_FORM = "INIT/EDIT/CATEGORY/FORM";

export const UPDATE_CATEGORY_NAME = "UPDATE/CATEGORY/NAME";
export const UPDATE_CATEGORY_DISPLAY_NAME = "UPDATE/CATEGORY/DISPLAY_NAME";
export const UPDATE_CATEGORY_TAGS = "UPDATE/CATEGORY/TAGS";

export const SAVE_CATEGORY = "SAVE/CATEGORY"; // It is used by the component in order to throw the appropriate action.
export const SAVE_CATEGORY_SUCCESS = "SAVE/CATEGORY/SUCCESS";
export const SAVE_CATEGORY_FAILED = "SAVE/CATEGORY/FAILED";

export const UPDATE_CATEGORY = "UPDATE/CATEGORY"; // It is used by the component in order to throw the appropriate action.
export const UPDATE_CATEGORY_SUCCESS = "UPDATE/CATEGORY/SUCCESS";
export const UPDATE_CATEGORY_FAILED = "UPDATE/CATEGORY/FAILED";

export const DELETE_CATEGORY = "DELETE/CATEGORY";
export const DELETE_CATEGORY_SUCCESS = "DELETE/CATEGORY/SUCCESS";
export const DELETE_CATEGORY_FAILED = "DELETE/CATEGORY/FAILED";

export const GET_CATEGORIES = "GET/CATEGORIES";
export const GET_CATEGORIES_SUCCESS = "GET/CATEGORIES/SUCCESS";
export const GET_CATEGORIES_FAILED = "GET/CATEGORIES/FAILED";

/*****	Start of Initialization Functions	*****/
export const initAddCategoryForm = () => ({

	type: INIT_ADD_CATEGORY_FORM,
	payload: {
		formShouldUpdate: true,
		formId: undefined,
		formMethod: "POST",
		formURL: "/api/category",
		formRows: [],
	}
});

export const initEditCategoryForm = () => ({

	type: INIT_EDIT_CATEGORY_FORM,
	payload: {
		formShouldUpdate: true,
		formId: undefined,
		formMethod: "PUT",
		formURL: "/api/category",
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

/*****	Start of Categories CRUD operations		*****/
export const saveCategory = (url, requestHeader, categoryObject) => {

	return (dispatch) => {
		APIManager.postWithPromise(url, requestHeader, categoryObject)
			.then((response) => {
				response = JSON.parse(response);
				dispatch(onSaveSuccess(response.message));
				dispatch(showSuccessMessage(response.message));
				dispatch(updateCategoriesState(response.result));
			})
			.catch((error) => {
				dispatch(onSaveFailed(error));
				dispatch(showFailureMessage(error));
			});
	};
};

const onSaveSuccess = (message) => ({

	type: SAVE_CATEGORY_SUCCESS,
	payload: {
		message
	}
});

const onSaveFailed = (message) => ({

	type: SAVE_CATEGORY_FAILED,
	payload: {
		message
	}
});

export const deleteCategory = (id) => {

	return (dispatch) => {
		APIManager.deleteWithPromise("/api/category/" + id)
			.then((message) => {
				dispatch(onDeleteSuccess(message));
				dispatch(removeCategoryFromState(id))
			})
			.catch((error) => {
				dispatch(onDeleteFailed(error))
			});
	};
};

const onDeleteSuccess = (message) => ({

	type: DELETE_CATEGORY_SUCCESS,
	payload: {
		message
	}
});

const onDeleteFailed = (message) => ({

	type: DELETE_CATEGORY_FAILED,
	payload: {
		message
	}
});
/*****	End of Categories CRUD operations		*****/
