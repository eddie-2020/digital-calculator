import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="container">
        <div className="calc-display">{next || total || 0}</div>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">AC</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">+/-</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">%</button>
        <button type="button" onClick={this.handleClick} className="orange-like-btn">÷</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">7</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">8</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">9</button>
        <button type="button" onClick={this.handleClick} className="orange-like-btn">x</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">4</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">5</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">6</button>
        <button type="button" onClick={this.handleClick} className="orange-like-btn">-</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">1</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">2</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">3</button>
        <button type="button" onClick={this.handleClick} className="orange-like-btn">+</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn btn-zero">0</button>
        <button type="button" onClick={this.handleClick} className="gray-like-btn">.</button>
        <button type="button" onClick={this.handleClick} className="orange-like-btn">=</button>
      </div>
    );
  }
}

export default Calculator;
