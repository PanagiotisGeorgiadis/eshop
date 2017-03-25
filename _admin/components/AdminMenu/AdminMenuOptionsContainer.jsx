import React from "react";

import AdminMenuOptions from "./AdminMenuOptions.jsx";

export default class AdminMenuOptionsContainer extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {

		let menuOptions;
		if(this.props.menuOptions) {

			menuOptions = this.props.menuOptions.map( menuOption => {

				return (

					<AdminMenuOptions key = { menuOption.name } menuOptionName = { menuOption.name } suboptions = { menuOption.suboptions } />
				);
			});
		}

		return (
			<div className = "admin_menu_options_container">
				{ menuOptions }
			</div>
		);
	}
}