import React from "react";

export default class MenuTriggerButton extends React.Component {

	constructor() {

		super();
		this.toggleMenuTrigger = this.toggleMenuTriggerButton.bind(this);
	}

	toggleMenuTriggerButton(event) {

		var menuContainer = document.getElementById("menu_container");

		if(menuContainer) {

			var trigger_button = document.getElementById("menu_trigger_button");

			if(trigger_button.className.includes(" open")) {

				trigger_button.className = trigger_button.className.replace(" open", "");
				menuContainer.style.display = "none";

			} else {

				trigger_button.className += " open";
				menuContainer.style.display = "flex";
			}

			var categoryContainer = document.getElementById("menu_categories_container");
			var subcategoryContainers = document.getElementsByClassName("menu_subcategory_container");

			setTimeout(function() {

				categoryContainer.className = categoryContainer.className.replace(" fadeOutLeft", " fadeInLeft");
				for(var i = 0; i < subcategoryContainers.length; i++) {

					subcategoryContainers[i].className = subcategoryContainers[i].className.replace(" fadeInRight", " fadeOutRight");
					subcategoryContainers[i].style.zIndex = "2";
					subcategoryContainers[i].style.visibility = "hidden";

				}
			}, 50);
		}
	}

	render() {
		return (
			<div className="menu_trigger_container">
				<div id="menu_trigger_button" className="menu_trigger_button" onClick={this.toggleMenuTrigger}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		);
	}
}