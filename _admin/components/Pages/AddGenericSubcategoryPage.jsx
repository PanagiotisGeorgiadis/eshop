import React from "react";

import PageTitle from "../Generic/PageTitle.jsx";
import GenericSubcategoryForm from "../Forms/GenericSubcategoryForm.jsx";

export default class AddGenericSubcategoryPage extends React.Component {

	constructor() {
		super();
		this.state = {

			pageTitleData: {
				containerId: null,
				containerClassName: null,
				pageTitleId: null,
				pageTitleClassName: "text-center",
				pageTitleText: "Προσθήκη νέας Γενικής Υποκατηγορίας"
			}
		};
	}

	componentWillMount() {

	}

	render() {

		return(
			<div>
				<PageTitle pageTitleData = {this.state.pageTitleData} />
				<GenericSubcategoryForm />
			</div>
		);
	}
}