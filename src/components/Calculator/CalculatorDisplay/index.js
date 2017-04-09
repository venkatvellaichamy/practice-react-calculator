import React, { Component } from 'react';

import './display.css';

export default class CalculatorDisplay extends Component {
	render() {
		return (
			<div className="display">
				<div className="sub">
					<span>10</span>
					<span>+</span>
					<span>30</span>
				</div>
				<div className="main">123456789</div>
			</div>
		)
	}
}