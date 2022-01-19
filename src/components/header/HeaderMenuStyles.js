import styled from "styled-components"
import { lg } from "../../styles/utils/media_queries"

export const HeaderMenuStyles = styled.section`
  .header {
    display: flex;
    border-bottom: 1px solid #000;
    font-family: 'Integral CF';

    & > div {
      min-height: 60px;
      ${lg(`
      min-height: 80px;
      `)}

      display: flex;
      align-item: center;
      border-right: 1px solid #000;

      &:last-child {
        border-right: none
      }
    }

    &-alert {
      text-transform: uppercase;
      font-size: 14px;
      line-height: 17px;
      background: #000;
      padding: 13px 0 14px;
      color: #fff;
      text-align: center;
    }

    .menu-btn {
      width: 60px;
      border: none;
      border-right: 1px solid #000;
      background-color: #fff;
      padding: 5px 17px;
      cursor: pointer;


      & .line {
        transition: 0.3s;
        background-color: #000000;
        width: 100%;
        height: 2px;
        margin: 6px 0;
      }

      ${lg(`
    display:none
      `)}
      &.open {
        & .line {


        }

        & .line:nth-child(1) {
          margin: 0 0 -2px 0;

          transform: rotate(45deg);
        }

        & .line:nth-child(2) {
          display: none;
        }

        & .line:nth-child(3) {
          margin: 0 0 1px 0;

          transform: rotate(-45deg);
        }
      }
    }


    nav {
      transition: .5s;
      flex: 1;
      position: fixed;
      left: -100%;
      bottom: 0;
      top: 110px;
      z-index: 11;
      background-color: #fff;
      width: 100%;

      max-width: 400px;
      opacity: 0;
      ${lg(`
           opacity: 1;
            position:static; 
            max-width:100%;
      `)}
      align-items: center;
      justify-content: center;

      &.open {
        padding: 30px;
        left: 0;
        opacity: 1;

      }
    }

    .headerList {
      margin: 0;
      padding: 0;
      flex-direction: column;
      justify-content: left;
      text-align: left;
      ${lg(`
               list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
  
      justify-content: center;
      `)}

    }

    .logo {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      ${lg(`
        flex-grow: 0; 
      `)}
      a {
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .cart, .search {
      &-btn {
        cursor: pointer
        display: block;
        height: 100%;
        background: none;
        border: none;
        outline: none
      }
    }

    .card-btn {
      padding: 0 32px;
      text-transform: uppercase
    }

    .search-btn {
      padding: 0 26px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      border-left: 1px solid #000;
    }
  }


`