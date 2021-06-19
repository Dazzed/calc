import React from "react";

const CalculatorDisplay = (props) => {
  return (
    <div className="display">
      <input
        className="display_number"
        type="number"
        name="firstValue"
        value={props.firstValue}
        placeholder="0"
        onChange={(event) => props.handleChange(event)}
        onFocus={(event) => props.changeFocus(event)}
      />
      <div className="display_command">{props.commandSign}</div>
      <input
        className="display_number"
        type="number"
        name="secondValue"
        value={props.secondValue}
        placeholder="0"
        onChange={(event) => props.handleChange(event)}
        onFocus={(event) => props.changeFocus(event)}
      />
      <div className="display_equal">=</div>
      <input
        className="display_number"
        type="number"
        name="resultValue"
        placeholder="0"
        value={props.resultValue}
        readOnly
      />
    </div>
  );
};

export default CalculatorDisplay;
