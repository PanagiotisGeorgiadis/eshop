export const INIT_INFORMATION_MESSAGE = "INIT/INFORMATION_MESSAGE";
export const UPDATE_INFORMATION_MESSAGE = "UPDATE/INFORMATION_MESSAGE";

const informationMessageInitialState = {
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

export const getInformationMessageInitialState = () => ({

	type: INIT_INFORMATION_MESSAGE,
	payload: {
		informationMessageData: informationMessageInitialState
	}
});

export const showSuccessMessage = (message) => {
	return {
		type: UPDATE_INFORMATION_MESSAGE,
		payload: {
			className: "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 bg-success",
			message
		}
	};
};

export const showFailureMessage = (message) => {
	return {
		type: UPDATE_INFORMATION_MESSAGE,
		payload: {
			className: "col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 bg-danger",
			message
		}
	};
};

export const hideMessage = (message) => ({

	type: INIT_INFORMATION_MESSAGE,
	payload: {
		informationMessageData: informationMessageInitialState
	}
});