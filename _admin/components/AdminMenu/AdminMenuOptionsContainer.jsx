import React from "react";

import AdminMenuOptions from "./AdminMenuOptions.jsx";

export default class AdminMenuOptionsContainer extends React.Component {

	constructor() {

		super();

		this.clickHandler = this.handleClick.bind(this);
	}

	componentWillMount() {

	}

	handleClick(event) {

		console.log(event.target);
	}

	render() {

		let menuOptions;
		if(this.props.menuOptions) {

			menuOptions = this.props.menuOptions.map( menuOption => {

				return (

					<AdminMenuOptions key = { menuOption.name } menuOptionName = { menuOption.name } suboptions = { menuOption.suboptions } clickHandler = { this.props.clickHandler } />
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