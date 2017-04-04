import React from "react";

export default class InformationMessage extends React.Component {

	constructor() {

		super();
		this.state = {
			containerData: {
				id: null,
				className: null
			},
			messageData: {
				id: null,
				className: null,
				text: null
			}
		};
	}

	getUpdatedContainerState(propsObject) {

		let updatedContainerState = Object.assign({}, this.state.containerData);

		if(propsObject.containerId)
			updatedContainerState.id = propsObject.containerId;

		if(propsObject.containerClassName)
			updatedContainerState.className = propsObject.containerClassName;

		return updatedContainerState;
	}

	getUpdatedMessageState(propsObject) {

		let updatedMessageState = Object.assign({}, this.state.messageData);

		if(propsObject.informationMessageId)
			updatedMessageState.id = propsObject.informationMessageId;

		if(propsObject.informationMessageClassName)
			updatedMessageState.className = propsObject.informationMessageClassName;

		if(propsObject.informationMessageText)
			updatedMessageState.text = propsObject.informationMessageText;

		return updatedMessageState;
	}

	updateComponentState(propsObject) {
		
		let updatedContainerState = this.getUpdatedContainerState(propsObject);
		let updatedMessageState = this.getUpdatedMessageState(propsObject);

		this.setState({
			containerData: updatedContainerState,
			messageData: updatedMessageState
		});
	}

	componentWillMount() {

		this.updateComponentState(this.props.informationMessageData);
	}
	
	render() {

		return (
			<div id = {this.state.containerData.id} className = {this.state.containerData.className}>
				<div id = {this.state.messageData.id} className = {this.state.messageData.className}>
					{this.state.messageData.text}
				</div>
			</div>
		);
	}
}
