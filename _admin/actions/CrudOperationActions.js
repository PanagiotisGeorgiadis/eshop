import APIManager from "../utils/APIManager";
import { showSuccessMessage, showFailureMessage } from "./InformationMessageActions";

export const UPDATE_CATEGORY = "UPDATE/CATEGORY";
export const DELETE_CATEGORY = "DELETE/CATEGORY";
// export const SAVE_CATEGORY = "SAVE/CATEGORY";

export const GET_GENERIC_SUBCATEGORY = "GET/GENERIC_SUBCATEGORY";
export const UPDATE_GENERIC_SUBCATEGORY = "UPDATE/GENERIC_SUBCATEGORY";
export const DELETE_GENERIC_SUBCATEGORY = "DELETE/GENERIC_SUBCATEGORY";
// export const SAVE_GENERIC_SUBCATEGORY = "SAVE/GENERIC_SUBCATEGORY";

export const GET_SPECIFIC_SUBCATEGORY = "GET/SPECIFIC_SUBCATEGORY";
export const UPDATE_SPECIFIC_SUBCATEGORY = "UPDATE/SPECIFIC_SUBCATEGORY";
export const DELETE_SPECIFIC_SUBCATEGORY = "DELETE/SPECIFIC_SUBCATEGORY";
// export const SAVE_SPECIFIC_SUBCATEGORY = "SAVE/SPECIFIC_SUBCATEGORY";

export const GET_PRODUCT = "GET/PRODUCT";
export const UPDATE_PRODUCT = "UPDATE/PRODUCT";
export const DELETE_PRODUCT = "DELETE/PRODUCT";
// export const SAVE_PRODUCT = "SAVE/PRODUCT";

export const GET_CATEGORIES = "GET/CATEGORIES";
export const GET_GENERIC_SUBCATEGORIES = "GET/GENERIC_SUBCATEGORIES";
export const GET_SPECIFIC_SUBCATEGORIES = "GET/SPECIFIC_SUBCATEGORIES";
export const GET_PRODUCTS = "GET/PRODUCTS";

export const GET_CATEGORIES_SUCCESS = "GET/CATEGORIES/SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET/CATEGORIES/FAILURE";

export const GET_GENERIC_SUBCATEGORIES_SUCCESS = "GET/GENERIC_SUBCATEGORIES/SUCCESS";
export const GET_GENERIC_SUBCATEGORIES_FAILURE = "GET/GENERIC_SUBCATEGORIES/FAILURE";

export const GET_SPECIFIC_SUBCATEGORIES_SUCCESS = "GET/SPECIFIC_SUBCATEGORIES/SUCCESS";
export const GET_SPECIFIC_SUBCATEGORIES_FAILURE = "GET/SPECIFIC_SUBCATEGORIES/FAILURE";

export const GET_PRODUCTS_SUCCESS = "GET/PRODUCTS/SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET/PRODUCTS/FAILURE";

export const ADD_CATEGORY_TO_STATE = "UPDATE/CATEGORIES/STATE";
export const ADD_GENERIC_SUBCATEGORY_TO_STATE = "UPDATE/GENERIC_SUBCATEGORIES/STATE";
export const ADD_SPECIFIC_SUBCATEGORY_TO_STATE = "UPDATE/SPECIFIC_SUBCATEGORIES/STATE";
export const ADD_PRODUCT_TO_STATE = "UPDATE/PRODUCTS/STATE";

export const REMOVE_CATEGORY_FROM_STATE = "REMOVE/CATEGORY/STATE";
export const REMOVE_GENERIC_SUBCATEGORY_FROM_STATE = "REMOVE/GENERIC_SUBCATEGORIES/STATE";
export const REMOVE_SPECIFIC_SUBCATEGORY_FROM_STATE = "REMOVE/SPECIFIC_SUBCATEGORIES/STATE";
export const REMOVE_PRODUCT_FROM_STATE = "REMOVE/PRODUCTS/STATE";


