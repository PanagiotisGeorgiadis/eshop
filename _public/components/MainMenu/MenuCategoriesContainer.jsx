import React from "react";

import MenuItem from "./MenuItem.jsx";

export default class MenuCategoriesContainer extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {

		let menuItems;
		if(this.props.menuItems) {

			menuItems = this.props.menuItems.map( menuItem => {

				return (

					<MenuItem key = { menuItem.title } categoryName = { menuItem.name } subcategory = { menuItem.subcategory } />
				);
			});
		}

		return (

			<div id = "menu_categories_container" className = "animated fadeInLeft">
				{ menuItems }
			</div>

		);
	}
}