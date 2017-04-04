import React from "react";

export default class Label extends React.Component {
	
	constructor() {
		super();
		this.state = {
			id: null,
			className: null,
			inputName: null,
			text: null 
		};
	}

	getUpdatedLabelState(labelData) {

		let updatedLabelState = Object.assign({}, this.state);
		
		if(labelData.id)
			updatedLabelState.id = labelData.id;
		
		if(labelData.className)
			updatedLabelState.className = labelData.className;
		
		if(labelData.inputName)
			updatedLabelState.inputName = labelData.inputName;

		if(labelData.text)
			updatedLabelState.text = labelData.text;

		return updatedLabelState;
	}

	componentWillMount() {
		
		let updatedLabelState = Object.assign({}, this.state);

		if(this.props.labelData)
			updatedLabelState = this.getUpdatedLabelState(this.props.labelData);

		this.setState({
			id: updatedLabelState.id,
			className: updatedLabelState.className,
			inputName: updatedLabelState.inputName,
			text: updatedLabelState.text
		});
	}

	render() {

		return(
			<label id = { this.state.id } className = { this.state.className } for = { this.state.inputName }>
				{ this.state.text }
			</label>
		);
	}
}