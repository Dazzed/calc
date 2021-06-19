import "./App.css";

function App() {
  return (
    <main className="app">
      <h1 className="title">Suzy's Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input
            className="display_number"
            type="number"
            name="first"
            placeHolder="0"
          />
          <div className="display_command">+</div>
          <input
            className="display_number"
            type="number"
            name="second"
            placeHolder="0"
          />
          <div className="display_equal">=</div>
          <input
            className="display_number"
            type="number"
            name="result"
            placeHolder="0"
          />
        </div>
        <hr />
        <div className="calculator-buttons">
          <button className="calculator-button calculator-button_digit">
            0
          </button>
          <button className="calculator-button calculator-button_digit">
            1
          </button>
          <button className="calculator-button calculator-button_digit">
            2
          </button>
          <button className="calculator-button calculator-button_digit">
            3
          </button>
          <button className="calculator-button calculator-button_digit">
            4
          </button>
          <button className="calculator-button calculator-button_digit">
            5
          </button>
          <button className="calculator-button calculator-button_digit">
            6
          </button>
          <button className="calculator-button calculator-button_digit">
            7
          </button>
          <button className="calculator-button calculator-button_digit">
            8
          </button>
          <button className="calculator-button calculator-button_digit calculator-button_last_button">
            9
          </button>
        </div>
        <hr />
        <div className="calculator-commands">
          <button className="calculator-button calculator-command_plus">
            +
          </button>
          <button className="calculator-button calculator-command_minus">
            -
          </button>
        </div>
        <button className="calculator-button calculator-enter-button">
          Calculate!
        </button>
      </div>
    </main>
  );
}

export default App;
