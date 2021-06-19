import React from "react";
import styled from "styled-components";
import Button from "../Components/Button"

const commands = ["+", "-"];
const CommandsWrapper = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(${commands.length}, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 15px;
`

const CommandButton = styled(Button)`
  &:nth-child(odd) {
    background-color: rgb(116, 181, 102);
  }
  &:nth-child(even) {
    background-color: rgb(140, 35, 18);
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
