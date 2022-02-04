import styled from "styled-components"
import { lg, md } from "../../../../styles/utils/media_queries"

export const SearchStyled = styled.div`
  .search-btn {
    min-width: 80px;
    cursor: pointer;
    display: block;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    position: relative;
    padding: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    ${lg(`
           border-left: 1px solid #000;
      `)}
  }

  .hide-border::after {
    content: '';
    background-color: #fff;
    position: absolute;
    top: calc(100% - 3px);
    height: 6px;
    left: 0;
    right: 0;
    z-index: 101;

  }

`


export const SearchFrameStyled = styled.div`
  background: linear-gradient(71.17deg, #612C8F -2.69%, rgba(255, 255, 255, 0) 33.31%), #FFFFFF;
  position: absolute;
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
  left: 0;
  right: 0;
  top: 100%;
  bottom: 0;
  min-height: 300px;
  ${md(`
  min-height:100px;
     aspect-ratio: 3;
    `)}

  width: 100%;
  border-bottom: solid black 1px;


  .content {
    display: flex;
    padding: 20px 50px 20px 20px;
    ${md(`
  padding: 20px calc(125px + 2.5vw) 20px 20px;
    `)}

  }

  .search-btn {
    min-width: 50px;
    padding-top: 10px;
    border: none;
  }

  .input {
    background-color: transparent;
    border: none;
    width: calc(100% - 60px);
    font-size: 36px;
    outline: none;

    &::placeholder {
      color: black;
    }
  }
`