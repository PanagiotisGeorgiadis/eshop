export const defaultFormState = {

	formShouldUpdate: false,
	formId: undefined,
	formMethod: undefined,
	formURL: undefined,
	formRows: [],
	pageTitle: {},
	informationMessageData: {},
	resetInputElements: true
};

export const defaultTableState = {

	tableShouldUpdate: false,
	tableHeaders: [],
	tableRows: [],
	tableActionCells: []
};

/*export const defaultCategoryFormState = {

	formShouldUpdate: false,
	formId: undefined,
	formMethod: undefined,
	formURL: undefined,
	formRows: [],
	pageTitle: {},
	informationMessageData: {
		containerData: {
			id: null,
			className: "container text-center"
		},
		messageData: {
			id: "message_container",
			className: "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 hiddenMessage",
			text: null
		}
	},
	resetInputElements: true
}*/

const initialState = {

	CategoriesReducer: {
		...defaultFormState,
		...defaultTableState
	},
	GenericSubcategoriesReducer: {
		...defaultFormState,
		...defaultTableState
	},
	SpecificSubcategoriesReducer: {
		...defaultFormState,
		...defaultTableState
	},
	ProductsReducer: {
		...defaultFormState,
		...defaultTableState
	}
};

export default initialState;