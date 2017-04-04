import React from "react";

import AdminMenuSuboption from "./AdminMenuSuboption.jsx";

export default class AdminMenuSuboptionsContainer extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {

		let suboptionElement;
		if(this.props.suboptions) {

			suboptionElement = this.props.suboptions.map( suboption => {

				return (

					<AdminMenuSuboption key = { suboption.name } suboptionName = { suboption.name } hrefValue = { suboption.hrefValue } clickHandler = { suboption.clickHandler }/>
				);
			});
		}
		
		return (
			<div className = "menu_suboptions_container">
				{ suboptionElement }
			</div>
		);
	}
}