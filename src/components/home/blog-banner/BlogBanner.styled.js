import styled from 'styled-components';

export const BlogBannerStyled = styled.section`
    background: #612C8F; 
    color: #fff;
    .blog-banner{
        padding: 140px 0 95px;
        h2{
            font-size: 96px;
            font-style: italic;
            font-family: Integral CF Bold;
            line-height: 100%;
            text-align: right;
            margin-bottom: 50px;
            padding-right: 1%;
        }
        .blog-wrap{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 120px;
        }
        .blog-item{
            width: 49%;
            h3{
                font-family: Neumatic Compressed Bold;
                text-transform: uppercase;
                font-size: 96px;
            }
            .gatsby-image-wrapper{
                margin-bottom: 15px;
            }
            a{
                font-size: 18px;
                svg{
                    margin-left: 10px;
                }
            }
        }
        .button{
            text-align: center;
        }
        .btn{
            margin: 0 auto;
            display: inline-block;
            background: #FFFFFF;
            border: 1px solid #000000;
            color: #000;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            font-family: Integral CF Bold;
            padding: 20px 30px;
            transition: .4s;
        }
        .btn:hover{
            background: transparent;
            color: #fff;
        }
    }
    @media (max-width: 992px){
        .blog-banner{
            padding: 80px 0 50px;
            h2{
                font-size: 75px;
            }
            .blog-item{
                h3{
                    font-size: 70px;
                }
            }
        }
    }
    @media (max-width: 768px){
        .blog-banner{
            padding: 50px 0 30px;
            h2{
                font-size: 60px;
                text-align: left;
            }
            .blog-wrap{
                margin-bottom: 15px;
            }
            .blog-item{
                margin-bottom: 50px;
                width: 100%;
                h3{
                    font-size: 70px;
                    margin-bottom: 0;
                }
            }
            .btn{
                font-size: 18px;
                display: block;
            }
        }
    }
`;