import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :focus {
    outline: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, .root { height: 100%; }

  body {
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
  }

  fieldset {
    border: 0;
  }

  button {
    cursor: pointer;
    border: 0;
    outline: 0;
  }

  input[type="text"]::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`
