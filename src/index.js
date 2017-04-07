import React from 'react';
import ReactDOM from 'react-dom';

import { Component } from 'react';
import './index.css';


class Button extends Component {
	render() {
		return (
			<div className={`button ${this.props.type}`}>
				{ this.props.label }
			</div>
		);
	}
}

class ButtonRow extends Component {
	render() {
		return (
			<div className="row">
				{
					this.props.buttons.map((button, index) => {
						return (
							<Button key={index} type={button.type} label={button.label}> </Button>
						);
					})
				}
			</div>
		);
	}
}

class CalculatorDisplay extends Component {
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

class CalculatorKeyBoard extends Component {
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
				}>
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
				}>
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
				}>
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
				}>
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
				}>
				</ButtonRow>
			</div>
		);
	}
}

class Calculator extends Component {
	render() {
		return (
			<div className="calculator">
				<CalculatorDisplay></CalculatorDisplay>
				<CalculatorKeyBoard></CalculatorKeyBoard>
			</div>
		)
	}
}


class App extends Component {
	render() {
		return <Calculator></Calculator>;
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);