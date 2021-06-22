import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders app', () => {
  render(<App />)
  const headingElement = screen.getByText(/Suzy's Calculator/i)
  expect(headingElement).toBeInTheDocument()
})

test('should change input value', () => {
  render(<App />)
  fireEvent.click(screen.getByTestId('button-1'))
  expect(screen.getByDisplayValue('1')).toBeTruthy()
})

test('should change operator', () => {
  render(<App />)
  fireEvent.click(screen.getByTestId('button--'))
  expect(screen.getByTestId('operator')).toHaveTextContent('-')
})

test('should calculate values', () => {
  render(<App />)
  // type 20
  fireEvent.focus(screen.getByTestId('firstValue'))
  fireEvent.click(screen.getByTestId('button-2'))
  fireEvent.click(screen.getByTestId('button-0'))

  // type 30
  fireEvent.focus(screen.getByTestId('secondValue'))
  fireEvent.click(screen.getByTestId('button-3'))
  fireEvent.click(screen.getByTestId('button-0'))

  // click calculate
  fireEvent.click(screen.getByTestId('button-calculate'))

  expect(screen.getByDisplayValue('50')).toBeTruthy()
})
