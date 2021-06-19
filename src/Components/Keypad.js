import React from "react";
import styled from "styled-components"

const CalculatorButtonsWrapper = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;
`
const CalculatorButton = styled.button`
  padding: 20px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  cursor: pointer;
  width: 100%;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  background-color: rgb(236, 97, 59);
  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
  &:last-child {
    grid-column: 2 / 3;    
  }
`

const KeyPad = (props) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let buttons = [];

  for (let num of numbers) {
    buttons.push(
      <CalculatorButton
        key={num}
        onClick={(event) => props.onNumberClick(event)}
        value={num}
      >
        {num}
      </CalculatorButton>
    );
  }

  return <CalculatorButtonsWrapper>{buttons}</CalculatorButtonsWrapper>;
};

export default KeyPad;
