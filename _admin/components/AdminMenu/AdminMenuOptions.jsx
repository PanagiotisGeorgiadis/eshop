import React from "react";

import AdminMenuSuboptionsContainer from "./AdminMenuSuboptionsContainer.jsx";

export default class AdminMenuOptions extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {
		
		return (
			<div className = "admin_menu_options">
				{ this.props.menuOptionName }
				<i className = "fa fa-caret-down" aria-hidden="true"></i>
				<AdminMenuSuboptionsContainer suboptions = { this.props.suboptions } />
			</div>
		);
	}
}