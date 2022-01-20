import styled from "styled-components"
import { lg } from "../../../../styles/utils/media_queries"

export const MenuItem = styled.li`
  border-bottom: 1px solid #000000;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  display: flex;
  padding: 20px;
  width: 100%;

  ${lg(`
        display: flex; 
      `
  )}
  .desktopIcon {
    display: none;
    ${lg(`
        display:  inline-block; 
         margin-left: 10px;
      `
    )}
  }

  .dropDown {
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 2;
  }

  .dropdownItem {
    font-size: 12px;
    width: 100%;
    z-index: 2;

    &:hover {
      background-color: #919191;
    }
  }

  &:hover {
    .dropdownItem {
      display: inline-flex;
    }
  }
`