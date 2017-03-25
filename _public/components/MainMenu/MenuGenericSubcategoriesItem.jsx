import React from "react";

import MenuSpecificSubcategoriesItem from "./MenuSpecificSubcategoriesItem.jsx";

export default class MenuGenericSubcategoriesItem extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {

		let specificSubcategoryItems;
		if(this.props.specificSubcategoryItems) {

			specificSubcategoryItems = this.props.specificSubcategoryItems.map( specificItem => {

				return (

					<MenuSpecificSubcategoriesItem key = { specificItem.displayName } hrefValue = { specificItem.hrefValue } displayName = { specificItem.displayName } />
				);
			});			
		}

		return (

			<li class="outer_list_element">

				<span class="list_title">
					<strong> { this.props.displayName } </strong>
				</span>

				<hr />

				<ul class="inner_unordered_list">

					{ specificSubcategoryItems }

				</ul>
			</li>
		);
	}
}