import styled from 'styled-components';

export const SmallHeroStyles = styled.section` 
    .small-hero{
        position: relative;
        background: #000;
        padding-bottom: 23.4%;
        overflow: hidden;
        &-title{
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            font-size: 70px;
            line-height: 100%;
            font-family: Integral CF;
            font-style: italic;
            font-weight: bold;
            color: #fff;
            left: 0;
            z-index:1;
            width: 100%;
            background: linear-gradient(90deg,#612C8F 10%,rgba(97,44,143,0) 70%);
            height: 100%;
            padding-left: 27px
        }
        .gatsby-image-wrapper{
            position: absolute;
            top: 0;
            right: 0;
            max-wigth: 100%;
            height: 100%;
        }
    }
    @media (max-width: 767px) {
        .small-hero{
            padding-bottom: 67%;
            &-title{
                align-items: flex-start;
                font-size: 40px;
                padding-right: 10px;
                padding-top: 55px;
                height: 60%;
                width: 100%;
                background: linear-gradient(-180deg,#612C8F 7%,rgba(97,44,143,0) 75%);
            }
        }
    }
`;