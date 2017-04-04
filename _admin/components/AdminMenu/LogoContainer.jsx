import React from "react";
import { Link } from "react-router-dom";

export default class LogoContainer extends React.Component {

	constructor() {

		super();
		this.state = {}
	}

	render() {
		return (
			<div className="logo_container">
				<Link className="logo_link" to="/admin">
					Καπετανάκη eshop
				</Link>
			</div>
		);
	}
}

//<a href="/admin"> Καπετανάκη eshop </a>