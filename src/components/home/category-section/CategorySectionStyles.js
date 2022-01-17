import styled from 'styled-components';

export const CategoryStyles = styled.section` 
    .category-section{
        padding: 100px 0;
        h2{
            font-size: 130px;
            font-weight: 900;      
            color: #612C8F;
            text-transform: uppercase;
            letter-spacing: 0.01em;
            font-family: 'Neumatic Compressed Bold';
        }
        h3{
            font-size: 35px;
            font-weight: 700;
            font-style: italic;
            margin-bottom: 45px;
        }   
        h4{
            font-size: 28px;
            font-weight: 500;
            padding: 0;
            margin: 0;
        }
        .category{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 15px;
            a{  
                position: relative;
                cursor: pointer;
                border: 1px solid #000000;
                width: 48%;
                margin-bottom: 16px;
                transition: .4s;
                .gatsby-image-wrapper{
                    transition: .4s;
                    opacity: 0;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: -1;
                }
                h4{
                    padding: 55px 25px;
                }
            }
            a:hover{
                transition: .4s;
                background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
                color: #fff;
                .gatsby-image-wrapper{
                    opacity: 1;
                }
            }
        }
        .button{
            font-size: 70px;
            font-weight: 900;
            color: #612C8F;
            text-transform: uppercase;
            letter-spacing: 0.01em;
            font-family: 'Neumatic Compressed Bold';
            a{
                display: inline-flex;
                align-items: baseline;
                line-height: 1;
                transition: .4s;
                svg{
                    margin-left: 12px;
                }
            }
            a:hover{
                align-items: flex-start;
                svg{
                    margin-top: 5px;
                    width: 36px;
                    height: 36px;
                }
            }
        }
    }
    @media (max-width: 1365px){
        .category-section{
            h2{
                font-size: 100px;
            }
        }
    }
    @media (max-width: 992px){
        .category-section{
            padding: 80px 0;
            h2{
                font-size: 80px;
            }
            h3{
                font-size: 20px;
            }
            .category{
                a{
                    margin-bottom: 15px;
                    width: 100%;
                }
            }
            .button{
                font-size: 60px;
            }
        }
    }
    @media (max-width: 768px){
        .category-section{
            padding: 50px 0;
            h2{
                font-size: 60px;
            }
            h3{
                font-size: 20px;
                margin-bottom: 25px;
            }
            .category{
                a{
                    margin-bottom: 10px;
                    background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
                    color: #fff;
                    h4{
                        padding: 50px 20px;
                    }
                    .gatsby-image-wrapper{
                        opacity: 1;
                    }
                }
            }
            .button{
                font-size: 50px;
            }
        }
    }

`;