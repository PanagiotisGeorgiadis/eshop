import React from "react";

export default class MenuItem extends React.Component {

	constructor() {

		super();

		this.showSubCategory = this.showSubCategoryFunction.bind(this);
	}

	showSubCategoryFunction(event) {

		var subcategoryName = event.target.getAttribute("data-subcategory");
		var categoryContainer = document.getElementById("menu_categories_container");
		var subcategoryContainer = document.getElementById(subcategoryName);

		if(categoryContainer.className.includes("fadeInLeft"))
			categoryContainer.className = categoryContainer.className.replace(" fadeInLeft", " fadeOutLeft");

		if(subcategoryContainer.className.includes("fadeOutRight"))
			subcategoryContainer.className = subcategoryContainer.className.replace(" fadeOutRight", " fadeInRight");

		subcategoryContainer.style.zIndex = "2";
		subcategoryContainer.style.visibility = "visible";

		//this.state.activeSubcategory = subcategoryName;
	}

	render() {

		return (

			<div className = "menu_item" title = {this.props.categoryName} data-subcategory = {this.props.subcategory} onClick={this.showSubCategory}> 
				{ this.props.categoryName }
			</div>
		);
	}
}