export const getCategories = (url = "/api/category", params) => {

	return (dispatch) => {
		APIManager.getWithPromise(url, params)
			.then((response) => dispatch(fetchOperationSuccess(response, GET_CATEGORIES_SUCCESS)))
			.catch((response) => dispatch(fetchOperationFailed(response, GET_CATEGORIES_FAILURE)));
	};
};
export const getGenericSubcategories = (url = "/api/genericSubcategory", params) => {
	
	return (dispatch) => {
		APIManager.getWithPromise(url, params)
			.then((response) => dispatch(fetchOperationSuccess(response, GET_GENERIC_SUBCATEGORIES_SUCCESS)))
			.catch((response) => dispatch(fetchOperationFailed(response, GET_GENERIC_SUBCATEGORIES_FAILURE)));
	};	
};
export const getSpecificSubcategories = (url = "/api/specificSubcategory", params) => {
	
	return (dispatch) => {
		APIManager.getWithPromise(url, params)
			.then((response) => dispatch(fetchOperationSuccess(response, GET_SPECIFIC_SUBCATEGORIES_SUCCESS)))
			.catch((response) => dispatch(fetchOperationFailed(response, GET_SPECIFIC_SUBCATEGORIES_FAILURE)));
	};
};
export const getProducts = (url = "/api/product", params) => {
	
	return (dispatch) => {
		APIManager.getWithPromise(url, params)
			.then((response) => dispatch(fetchOperationSuccess(response, GET_PRODUCTS_SUCCESS)))
			.catch((response) => dispatch(fetchOperationFailed(response, GET_PRODUCTS_FAILURE)));
	};
};

export const updateCategoriesState = (category) => ({

	type: ADD_CATEGORY_TO_STATE,
	payload: {
		category: { 
			_id: category._id,
			name: category.name,
			display_name: category.display_name,
			last_modified: category.last_modified,
			tags: category.tags
		}
	}
});
export const updateGenericSubcategoriesState = (genericSubcategory) => ({

	type: ADD_GENERIC_SUBCATEGORY_TO_STATE,
	payload: {
		genericSubcategory: {
			_id: genericSubcategory._id,
			category: genericSubcategory.category,
			name: genericSubcategory.name,
			display_name: genericSubcategory.display_name,
			last_modified: genericSubcategory.last_modified,
			tags: genericSubcategory.tags
		}
	}
});
export const updateSpecificSubcategoriesState = (specificSubcategory) => ({

	type: ADD_SPECIFIC_SUBCATEGORY_TO_STATE,
	payload: {
		specificSubcategory: {
			_id: specificSubcategory._id,
			name: specificSubcategory.name,
			display_name: specificSubcategory.display_name,
			generic_subcategory: specificSubcategory.generic_subcategory,
			category: specificSubcategory.category,
			last_modified: specificSubcategory.last_modified,
			tags: specificSubcategory.tags
		}
	}
});
export const updateProductsState = (product) => ({

	type: ADD_PRODUCT_TO_STATE,
	payload: {
		product: {
			_id: product._id,
			description: product.tags,
			name: product.name,
			display_name: product.display_name,
			specific_subcategory: product.specific_subcategory,
			generic_subcategory: product.generic_subcategory,
			category: product.category,
			last_modified: product.last_modified,
			
		}
	}
});

export const removeCategoryFromState = (categoryId) => ({

	type: REMOVE_CATEGORY_FROM_STATE,
	payload: {
		categoryId
	}
});
export const removeGenericSubcategoryFromState = (genericSubcategoryId) => ({

	type: REMOVE_GENERIC_SUBCATEGORY_FROM_STATE,
	payload: {
		genericSubcategoryId
	}
});
export const removeSpecificSubcategoryFromState = (specificSubcategoryId) => ({

	type: REMOVE_SPECIFIC_SUBCATEGORY_FROM_STATE,
	payload: {
		specificSubcategoryId
	}
});
export const removeProductFromState = (productId) => ({

	type: REMOVE_PRODUCT_FROM_STATE,
	payload: {
		productId
	}
});

export const fetchOperationSuccess = (response, actionType) => ({

	type: actionType,
	payload: {
		response
	}
});
export const fetchOperationFailed = (response, actionType) => ({

	type: actionType,
	payload: {
		response
	}
});