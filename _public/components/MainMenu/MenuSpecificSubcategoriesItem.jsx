import React from "react";

export default class MenuSpecificSubcategoriesItem extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {

		return (

			<li class="inner_list_item"> 
				<a href = { this.props.hrefValue }> { this.props.displayName } </a>
			</li>
		);
	}
}