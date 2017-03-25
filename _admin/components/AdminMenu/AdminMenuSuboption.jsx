import React from "react";

export default class AdminMenuSuboption extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {

		return (
			
			<a className = "menu_suboption" href = { this.props.hrefValue }>
				{ this.props.suboptionName }
			</a>
		);
	}
}