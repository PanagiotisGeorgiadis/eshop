import { INIT_INFORMATION_MESSAGE, UPDATE_INFORMATION_MESSAGE } from "../actions/InformationMessageActions";

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case INIT_INFORMATION_MESSAGE:

			updatedState.informationMessageData = {
				containerData: {
					id: null,
					className: "container text-center"
				},
				messageData: {
					id: "message_container",
					className: "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 hiddenMessage",
					text: null
				}
			}
			break;

		case UPDATE_INFORMATION_MESSAGE:

			updatedState.informationMessageData.messageData.className = action.payload.className;
			updatedState.informationMessageData.messageData.text = action.payload.message;
			break;
	}

	return updatedState;
};