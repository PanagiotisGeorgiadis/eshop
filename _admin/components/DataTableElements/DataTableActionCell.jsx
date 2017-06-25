import React from "react";

import ActionButton from "./ActionButton.jsx";
import ComponentHelper from "../../utils/ComponentHelperClass";

export default class DataTableActionCell extends React.Component {

	constructor() {
		super();
		this.state = {
			tableRowId: null,
			actionButtons: [],
		};
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}

	render() {

		let actionButtons;
		if(this.state.actionButtons.length) {

			actionButtons = this.state.actionButtons.map( (actionButton, iterator) => {

				return(
					<ActionButton key = { iterator } buttonData = { actionButton.buttonData } iconData = { actionButton.iconData } tableRowId = { this.state.tableRowId } />
				);
			});
		}

		return(
			<td>
				{ actionButtons }
			</td>
		);
	}
}