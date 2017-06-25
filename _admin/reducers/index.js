import { combineReducers } from "redux";

import PageTitleReducer from "./PageTitleReducer";
import InformationMessageReducer from "./InformationMessageReducer";

import CategoriesReducer from "./CategoriesReducer";
import GenericSubcategoriesReducer from "./GenericSubcategoriesReducer";
import SpecificSubcategoriesReducer from "./SpecificSubcategoriesReducer";
import ProductsReducer from "./ProductsReducer";

import CrudOperationReducer from "./CrudOperationReducer";

const rootReducer = combineReducers({

	PageTitleReducer,
	InformationMessageReducer,

	CategoriesReducer,
	GenericSubcategoriesReducer,
	SpecificSubcategoriesReducer,
	ProductsReducer,
	
	CrudOperationReducer
});


export default rootReducer;
