import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";

export default class DataTableCell extends React.Component {

	constructor() {
		super();
		this.state = {
			id: null,
			className: null,
			content: null,
			onClick: null
		};
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}

	render() {

		return (

			<td id = { this.state.id } className = { this.state.className } onClick = { this.state.onClick } >
				{ this.state.content }
			</td>
		);
	}
}