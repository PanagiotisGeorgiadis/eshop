import React from "react";

export default class AdminFooter extends React.Component {

	constructor() {

		super();
		this.state = {
			container: {
				id: null,
				className: null
			},
			footer: {
				id: null,
				className: null,
				text: null
			}
		};
	}

	updateContainerState(propsObject) {

		let updatedContainerState = Object.assign({}, this.state.container);

		if(propsObject) {
			
			if(propsObject.id) 
				updatedContainerState.id = propsObject.id;

			if(propsObject.className)
				updatedContainerState.className = propsObject.className;
		}
		
		this.setState({
			container: updatedContainerState
		});
	}

	updateFooterState(propsObject) {

		let updatedFooterState = Object.assign({}, this.state.footer);

		if(propsObject) {
		
			if(propsObject.id)
				updatedFooterState.id = propsObject.id;

			if(propsObject.className)
				updatedFooterState.className = propsObject.className;

			if(propsObject.text)
				updatedFooterState.text = propsObject.text;
		}
		this.setState({
			footer: updatedFooterState
		});
	}

	componentWillMount() {

		this.updateContainerState(this.props.containerData);
		this.updateFooterState(this.props.footerData);

	}
	
	render() {

		return (
			<div id = {this.state.container.id} className = {this.state.container.className}>
				<h3 id = {this.state.footer.id} className = {this.state.footer.className}>
					{this.state.footer.text}
				</h3>
				<hr />
			</div>
		);
	}
}
