import React, { Component } from 'react';

import ButtonRow from './ButtonRow';
import './keyboard.css';

export default class CalculatorKeyBoard extends Component {
	render() {
		return (
			<div className="keys">
				<ButtonRow buttons={ 
					[{ 
						"label": "CE",
						"type": "command"
					}, { 
						"label": "C",
						"type": "command"
					}, { 
						"label": "<<",
						"type": "command"
					}, { 
						"label": "/",
						"type": "command"
					}] 
				} onButtonPress={this.props.onButtonPress}>
				</ButtonRow>
				<ButtonRow buttons={ 
					[{ 
						"label": "7",
						"type": "number"
					}, { 
						"label": "8",
						"type": "number"
					}, { 
						"label": "9",
						"type": "number"
					}, { 
						"label": "*",
						"type": "command"
					}] 
				} onButtonPress={this.props.onButtonPress}>
				</ButtonRow>
				<ButtonRow buttons={ 
					[{ 
						"label": "4",
						"type": "number"
					}, { 
						"label": "5",
						"type": "number"
					}, { 
						"label": "6",
						"type": "number"
					}, { 
						"label": "-",
						"type": "command"
					}] 
				} onButtonPress={this.props.onButtonPress}>
				</ButtonRow>
				<ButtonRow buttons={ 
					[{ 
						"label": "1",
						"type": "number"
					}, { 
						"label": "2",
						"type": "number"
					}, { 
						"label": "3",
						"type": "number"
					}, { 
						"label": "+",
						"type": "command"
					}] 
				} onButtonPress={this.props.onButtonPress}>
				</ButtonRow>
				<ButtonRow buttons={ 
					[{ 
						"label": "+/-",
						"type": "command"
					}, { 
						"label": "0",
						"type": "number"
					}, { 
						"label": ".",
						"type": "number"
					}, { 
						"label": "=",
						"type": "command"
					}] 
				} onButtonPress={this.props.onButtonPress}>
				</ButtonRow>
			</div>
		);
	}
}