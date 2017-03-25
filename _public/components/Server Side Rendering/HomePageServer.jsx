var React = require("react");

var MainMenu = require("./MainMenuServer.jsx");
// var MenuHeader = require("./MenuHeader.jsx");

module.exports = class HomePage extends React.Component {

	constructor() {
		super();
		
	}

	componentDidMount() {

		// Here you will make Ajax calls for the menu. Maybe this will be for the MainMenu tbh dont know. 
		// Best Practice is to have the functions that do the api calls on another file.
		// <MenuHeader />
		// <MainMenu />
	}

	render() {
		return (
			
			<div style = {{backgroundColor: "lightgreen", height: "100vh", width: "100%"}}>
				<MainMenu />
				
			</div>
		);
	}
}