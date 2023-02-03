import { createGlobalStyle } from 'styled-components'
import { devices } from './devices'

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-black-400: rgb(0, 0, 0);
    --clr-black-300: rgb(17, 17, 17);
    --clr-black-200: rgb(22, 22, 22);
    --clr-white: rgb(255, 255, 255);
    --clr-off-white: rgb(250, 250, 255);
    --clr-blue-300: rgb(19, 154, 228);
    --clr-blue-green: rgb(157, 217, 210);
    --bg-linear: linear-gradient(
      317.07deg,
      rgba(19, 154, 228, 0.2) 23.09%,
      rgba(0, 0, 0, 0) 88.66%
    ),
    #000000;

    --ff-primary: "Inter", sans-serif;
    --ff-secondary: "Montserrat Alternates", sans-serif;

    /* --fw-light: 300; */
    --fw-regular: 400;
    /* --fw-semi-bold: 500; */
    --fw-bold: 700;

    --fs-100: 0.6rem;
    --fs-200: 0.8rem;
    --fs-300: 1rem;
    --fs-400: 1.125rem;
    --fs-500: 1.25rem;
    --fs-600: 1.50rem;
    --fs-700: 1.75rem;
    --fs-800: 2rem;
    --fs-900: 2.6rem;

    --td-fast: 300ms;
    --td-medium: 800ms;
    --td-slow: 2s;
  }

  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font: inherit;
      border: none;
      text-decoration: none;
      list-style-type: none;
      outline: none;
      font-family: var(--ff-primary);
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
  	overflow-x: hidden;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
  }

  @media (${devices.laptopL}) {
    :root {
      --fs-100: var(--fs-200);
      --fs-400: var(--fs-500);
      --fs-500: var(--fs-600);
    }
  }
`
export { GlobalStyle }
