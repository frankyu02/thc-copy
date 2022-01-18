import styled from 'styled-components';

export const FooterSocialStyles = styled.div`
    width: 40%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    a{  
        padding: 40px 0;
        display: block;
        width: 50%;
        border: 1px solid #fff;
        box-sizing: border-box;
        transition: .3s;
        font-family: Integral CF Bold;
        letter-spacing: 0.01em;
    }
    a:hover{
        background: #fff;
        color: #612C8F;
    }
    @media (max-width: 992px){
        order: 2;
        width: 100%;
    }
    @media (max-width: 768px){
        a{
            border: 0;
            border-bottom: 1px solid #fff;
            width: 100%;
            font-size: 28px;
        }
    }
`;