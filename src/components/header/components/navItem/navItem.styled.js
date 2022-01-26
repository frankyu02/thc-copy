import styled from "styled-components"
import { lg } from "../../../../styles/utils/media_queries"

export const MenuItem = styled.li`
  border-bottom: 1px solid #000000;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  width: 100%;
  height: auto;

  ${lg(`
      width:auto;
      border:none;
      `
  )}
  ${lg(`
        display: flex; 
      `
  )}
  .desktop-icon {
    display: none;
    ${lg(`
        display:  inline-block; 
         margin-left: 10px;
      `
    )}
  }

  .menu-active {
    transition: 0.5s;
    min-height: 80px;
    padding: 5px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background-color: transparent;
    border: none;
    text-transform: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: 1;
    cursor: pointer;

    ${lg(`
          position: relative;
         min-height: 80px;
          background-color:#fff;
              &::after {
                transition: 0.3s;
                content: '';
                display: block;
                position: absolute;
                height: 2px;
                background-color: #000;
                top: calc(100% - 20px);
                left: 100%;
                right: 100%;
    }
      `
    )}
    &:hover {
      background-color: #d3d3d3;

      &::after {
        left: 15px;
        right: 15px;
      }
    }
  }

  &.accordionOpen {
    background-color: var(--grey);

    .menu-active {
      min-height: 60px;


      ${lg(`
         min-height: 80px;
          background-color:#fff;
          &::after {
          
          left:15px;
          right:15px;
          }
      `
      )}

    }


  }


`