import "./App.css";
import KeyPad from "./Components/Keypad";
import CalculatorCommands from "./Components/CalculatorCommands";
import CalculatorDisplay from "./Components/CalculatorDisplay";

function App() {
  const onNumberClick = (event) => {
    console.log(event.target.value);
  };

  const onCommandClick = (event) => {
    console.log(event.target.value);
  };

  return (
    <main className="app">
      <h1 className="title">Suzy's Calculator</h1>
      <div className="calculator">
        <CalculatorDisplay commandSign="+" />
        <hr />
        <KeyPad onNumberClick={onNumberClick} />
        <hr />
        <CalculatorCommands onCommandClick={onCommandClick} />
        <button className="calculator-button calculator-enter-button">
          Calculate!
        </button>
      </div>
    </main>
  );
}

export default App;
