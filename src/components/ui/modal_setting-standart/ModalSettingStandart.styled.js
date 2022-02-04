import styled from "styled-components"
import { md } from "../../../styles/utils/media_queries"


export const ModalSettingSrandartStyles = styled.div`
  display: none;

  &.active {
    display: flex;
  }

  position: fixed;
  background-color: rgba(77, 77, 77, 0.82);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 300;

  justify-content: center;
  align-items: center;

  .overlay {
    font-size: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    border: none;
    background-color: rgba(82, 82, 82, 0.82);
    z-index: 1;
  }

  .modal {
    &-content {
      background-color: #fff;
      width: 100%;
      height: 100%;
      max-width: 1024px;
      max-height: min(670px, 90vh);
      position: relative;
      z-index: 2;
      overflow: auto;
      display: flex;
      flex-direction: column;
      ${md(`
        overflow:visible
        
        `)}
    }

    &-context {

      padding: 10px 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      ${md(` 
 padding:5px 80px 20px 80px;
 
 `)}
    }

    &-text {
      margin-bottom: 40px;

      font-size: 12px;
      line-height: 1.3;
      ${md(`
font-size:14px;
display: flex;
gap: 20px;
      max-height:  calc(100vh - 260px);
      overflow: auto;
`)}
    }

    &-image {

      display: none;
      position: absolute;


      ${md(` 
       display:block;
       width: 350px;
        height: 425px; 
      transform: rotate(-20deg);
      transform-origin: 100% 0;
       `)}
      z-index: 300;
      @media (max-height: 860px) {
        height: 200px;
        .gatsby-image-wrapper {
          height: 100%;

        }
      }
    }
  }

  .main_button {
    background-color: var(--darkpurple);
    color: white;
    ${md(` 
        margin-left: 0;
        margin-right: auto;
        max-width: 48%;
`)}

  }

  .close {
    cursor: pointer;
    background-color: transparent;
    display: block;
    margin-left: auto;
    margin-top: 10px;
    border: none;

    &:hover {
      transform: rotate(10deg);
      transform-origin: 60% 60%;
    }
  }

`