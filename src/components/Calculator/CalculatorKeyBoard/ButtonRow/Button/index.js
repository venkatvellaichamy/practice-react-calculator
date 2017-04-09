import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		return (
			<div className={`button ${this.props.type}`} onClick={this.props.onPress}>
				{ this.props.label }
			</div>
		);
	}
}