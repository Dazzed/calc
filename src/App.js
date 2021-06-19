import "./App.css";
import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Components/Button"
import KeyPad from "./Components/Keypad";
import CalculatorCommands from "./Components/CalculatorCommands";
import CalculatorDisplay from "./Components/CalculatorDisplay";

const CalculatorWrapper = styled.div`
  background-color: rgb(246, 244, 239);
  height: 100vh;
`
const CalculatorTitle = styled.h1`
  padding-top: 100px;
  text-align: center;
  margin-top: 0;
`
const Calculator = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
`
const CalculateButton = styled(Button)`
  background-color: rgb(52, 58, 65);
`
class App extends Component {
  state = {
    firstValue: "",
    secondValue: "",
    resultValue: "",
    commandSign: "+",
    activeInput: "firstValue",
  };

  onNumberClick = (event) => {
    if (this.state.activeInput === "firstValue") {
      this.setState({ firstValue: parseInt(this.state.firstValue + event.target.value) });
    } else {
      this.setState({
        secondValue: parseInt(this.state.secondValue + event.target.value),
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
      [event.target.name]: parseInt(event.target.value),
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
      default:
        this.setState({
          resultValue: firstValue + secondValue,
        });
    }
  };

  render() {
    return (
      <CalculatorWrapper>
        <CalculatorTitle>Suzy's Calculator</CalculatorTitle>
        <Calculator>
          <CalculatorDisplay
            {...this.state}
            handleChange={this.handleChange}
            changeFocus={this.changeFocus}
          />
          <hr />
          <KeyPad onNumberClick={this.onNumberClick} />
          <hr />
          <CalculatorCommands onCommandClick={this.onCommandClick} />
          <CalculateButton
            onClick={() => this.calculate()}
          >
            Calculate!
          </CalculateButton>
        </Calculator>
      </CalculatorWrapper>
    );
  }
}

export default App;
