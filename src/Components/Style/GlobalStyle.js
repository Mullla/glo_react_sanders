import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #121212;
    color: ghostwhite;
    font-family: Oxygen, sans-serif;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3 {
    font-family: Crimson Pro, serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button{
    cursor: pointer;
  }

  input, button {
    font-family: inherit;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none; 
}

  input[type='number'],
  input[type='number']:hover,
  input[type='number']:focus {
      appearance: none;
      -moz-appearance: textfield;
  }


  
`;
