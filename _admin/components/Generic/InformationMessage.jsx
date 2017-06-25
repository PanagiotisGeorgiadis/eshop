import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";

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

	componentWillReceiveProps(nextProps) {

		// console.log(nextProps);
		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, nextProps.informationMessageData);
		this.setState(updatedComponentState);
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props.informationMessageData);
		this.setState(updatedComponentState);
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
