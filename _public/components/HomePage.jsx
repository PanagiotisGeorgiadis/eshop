import React from "react";
import ReactDOM from "react-dom";

import MainMenu from "./MainMenu/MainMenu.jsx";
import MenuHeader from "./MainMenu/MenuHeader.jsx";

export default class HomePage extends React.Component {

	constructor() {
		super();
		
	}

	componentDidMount() {

		// Here you will make Ajax calls for the menu. Maybe this will be for the MainMenu tbh dont know. 
		// Best Practice is to have the functions that do the api calls on another file.
	}

	render() {
		return (
			
			<div>
				<MenuHeader />
				<MainMenu />

			</div>
		);
	}
}

var app = document.getElementById("App");

ReactDOM.render(<HomePage />, app);