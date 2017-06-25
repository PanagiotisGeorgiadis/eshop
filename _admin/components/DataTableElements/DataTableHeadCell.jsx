import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";

export default class DataTableHeadCell extends React.Component {

	constructor() {
		super();
		this.state = {
			content: null
		};
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props);
		this.setState(updatedComponentState);
	}

	render() {

		return(
			<th> { this.state.content } </th>
		);
	}
}