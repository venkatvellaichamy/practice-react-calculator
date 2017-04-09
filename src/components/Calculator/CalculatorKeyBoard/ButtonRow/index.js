import React, { Component } from 'react';

import Button from './Button';

export default class ButtonRow extends Component {
	render() {
		return (
			<div className="row">
				{
					this.props.buttons.map((button, index) => {
						return (
							<Button key={index} type={button.type} label={button.label} onPress={this.props.onButtonPress}> </Button>
						);
					})
				}
			</div>
		);
	}
}