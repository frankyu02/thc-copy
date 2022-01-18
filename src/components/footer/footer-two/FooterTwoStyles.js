import styled from 'styled-components';

export const FooterTwoStyles = styled.div`
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
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
    .footer-menu-wrap{
        margin: 0 auto;
        max-width: 160px;
    }
    @media (max-width: 992px){
        order: -1;
        width: 50%;
        border: 0;
    }
`;