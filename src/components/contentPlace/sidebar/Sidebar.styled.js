import styled from "styled-components";
import { sm } from "../../../styles/utils/media_queries";
import { __POSTS_CONTENT_SIZE } from "../../../styles/utils/variables"

export const SidebarStyles = styled.aside`
  width: calc(100% - ${__POSTS_CONTENT_SIZE} - 24px);
  display: none;

  ${sm(`
    display: block;
  `)}
`