import React from "react";

const CalculatorDisplay = (props) => {
  return (
    <div className="display">
      <input
        className="display_number"
        type="number"
        name="first"
        placeholder="0"
      />
      <div className="display_command">{props.commandSign}</div>
      <input
        className="display_number"
        type="number"
        name="second"
        placeholder="0"
      />
      <div className="display_equal">=</div>
      <input
        className="display_number"
        type="number"
        name="result"
        placeholder="0"
      />
    </div>
  );
};

export default CalculatorDisplay;
