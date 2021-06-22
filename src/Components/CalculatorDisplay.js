import React from 'react'
import styled from 'styled-components'

const DisplayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`
const CommandOperation = styled.div`
  border: 1px solid grey;
  line-height: 22px;
  padding: 0 28px;
`
const CommandEqual = styled.div`
  line-height: 22px;
  padding: 0 28px;
`
const CalculatorInput = styled.input`
  font-size: 22px;
  text-align: center;
  min-width: 0;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`

function CalculatorDisplay(props) {
  return (
    <DisplayWrapper>
      <CalculatorInput
        data-testid="firstValue"
        type="number"
        name="firstValue"
        value={props.firstValue}
        placeholder="0"
        onChange={(event) => props.handleChange(event)}
        onFocus={(event) => props.changeFocus(event)}
      />
      <CommandOperation data-testid="operator">
        {props.commandSign}
      </CommandOperation>
      <CalculatorInput
        data-testid="secondValue"
        type="number"
        name="secondValue"
        value={props.secondValue}
        placeholder="0"
        onChange={(event) => props.handleChange(event)}
        onFocus={(event) => props.changeFocus(event)}
      />
      <CommandEqual>=</CommandEqual>
      <CalculatorInput
        data-testid="resultValue"
        type="number"
        name="resultValue"
        placeholder="0"
        value={props.resultValue}
        readOnly
      />
    </DisplayWrapper>
  )
}

export default CalculatorDisplay
