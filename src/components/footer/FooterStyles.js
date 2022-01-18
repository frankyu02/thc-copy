import styled from 'styled-components';

export const FooterStyles = styled.footer`
    background: #612C8F;
    color: #fff;
        h2{
            box-sizing: border-box;
            font-family: Neumatic Compressed Bold;
            font-size: 80px;
            text-transform: uppercase;
            margin: 40px 0 90px;
            line-height: 95%;
            width: 30%;
            padding-right: 8%;
        }
    .footer-wrap{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
    .footer-menu{
        box-sizing: border-box;
        border: 1px solid #fff;
        width: 30%;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 18px;
        padding-top: 40px;
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
        margin: 0 auto;
        max-width: 160px;
    }
    .footer-form{
        box-sizing: border-box;
        padding: 70px 5% 0;
        width: 40%;
        h3{
            text-transform: uppercase;
            margin-bottom: 55px;
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
        width: 30%;
        border: 1px solid #fff;
        border-left: 0;
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
    @media (max-width: 1200px){
        h2{
            margin: 40px 0 50px;
            padding-right: 5%;
        }
    }
    @media (max-width: 992px){
        h2{
            width: 100%;
            order: -2;
            border-bottom: 1px solid #fff;
            margin-bottom: 0;
            padding-bottom: 25px;
        }
        .footer-menu{
            order: -1;
            border: 0;
            width: 50%;
        }
        .footer-menu-wrap{
            margin: 0;
        }
        .footer-form{
            order: 1;
            width: 100%;
            padding: 30px 0;
            border-bottom: 1px solid #fff;
        }
        .footer-location{
            width: 100%;
            border-right: 0;
        }
    }
`;