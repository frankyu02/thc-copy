import styled from "styled-components"
import { lg } from "../../../../styles/utils/media_queries"


export const DropDownStyled = styled.li`
  max-height: ${(props) => props.isOpen ? "1500px" : 0};
  transition: ${(props) => props.isOpen ? "1000ms" : "500ms"};
  overflow: hidden;
  list-style: none;
  padding: 0;
  background-color: var(--grey);

  ${lg(`
  position:absolute; 
  transition:0.1s;
  top:100%;
  left:0;
  right:0;
  `)}
  .dropdown-item {
    font-size: 14px;
    line-height: 1;

    &:hover {
      background-color: #d3d3d3;
    }

    &-link {
      padding: 15px 5px 15px 40px;
      width: 100%;
      display: block;
    }

    &:last-child {
      margin-bottom: 15px;
    }
  }

`