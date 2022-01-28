import styled from "styled-components";
import { sm } from "../../styles/utils/media_queries";
import { __CONTAINERS } from "../../styles/utils/variables";

export const ContentPlaceStyles = styled.div`
  ${sm(`
    padding-top: 100px!important;
    padding-bottom: 100px!important;
    display: flex;
    justify-content: space-between;
  `)}
`