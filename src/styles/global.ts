import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-black-400: rgb(0, 0, 0);
    --clr-black-300: rgb(17, 17, 17);
    --clr-black-200: rgb(22, 22, 22);
    --clr-white: rgb(255, 255, 255);
    --clr-off-white: rgb(217, 217, 217);
    --clr-blue-300: rgb(19, 154, 228);

    --ff-primary: "Inter", sans-serif;
    --ff-secondary: "Montserrat Alternates", sans-serif;

    /* --fw-light: 300; */
    --fw-regular: 400;
    /* --fw-semi-bold: 500; */
    --fw-bold: 700;

    --fs-300: 1rem;
    --fs-400: 1.125rem;
    --fs-500: 1.25rem;
    --fs-600: 1.50rem;
    --fs-700: 1.75rem;
    --fs-800: 2rem;

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
      font-size: var(--fs-400);
      font-family: var(--ff-primary);
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }
`
export { GlobalStyle }
