import styled from 'styled-components';

export const BrandsStyled = styled.section` 
    .btn{
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 19px 20px;
        box-sizing: border-box;
        max-width: 460px;
        background: white;
        border: 1px solid black;
        font-weight: 900;
        font-size: 18px;
        line-height: 18px;
        font-style: normal;
        margin: 0 auto;
        text-transform: uppercase;
        transition: all .3s linear;
        &:hover{
            background: #612C8F;
            border-color: #fff;
            color: #fff;
            font-style: italic
        }
    }
    .brand{
        &-section{
            padding: 82px 0 153px
        }
        &-title{
            h2{
                font-family: 'Neumatic Compressed Bold';
                font-weight: 900;
                font-size: 130px;
                line-height: 100%;
                color: #612C8F;
                text-transform: uppercase;
                margin: 0;
                line-height: 90%;
                letter-spacing: 0.01em;
            }
            h3{
                font-size: 35px;
                line-height: 100%;
                color: #000000;
                font-style: italic;
                font-family: 'Integral CF Bold';
                margin-bottom: 39px
            }
        }
        &-grid{
            display: grid;
            background-color: #000;
            border: 1px solid #000;
            grid-gap: 1px;
            justify-self: center;
            grid-template-columns: repeat(4, 1fr);
            margin-bottom: 82px;
        }
        &-item{
            background: #fff;
            padding-bottom: 100%;
            position: relative;
            height: 0;
            &>div{
                position: absolute;
                top: 50%;
                transition: all .3s linear;
                left: 50%;
                transform: translate(-50%, -50%)
            }
        }
    }
    @media (max-width: 1024px){
        .brand{
            &-grid{
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
    @media (max-width: 767px){
        padding-left: 10px;
        padding-right: 10px;
        .brand{
            &-grid{
                margin-bottom: 50px
            }
            &-section{
                padding: 74px 0 50px
            }
            &-grid{
                grid-template-columns: repeat(2, 1fr);
            }
            &-title{
                h2{
                    font-size: 60px;
                    margin-bottom: 20px
                }
                h3{
                    font-size: 20px;
                    line-height: 100%;
                    margin-bottom: 42px
                }
            }
        }
    }
`;