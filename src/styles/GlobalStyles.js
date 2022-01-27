import { createGlobalStyle } from "styled-components"
import { sm, xs } from "./utils/media_queries"


const GlobalStyles = createGlobalStyle`
  :root {
    --darkpurple: #612C8F;
    --lightpurple: #b095c7;
    --black: #000000;
    --grey: #F0F0F0;
    --white: #FFFFFF;
    --placeholder: #808080;
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
    padding: 0 10px;

  }

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
    font-size: 18px;
    max-width: calc(100% - 10px);

    ${xs(`
      padding: 17px 15px;
      max-width: 330px;
    `)}
    &--purple {
      background: var(--lightpurple);
      color: #fff;
      border: none;
    }

    &:hover {
      font-style: italic;
      background: #612c8f;
      color: white;
    }
  }


  // default input
  .input {
    padding: 34px;
    background: #fff;
    border: 1px solid #000;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.01em;
    font-family: 'Integral CF Bold';
    display: block;
    width: 100%;

    &::-webkit-input-placeholder {
      color: var(--placeholder);
    }

    &::-moz-placeholder {
      color: var(--placeholder);
    }

    &:-moz-placeholder {
      color: var(--placeholder);
    }

    &:-ms-input-placeholder {
      color: var(--placeholder);
    }
  }

  // default checkbox
  .checkbox {
    margin: 32px 0;

    label {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 12px;
      text-transform: uppercase;
      font-family: 'Integral CF Bold';
      cursor: pointer;

      &::before {
        content: '';
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 42px;
        min-height: 42px;
        border: 1px solid;
        margin-right: 24px;
        font-size: 24px;

        ${sm(`
          min-width: 24px;
          min-height: 24px;
        `)}
      }
    }

    input {
      opacity: 0;
      position: absolute;

      &:checked {

        + label {
          &::before {
            content: '✓'
          }
        }
      }
    }


  }
`

export default GlobalStyles
