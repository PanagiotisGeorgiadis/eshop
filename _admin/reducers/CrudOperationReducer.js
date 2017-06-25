import { 
			GET_CATEGORIES, GET_CATEGORIES_SUCCESS,
			GET_GENERIC_SUBCATEGORIES, GET_GENERIC_SUBCATEGORIES_SUCCESS,
			GET_SPECIFIC_SUBCATEGORIES, GET_SPECIFIC_SUBCATEGORIES_SUCCESS,
			GET_PRODUCTS, GET_PRODUCTS_SUCCESS,
			ADD_CATEGORY_TO_STATE, ADD_GENERIC_SUBCATEGORY_TO_STATE, ADD_SPECIFIC_SUBCATEGORY_TO_STATE, ADD_PRODUCT_TO_STATE,
			REMOVE_CATEGORY_FROM_STATE, REMOVE_GENERIC_SUBCATEGORY_FROM_STATE, REMOVE_SPECIFIC_SUBCATEGORY_FROM_STATE, REMOVE_PRODUCT_FROM_STATE
			} from "../actions/CrudOperationActions";

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case GET_CATEGORIES_SUCCESS:

			updatedState.categories = JSON.parse(action.payload.response).message
			break;

		case GET_GENERIC_SUBCATEGORIES_SUCCESS:

			updatedState.genericSubcategories = JSON.parse(action.payload.response).message
			break;

		case GET_SPECIFIC_SUBCATEGORIES_SUCCESS:

			updatedState.specificSubcategories = JSON.parse(action.payload.response).message
			break;

		case GET_PRODUCTS_SUCCESS:

			updatedState.products = JSON.parse(action.payload.response).message
			break;

		case ADD_CATEGORY_TO_STATE:
			// Adds the newly added category to state in order to work "Offline".
			updatedState.categories.push(action.payload.category);
			break;

		case ADD_GENERIC_SUBCATEGORY_TO_STATE:
			// Adds the newly added generic subcategory to state in order to work "Offline".
			updatedState.genericSubcategories.push(action.payload.genericSubcategory);
			break;

		case ADD_SPECIFIC_SUBCATEGORY_TO_STATE:
			// Adds the newly added specific subcategory to state in order to work "Offline".
			updatedState.specificSubcategories.push(action.payload.specificSubcategory);
			break;

		case ADD_PRODUCT_TO_STATE:
			// Adds the newly added product to state in order to work "Offline".
			updatedState.products.push(action.payload.product);
			break;

		case REMOVE_CATEGORY_FROM_STATE:
			// Removes the newly deleted category to state in order to work "Offline".
			for(var i = 0; i < updatedState.categories.length; i++) {

				if(updatedState.categories[i]._id === action.payload.categoryId) {
					updatedState.categories.splice(i, 1);
					break;
				}
			}
			break;

		case REMOVE_GENERIC_SUBCATEGORY_FROM_STATE:
			// Removes the newly deleted generic subcategory to state in order to work "Offline".
			for(var i = 0; i < updatedState.genericSubcategories.length; i++) {

				if(updatedState.genericSubcategories[i]._id === action.payload.genericSubcategoryId) {
					updatedState.genericSubcategories.splice(i, 1);
					break;
				}
			}
			break;

		case REMOVE_SPECIFIC_SUBCATEGORY_FROM_STATE:
			// Removes the newly deleted specific subcategory to state in order to work "Offline".
			for(var i = 0; i < updatedState.specificSubcategories.length; i++) {

				if(updatedState.specificSubcategories[i]._id === action.payload.specificSubcategoryId) {
					updatedState.specificSubcategories.splice(i, 1);
					break;
				}
			}
			break;

		case REMOVE_PRODUCT_FROM_STATE:
			// Removes the newly deleted product to state in order to work "Offline".
			for(var i = 0; i < updatedState.products.length; i++) {

				if(updatedState.products[i]._id === action.payload.productId) {
					updatedState.products.splice(i, 1);
					break;
				}
			}
			break;
	}

	return updatedState;
}