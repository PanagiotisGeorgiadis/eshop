import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";

export default class ActionButton extends React.Component {

	constructor() {
		super();
		this.state = {
			tableRowId: null,
			buttonData: {
				id: null,
				className: null,
				href: null,
				onClick: null
			},
			iconData: {
				id: null,
				className: null
			}
		}
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}

	render() {

		return(
			<a id = { this.state.buttonData.id } className = { this.state.buttonData.className } href = { this.state.buttonData.href }
				onClick = { () => this.state.buttonData.onClick(this.state.tableRowId) } >
				<i id = { this.state.iconData.id } className = { this.state.iconData.className } aria-hidden = "true" ></i>
			</a>
		);
	}
}