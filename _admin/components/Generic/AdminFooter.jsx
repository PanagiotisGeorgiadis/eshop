import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";

export default class AdminFooter extends React.Component {

	constructor() {

		super();
		this.state = {
			containerData: {
				id: null,
				className: null
			},
			footerData: {
				id: null,
				className: null,
				text: null
			}
		};
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);

	}
	
	render() {

		return (
			<div id = {this.state.containerData.id} className = {this.state.containerData.className}>
				<h3 id = {this.state.footerData.id} className = {this.state.footerData.className}>
					{this.state.footerData.text}
				</h3>
				<hr />
			</div>
		);
	}
}
