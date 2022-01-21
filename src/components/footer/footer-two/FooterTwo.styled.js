import styled from 'styled-components';
import {sm} from "../../../styles/utils/media_queries";

export const FooterTwoStyled = styled.div`
    box-sizing: border-box;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    padding-top: 40px;
    order: -1;
    width: 50%;
    a{
        display: block;
        margin-bottom: 15px;
        transition: .3s;
    }
    a:hover{
        color: #b17acc;
    }
    .footer-menu-wrap{
        margin: 0 auto;
        max-width: 160px;
    }
    ${sm(`
        width: 30%;
        order: 0;
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
    `)}
`;