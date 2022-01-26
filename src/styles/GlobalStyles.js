import { createGlobalStyle } from "styled-components"
import { lg, xs, xxs } from "./utils/media_queries"
import { __CONTAINERS } from "./utils/variables"


const GlobalStyles = createGlobalStyle`
  :root {
    --darkpurple: #612C8F;
    --black: #000000;
    --grey: #F0F0F0;
    --white: #FFFFFF;
    --container-xl: 1400px;
    --fontPrimary: 'Integral CF'
  }

  html {
    font-size: 10px;
    background-color: var(--white);
  }

  body {
    font-size: 2rem;
    scrollbar-width: thin;
    scrollbar-color: #612C8F #EEEEEF;
  }

  * {
    box-sizing: border-box;
  }

  .p-0 {
    padding: 0px 0px;
  }

  fieldset {
    border-color: rgba(0, 0, 0, 0.1);
    border-width: 1px;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
  }

  .main_button {
    border: 1px solid black;
    padding: 17px 15px;
    box-sizing: border-box;
    font-family: 'Integral CF Bold';
    background: white;
    color: black;
    width: 100%;
    max-width: 330px;
    font-style: normal;
    text-transform: uppercase;
    margin: 0 auto;
    display: block;
    text-align: center;
    transition: 0.2s;
    font-size: 18px;
  }

  .main_button:hover {
    font-style: italic;
    background: #612c8f;
    color: white;
  }

  @media (max-width: 767px) {
    .main_button {
      border: 1px solid black;
      padding: 17px 0;
      box-sizing: border-box;
      font-family: 'Integral CF Bold';
      background: white;
      color: black;
      width: 100%;
      max-width: 330px;
      font-style: normal;
      text-transform: uppercase;
      margin: 0 auto;
      display: block;
      text-align: center;
      transition: 0.2s;
    }

    .main_button:hover {
      font-style: italic;
      background: #612c8f;
      color: white;
    }

    @media (max-width: 767px) {
      .main_button {
        font-size: 18px;
        max-width: calc(100% - 10px);
      }
    }
  }

  ${xxs(`
        .container {
            width: ${__CONTAINERS.xxs};
        }
  `)}
  ${xs(`
        .container {
            width: ${__CONTAINERS.xs};
        }
  `)}
  ${lg(`
        .container {
            width: ${__CONTAINERS.lg}
        }
  `)}






`

export default GlobalStyles
