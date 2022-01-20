import styled from "styled-components"
import { lg } from "../../../../styles/utils/media_queries"

export const MenuItem = styled.li`

  .icon {
    margin-left: 10px;
    display: inline-block;
  }

  padding: 5px 1px;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  display: flex;
  ${lg(`
    display: flex; 
  `
  )}

  align-items: center;
  margin-right: 60px;


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
    box-sizing: border-box;
    padding: 10px 5px;
    display: none;
    align-items: center;
    justify-content: center;
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