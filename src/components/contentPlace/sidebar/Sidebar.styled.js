import styled from "styled-components";
import { sm } from "../../../styles/utils/media_queries";
import { __POSTS_CONTENT_SIZE } from "../../../styles/utils/variables"

export const SidebarStyles = styled.aside`
  width: calc(100% - ${__POSTS_CONTENT_SIZE} - 24px);
  display: none;

  .sidebar {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-family: var(--fontPrimary);
    position: sticky;
    top: 149px;
  }

  ${sm(`
    display: block;
  `)}

  .sidebar-title {    
    margin-bottom: 24px;
    
  }

  .sidebar-links {
    list-style: none;
    padding-left: 0;

    li {

      a {
        color: var(--darkpurple);
        font-weight: 500;
        font-family: var(--fontPrimary);

        &:hover {
          text-decoration: underline;
        }
      }
    }
    
  }
`