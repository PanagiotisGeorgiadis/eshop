import React from "react";

import MenuCategoriesContainer from "./MenuCategoriesContainer.jsx";
import MenuSubcategoriesContainer from "./MenuSubcategoriesContainer.jsx";

export default class MainMenu extends React.Component {

	constructor() {

		super();
		this.state = {

			categories: [],
			subcategories: [],
			activeSubcategory: ""
		}
	}
	// should we use the activeSubcategory as a state property and why?? 
	showMainMenu() {

		var categoryContainer = document.getElementById("menu_categories_container");
		var subcategoryContainer = document.getElementById(this.state.activeSubcategory + "_subcategory_container");

		if(subcategoryContainer.className.includes("fadeInRight")) {

			subcategoryContainer.className = subcategoryContainer.className.replace(" fadeInRight", " fadeOutRight");
		}

		if(categoryContainer.className.includes("fadeOutLeft")) {

			categoryContainer.className = categoryContainer.className.replace(" fadeOutLeft", " fadeInLeft");
		}

		this.state.activeSubcategory = "";
	}

	componentWillMount() {

		this.setState({categories: [
			{
				name: "Λευκά είδη",
				title: "Λευκά είδη",
				subcategory: "Linen_subcategory_container",
			},
			{
				name: "Είδη Σκίασης",
				title: "Είδη Σκίασης",
				subcategory: "Shadow_equipment_subcategory_container",
			},
			{
				name: "Ταπετσαρίες",
				title: "Ταπετσαρίες",
				subcategory: "Example"
			},
			{
				name: "Δάπεδα",
				title: "Δάπεδα",
				subcategory: "Example"
			},
			{
				name: "Στρώμματα Οικιακής χρήσης",
				title: "Στρώμματα Οικιακής χρήσης",
				subcategory: "Example"
			},
			{
				name: "Ξενοδοχειακός Ιματισμός",
				title: "Ξενοδοχειακός Ιματισμός",
				subcategory: "Example"
			}
		]});

		this.setState({subcategories: [
			{
				name: "Shadow Equipment",
				containerId: "Shadow_equipment_subcategory_container",
				genericSubcategoryItems: []

			},
			{
				name: "Linen",
				containerId: "Linen_subcategory_container",
				genericSubcategoryItems: [
					{
						displayName: "Σεντόνια",
						specificSubcategoryItems: [
							{
								displayName: "Σετ Σεντονιών",
								hrefValue: "#"
							}
						]
					},
					{
						displayName: "Πετσέτες",
						specificSubcategoryItems: [
							{
								displayName: "Πετσέτες Χεριών",
								hrefValue: "#"
							},
							{
								displayName: "Πετσέτες Προσώπου",
								hrefValue: "#"
							},
							{
								displayName: "Πετσέτες Σώματος",
								hrefValue: "#"
							},
							{
								displayName: "Σετ Πετσέτες",
								hrefValue: "#"
							}
						]
					},
					{
						displayName: "Μαξιλάρια",
						specificSubcategoryItems: [
							{
								displayName: "Μαξιλαροθήκες",
								hrefValue: "#"
							},
							{
								displayName: "Μαξιλάρια Ύπνου",
								hrefValue: "#"
							},
							{
								displayName: "Μαξιλάρια Διακοσμητικά",
								hrefValue: "#"
							}
						]
					},
					{
						displayName: "Παπλώματα",
						specificSubcategoryItems: [
							{
								displayName: "Μονά Παπλώματα",
								hrefValue: "#"
							},
							{
								displayName: "Διπλά Παπλώματα",
								hrefValue: "#"
							},
							{
								displayName: "Γούνινα Παπλώματα",
								hrefValue: "#"
							},
							{
								displayName: "Παπλωματοθήκες",
								hrefValue: "#"
							}
						]
					}
				]
			}
		]});
	}

	render() {

		let subcategoryContainers;
		if(this.state.subcategories) {

			subcategoryContainers = this.state.subcategories.map( subcategory => {

				return (
					<MenuSubcategoriesContainer key = { subcategory.name } containerId = { subcategory.containerId } genericSubcategoryItems = { subcategory.genericSubcategoryItems } />
				);
			});
		}

		return (

			<div id = "menu_container">

				<MenuCategoriesContainer menuItems = { this.state.categories } />
				{ subcategoryContainers }
			
			</div>
		);

	}
}

// const app_container = document.getElementById("App");

// ReactDOM.render(<MainMenu/>, app_container);