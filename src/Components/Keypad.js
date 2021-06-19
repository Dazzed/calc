import React from "react";

const keyPad = (props) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let buttons = [];

  for (let num of numbers) {
    buttons.push(
      <button
        key={num}
        onClick={(event) => props.onNumberClick(event)}
        value={num}
        className="calculator-button calculator-button_digit"
      >
        {num}
      </button>
    );
  }

  return <div className="calculator-buttons">{buttons}</div>;
};

export default keyPad;
