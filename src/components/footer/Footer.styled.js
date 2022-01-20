import styled from 'styled-components';
import {md, sm, xs, xxs} from "../../styles/utils/media_queries";

export const FooterStyled = styled.footer`
    background: #612C8F;
    color: #fff;
    h2{
        order: -2;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        padding: 34px 0 50px;
        margin-bottom: 0;
        padding-bottom: 25px;
        padding-right: 5%;
        font-family: Neumatic Compressed Bold;
        font-size: 50px;
        box-sizing: border-box;
        line-height: 95%;
        text-transform: uppercase;
    }
    .footer-wrap{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
    .footer-menu{
        order: -1;
        border: 0;
        width: 50%;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 18px;
        padding-top: 34px;
        a{
            display: block;
            margin-bottom: 15px;
            transition: .3s;
        }
        a:hover{
            color: #b17acc;
        }
    }
    .footer-menu-wrap{
        margin: 0;
        max-width: 160px;
        padding-right: 15px;
    }
    .footer-form{
        width: 100%;
        order: 1;
        padding: 30px 0;
        border-bottom: 1px solid #fff;
        border-top: 1px solid #fff;
        box-sizing: border-box;
        h3{
            text-transform: uppercase;
            margin-bottom: 55px;
            font-size: 32px;
        }
        .footer-form__email{
            display: flex;
            padding: 25px 30px;
            margin-bottom: 25px;
            background: #FFFFFF;
            border: 1px solid #000000;
            input{
                width: calc(100% - 35px);
                border: 0;
            }
            input::placeholder{
                font-size: 18px;
                font-family: Integral CF Bold;
                color: #000;
            }
        }
        button{
            cursor: pointer;
            background: transparent;
            border: 0;
            svg{
                transition: .5s;
            }
        }
        button:hover{
            svg{
                margin-right: -10px;
            }
        }
        .footer-form-checkbox{
            display: flex;
            align-items: flex-start;
            font-size: 12px;
            font-family: Integral CF Bold;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            input{
                position: absolute;
                left: 0;
                top: 0;
                height: 0;
                width: 0;
                opacity: 0;
                z-index: -1;
            }
            span{
                display: block;
                margin-right: 20px;
                border: 1px solid #fff;
                width: 100%;
                max-width: 24px;
                height: 24px;
                cursor: pointer;
            }
        }
    }
    .footer-location{
        box-sizing: border-box;
        padding: 30px 0;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 120%;
        font-family: Integral CF;
        p{
            margin: 0;
        }
        .location{
            margin-bottom: 20px;
        }
    }
    .copyright{
        text-align: center;
        font-size: 14px;
        font-family: Integral CF;
        margin: 0;
        padding-bottom: 20px; 
        
    }

    ${xxs(`
        h2{
            font-size: 70px;
        }
    `)}
    ${xs(`
        h2{
            font-size: 80px;
        }
        .footer-form{
            border-bottom: 0;
        }
    `)}
    ${sm(`
        .footer-menu-wrap{
            padding-right: 0;
            margin: 0 auto;
        }
        h2{
            padding: 40px 0 50px;
            width: 26%;
            padding-right: 5%;
            border-bottom: 0;
        }
        .footer-menu{
            order: 0;
            width: 30%;
            box-sizing: border-box;
            border: 1px solid #fff;
        }
        .footer-form{
            order: 0;
            padding: 70px 5% 0;
            width: 44%;
        }
        .footer-location{
            width: 26%;
            border: 1px solid #fff;
            border-left: 0;
        }
    `)}
    ${md(`
        h2{
            padding: 34px 0 76px;
            padding-right: 8%;
        }
    `)}
`;