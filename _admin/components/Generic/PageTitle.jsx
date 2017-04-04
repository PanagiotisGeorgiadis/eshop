import React from "react";

export default class PageTitle extends React.Component {

	constructor() {

		super();
		this.state = {
			containerData: {
				id: null,
				className: null,
			},
			pageTitleData: {
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

	getUpdatedPageTitleState(propsObject) {

		let updatedPageTitleState = Object.assign({}, this.state.pageTitleData);

		if(propsObject.pageTitleId)
			updatedPageTitleState.id = propsObject.pageTitleId;

		if(propsObject.pageTitleClassName)
			updatedPageTitleState.className = propsObject.pageTitleClassName;

		if(propsObject.pageTitleText)
			updatedPageTitleState.text = propsObject.pageTitleText;

		return updatedPageTitleState;
	}

	updateComponentState(propsObject) {

		let updatedContainerState = this.getUpdatedContainerState(propsObject);
		let updatedPageTitleState = this.getUpdatedPageTitleState(propsObject);

		this.setState({
			pageTitleData: updatedPageTitleState
		});
	}

	componentWillMount() {

		this.updateComponentState(this.props.pageTitleData);
	}
	
	render() {

		return (
			<div id = {this.state.containerData.id} className = {this.state.containerData.className}>
				<h3 id = {this.state.pageTitleData.id} className = {this.state.pageTitleData.className}>
					{this.state.pageTitleData.text}
				</h3>
				<hr />
			</div>
		);
	}
}
