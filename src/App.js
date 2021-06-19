import "./App.css";
import React, { Component } from "react";
import KeyPad from "./Components/Keypad";
import CalculatorCommands from "./Components/CalculatorCommands";
import CalculatorDisplay from "./Components/CalculatorDisplay";

class App extends Component {
  state = {
    firstValue: "",
    secondValue: "",
    resultValue: "",
    commandSign: "+",
    activeInput: "firstValue",
  };

  onNumberClick = (event) => {
    console.log(this.state.activeInput);
    if (this.state.activeInput == "firstValue") {
      this.setState({ firstValue: this.state.firstValue + event.target.value });
    } else {
      this.setState({
        secondValue: this.state.secondValue + event.target.value,
      });
    }
  };

  onCommandClick = (event) => {
    this.setState({
      commandSign: event.target.value,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  changeFocus = (event) => {
    this.setState({
      activeInput: event.target.name,
    });
  };

  calculate = () => {
    let firstValue = parseInt(this.state.firstValue);
    let secondValue = parseInt(this.state.secondValue);

    switch (this.state.commandSign) {
      case "+":
        this.setState({
          resultValue: firstValue + secondValue,
        });
        break;
      case "-":
        this.setState({
          resultValue: firstValue - secondValue,
        });
        break;
    }
  };

  render() {
    return (
      <main className="app">
        <h1 className="title">Suzy's Calculator</h1>
        <div className="calculator">
          <CalculatorDisplay
            {...this.state}
            handleChange={this.handleChange}
            changeFocus={this.changeFocus}
          />
          <hr />
          <KeyPad onNumberClick={this.onNumberClick} />
          <hr />
          <CalculatorCommands onCommandClick={this.onCommandClick} />
          <button
            className="calculator-button calculator-enter-button"
            onClick={() => this.calculate()}
          >
            Calculate!
          </button>
        </div>
      </main>
    );
  }
}

export default App;
