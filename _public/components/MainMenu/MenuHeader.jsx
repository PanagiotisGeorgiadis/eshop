import React from "react";

import MenuTriggerButton from "./MenuTriggerButton.jsx";

export default class MenuHeader extends React.Component {

	render() {
		return (
			<div className="menu_header_container">
				<MenuTriggerButton />
			</div>
		);
	}
}