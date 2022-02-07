import styled from "styled-components"
import { lg } from "../../styles/utils/media_queries"

export const HeaderMenuStyled = styled.section`
  position: sticky;
  top: 0;
  z-index: 110;

  .header {
    background-color: #fff;
    display: flex;
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

    .order-button {
      flex-grow: 1;
      width: 100%;
      justify-content: center;
      align-items: flex-end;
      display: flex;
      margin-bottom: 30px;
      padding: 10px;

      .main_button {
        background-color: var(--darkpurple);
        color: white;
      }

      ${lg(`
          display:none
          `)}
    }

    nav {
      transition: .6s;
      flex: 1;
      position: fixed;
      left: -100%;
      right: -100%;
      bottom: 0;
      overflow: auto;
      top: 105px;
      z-index: 11;
      background-color: #fff;
      width: 100%;
      opacity: 0;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: #eae8e8;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--darkpurple);
        border-radius: 8px;
        border: 1px solid #e3ded3;
      }

      ${lg(`
           opacity: 1;
            position:static; 
            max-width:100%;
      `)}
      align-items: center;
      justify-content: center;

      &.open {
        transition: .3s;
        right: 0;
        left: 0;
        opacity: 1;

      }
    }

    .header-list {
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: left;
      text-align: left;
      ${lg(`
      list-style: none;
      flex-direction:row; 
      flex-wrap: wrap;
      align-items: center;
       text-align:center;
      justify-content: center;
      `)}

    }

    .logo {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(14px, 4vw, 28px);

      ${lg(`
        flex-grow: 0; 
      `)}
      a {
        padding: 0 20px;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    }

    .cart {
      padding: 0 2vw;
      position: relative;
      &-btn {
        cursor: pointer;
        display: block;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        font-size: clamp(12px, 4vw, 14px);
        text-transform: uppercase;
      }
      .cart-btn{
        visibility: ${props => props.cartState ? 'visible' : `hidden`};
      }
      .close-btn{
        cursor: pointer;
        border: none;
        visibility: ${props => props.cartState ? 'hidden' : `visible`};
        position: absolute;
        background: white;
        top: 0;
        left: 0;
        top: 50%;
        margin-top: -14px;
        left: 50%;
        margin-left: -10%;
        font-size: 25px;
        color: #612C8F;
      }
    }


  }


`