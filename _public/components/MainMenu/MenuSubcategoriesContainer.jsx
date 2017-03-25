import React from "react";

import MenuGenericSubcategoriesItem from "./MenuGenericSubcategoriesItem.jsx";

export default class MenuSubcategoriesContainer extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {

		let genericSubcategoryItems;
		if(this.props.genericSubcategoryItems) {

			genericSubcategoryItems = this.props.genericSubcategoryItems.map( genericItem => {

				return (
					<MenuGenericSubcategoriesItem key = { genericItem.displayName } displayName = { genericItem.displayName } specificSubcategoryItems = { genericItem.specificSubcategoryItems } />
				);
			});			
		}

		return (

			<div class = "menu_subcategory_container animated fadeOutRight" id = { this.props.containerId } >
				<ul class = "outer_unordered_list">

					{ genericSubcategoryItems }

				</ul>
			</div>
		);
	}
}