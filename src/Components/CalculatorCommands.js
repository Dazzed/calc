import React from "react";

const CalculatorCommands = (props) => {
  const commands = ["+", "-"];
  let commandButtons = [];
  for (let command of commands) {
    commandButtons.push(
      <button
        key={command}
        value={command}
        onClick={(event) => props.onCommandClick(event)}
        className="calculator-button"
      >
        {command}
      </button>
    );
  }
  return <div className="calculator-commands">{commandButtons}</div>;
};

export default CalculatorCommands;
