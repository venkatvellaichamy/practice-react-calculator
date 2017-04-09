import React, { Component } from 'react';

import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeyBoard from './CalculatorKeyBoard';

import './calculator.css';

export default class Calculator extends Component {
	onButtonPress(e) {
		let target = e.target,
			value, command;

		if(target.classList.contains("command")) {
			command = target.innerText;
		} else if(target.classList.contains("number")) {
			value = target.innerText;
		}

		console.log(command, value);
	}

	render() {
		return (
			<div className="calculator">
				<CalculatorDisplay></CalculatorDisplay>
				<CalculatorKeyBoard onButtonPress={this.onButtonPress}></CalculatorKeyBoard>
			</div>
		)
	}
}