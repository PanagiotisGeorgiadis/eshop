import React from "react";
import { Link } from "react-router-dom";


export default class AdminMenuSuboption extends React.Component {

	constructor() {

		super();
	}

	componentWillMount() {

	}

	render() {

		return (
			<Link className = "menu_suboption" to = { this.props.hrefValue }>
				{ this.props.suboptionName }
			</Link>
		);
	}
}

/*
	<a className = "menu_suboption" href = { this.props.hrefValue } onClick = { this.props.clickHandler } >
		{ this.props.suboptionName }
	</a>

*/