import React from "react";
import styled from "styled-components";

const commands = ["+", "-"];
const CommandsWrapper = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(${commands.length}, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 15px;
`

const CommandButton = styled.button`
  padding: 20px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  cursor: pointer;
  width: 100%;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  &:nth-child(odd) {
    background-color: rgb(116, 181, 102);
  }
  &:nth-child(even) {
    background-color: rgb(140, 35, 18);
  }
  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
` 

const CalculatorCommands = (props) => {
  let commandButtons = [];
  for (let command of commands) {
    commandButtons.push(
      <CommandButton
        key={command}
        value={command}
        onClick={(event) => props.onCommandClick(event)}
      >
        {command}
      </CommandButton>
    );
  }
  return <CommandsWrapper>{commandButtons}</CommandsWrapper>;
};

export default CalculatorCommands;
