import APIManager from "../utils/APIManager";
import { showSuccessMessage, showFailureMessage } from "./InformationMessageActions";
import { updateProductsState, removeProductFromState } from "../actions/CrudOperationActions";

export const INIT_ADD_PRODUCT_FORM = "INIT/ADD/PRODUCT/FORM";
export const INIT_EDIT_PRODUCT_FORM = "INIT/EDIT/PRODUCT/FORM";

export const UPDATE_CATEGORY_DISPLAY_NAME = "UPDATE/PRODUCT/CATEGORY/DISPLAY_NAME";
export const UPDATE_GENERIC_SUBCATEGORY_DISPLAY_NAME = "UPDATE/PRODUCT/GENERIC_SUBCATEGORY/DISPLAY_NAME";
export const UPDATE_SPECIFIC_SUBCATEGORY_DISPLAY_NAME = "UPDATE/PRODUCT/SPECIFIC_SUBCATEGORY/DISPLAY_NAME";

export const UPDATE_PRODUCT_DISPLAY_NAME = "UPDATE/PRODUCT/DISPLAY_NAME";
export const UPDATE_PRODUCT_NAME = "UPDATE/PRODUCT/NAME";
export const UPDATE_PRODUCT_DESCRIPTION = "UPDATE/PRODUCT/TAGS";

export const SAVE_PRODUCT = "SAVE/PRODUCT"; // It is used by the component in order to throw the appropriate action.
export const SAVE_PRODUCT_SUCCESS = "SAVE/PRODUCT/SUCCESS";
export const SAVE_PRODUCT_FAILED = "SAVE/PRODUCT/FAILED";

export const UPDATE_PRODUCT = "UPDATE/PRODUCT";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE/PRODUCT/SUCCESS";
export const UPDATE_PRODUCT_FAILED = "UPDATE/PRODUCT/FAILED";

export const DELETE_PRODUCT = "DELETE/PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "DELETE/PRODUCT/SUCCESS";
export const DELETE_PRODUCT_FAILED = "DELETE/PRODUCT/FAILED";

// export const GET_CATEGORY = "GET/PRODUCT";
export const GET_PRODUCT_SUCCESS = "GET/PRODUCT/SUCCESS";
export const GET_PRODUCT_FAILED = "GET/PRODUCT/FAILED";

export const GET_PRODUCTS = "GET/PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET/PRODUCTS/SUCCESS";
export const GET_PRODUCTS_FAILED = "GET/PRODUCTS/FAILED";


/*****	Start of Initialization Functions	*****/
export const initAddProductForm = () => ({

	type: INIT_ADD_PRODUCT_FORM,
	payload: {
		formShouldUpdate: true,
		formId: undefined,
		formMethod: "POST",
		formURL: "/api/product",
		formRows: [],
	}
});

export const initEditProductForm = () => ({

	type: INIT_EDIT_PRODUCT_FORM,
	payload: {
		formShouldUpdate: true,
		formId: undefined,
		formMethod: "PUT",
		formURL: "/api/product",
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

/*****	Start of Products CRUD operations	*****/
export const saveProduct = (url, requestHeader, productObject) => {

	return (dispatch) => {
		APIManager.postWithPromise(url, requestHeader, productObject)
			.then((response) => {
				response = JSON.parse(response);
				dispatch(onSaveSuccess(response.message));
				dispatch(showSuccessMessage(response.message));
				dispatch(updateProductsState(response.result));
			})
			.catch((error) => {
				dispatch(onSaveFailed(error));
				dispatch(showFailureMessage(error));
			});
	};
};

const onSaveSuccess = (message) => ({

	type: SAVE_PRODUCT_SUCCESS,
	payload: {
		message
	}
});

const onSaveFailed = (message) => ({

	type: SAVE_PRODUCT_FAILED,
	payload: {
		message
	}
});

export const deleteProduct = (id) => {
	
	return (dispatch) => {
		APIManager.deleteWithPromise("/api/product/" + id)
			.then((message) => {
				dispatch(onDeleteSuccess(message));
				dispatch(removeProductFromState(id))
			})
			.catch((error) => {
				dispatch(onDeleteFailed(error))
			});
	};
};

const onDeleteSuccess = (message) => ({

	type: DELETE_PRODUCT_SUCCESS,
	payload: {
		message
	}
});

const onDeleteFailed = (message) => ({

	type: DELETE_PRODUCT_FAILED,
	payload: {
		message
	}
});
/*****	End of Products CRUD operations	*****/