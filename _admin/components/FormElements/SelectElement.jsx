import React from "react";

import ComponentHelper from "../../utils/ComponentHelperClass";
import Label from "./Label.jsx";
import SelectOptionElement from "./SelectOptionElement.jsx";

export default class SelectElement extends React.Component {

	constructor() {

		super();
		this.state = {
			containerData: {
				id: null,
				className: null
			},
			labelData: {
				id: null,
				className: null,
				inputName: null,
				text: null
			},
			selectData: {
				id: null,
				className: null,
				name: null,
				onChange: null
			},
			options: []
		};
	}

	componentWillMount() {

		let updatedComponentState = Object.assign({}, this.state);

		ComponentHelper.updateComponentStateFromProps(updatedComponentState, this.props.elementData);
		this.setState(updatedComponentState);
	}

	render() {

		let selectOptions;
		if(this.state.options.length) {

			selectOptions = this.state.options.map( (option, iterator) => {

				return (
					<SelectOptionElement key = {iterator} optionData = {option} />
				);
			});
		}

		return (
			<div id = { this.state.containerData.id } className = { this.state.containerData.className } >
				<Label key = { Date.now() } labelData = { this.state.labelData } />
				<select id = { this.state.selectData.id } className = { this.state.selectData.className } name = { this.state.selectData.name } onChange = { this.state.selectData.onChange }>
					{ selectOptions }
				</select>
			</div>
		);
	}
}