import React from 'react'
import styled from 'styled-components'
import Button from 'Components/Button'

const CalculatorButtonsWrapper = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;
`
const CalculatorButton = styled(Button)`
  background-color: rgb(236, 97, 59);
  &:last-child {
    grid-column: 2 / 3;
  }
`

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function KeyPad({ onNumberClick }) {
  let buttons = React.useMemo(
    () =>
      numbers.map((num) => (
        <CalculatorButton
          key={num}
          onClick={(event) => onNumberClick(event)}
          value={num}
        >
          {num}
        </CalculatorButton>
      )),
    [onNumberClick]
  )

  return <CalculatorButtonsWrapper>{buttons}</CalculatorButtonsWrapper>
}

export default KeyPad
