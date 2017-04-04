import React from "react";

import PageTitle from "../Generic/PageTitle.jsx";
import SpecificSubcategoryForm from "../Forms/SpecificSubcategoryForm.jsx";

export default class AddSpecificSubcategoryPage extends React.Component {

	constructor() {
		super();
		this.state = {
			pageTitleData: {
				containerId: null,
				containerClassName: "container",
				pageTitleId: null,
				pageTitleClassName: "text-center",
				pageTitleText: "Προσθήκη νέας Ειδικής Υποκατηγορίας"
			}
		}
	}

	render() {

		return(
			<div>
				<PageTitle pageTitleData = {this.state.pageTitleData} />
				<SpecificSubcategoryForm />
			</div>
		);
	}
}