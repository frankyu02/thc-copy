import styled from 'styled-components';
import {md, sm, xs} from "../../../styles/utils/media_queries";

export const FooterSocialStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    order: 2;
    font-size: 28px;
    a{  
        padding: 25px 0;
        display: block;
        border-bottom: 1px solid #fff;
        box-sizing: border-box;
        transition: .3s;
        font-family: Integral CF Bold;
        letter-spacing: 0.01em;
        width: 100%;
    }
    a:hover{
        background: #fff;
        color: #612C8F;
    }
    ${xs(`
        font-size: 22px;
        a{
            border: 1px solid #fff;
            width: 50%;
            
        }
    `)}
    ${sm(`
        width: 40%;
        a{
            padding: 40px 0;
        }
    `)}
    ${md(`
        font-size: 28px;
    `)}
`;