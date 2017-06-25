import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";

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

	componentWillReceiveProps(nextProps) {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, nextProps);
		this.setState(updatedComponentState);
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}
	
	render() {

		return (
			<div id = {this.state.containerData.id} className = {this.state.containerData.className} >
				<h3 id = {this.state.pageTitleData.id} className = {this.state.pageTitleData.className} >
					{this.state.pageTitleData.text}
				</h3>
				<hr />
			</div>
		);
	}
}
