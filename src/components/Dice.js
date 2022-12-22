import React, { Component } from "react";

class Dice extends Component {
  state = {
    number: 0,
  };
  shuffleDices() {
    let number = Math.floor(Math.random() * 6) + 1;
    this.setState({ number });
  }
  componentDidMount() {
    this.shuffleDices();
  }
  render() {
    return (
      <div>
        <div className="dice" onClick={() => this.shuffleDices()}>
          <span>{this.state.number}</span>
        </div>
      </div>
    );
  }
}
export default Dice;
