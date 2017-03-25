import React from "react";

export default class LogoContainer extends React.Component {

	constructor() {

		super();
		this.state = {

			categories: [],
			subcategories: []
		}
	}

	componentWillMount() {

		this.setState({categories: [
			{
				name: "Λευκά είδη",
				title: "Λευκά είδη",
				subcategory: "Yfasmata"
			},
			{
				name: "Είδη Σκίασης",
				title: "Είδη Σκίασης",
				subcategory: "Kourtines"
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
	}

	render() {
		return (
			<div className="logo_container">
				<a href="/admin"> Καπετανάκη eshop </a>
			</div>
		);
	}
}