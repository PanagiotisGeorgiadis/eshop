import { UPDATE_PAGE_TITLE } from "../actions/PageTitleActions";

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case UPDATE_PAGE_TITLE:

			updatedState.containerData = action.payload.containerData;
			updatedState.pageTitleData = action.payload.pageTitleData;
			break;
	}

	return updatedState;
}