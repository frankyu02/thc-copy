import styled from 'styled-components';
import {sm, xs, xxs} from "../../../styles/utils/media_queries";

export const EducationHeroStyles = styled.section` 
    color: #fff;
    .hero-title{
        padding-top: 20px;
        padding-left: 3%;
        padding-bottom: 7px;
        background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%), #612C8F;
    }
    .hero-img{
        background: linear-gradient(178.71deg, #612C8F 1.42%, rgba(97, 44, 143, 0) 102.89%);
        .gatsby-image-wrapper{
          z-index: -1;
          width: 100%;
          height: 100%;
        }
        /* img{
            width: 100%;
            max-height: 350px;
            object-fit: cover;
            background: blue;
            display: block;
            z-index: -1;
            position: relative;
        } */
    }
    h1{
        font-family: Neumatic Compressed Bold;
        font-size: 45px;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        line-height: 100%;
        margin-bottom: 15px;
    }
    time{
        font-size: 18px;
        font-family: 'MADE Outer Sans Light';
        text-transform: uppercase;
    }
    ${xxs(`
        h1{
            font-size: 66px;
        }
    `)}
    ${xs(`
        h1{
            font-size: 86px;
            margin-bottom: 30px;
        }
    `)}
    ${sm(`
        display: flex;
        min-height: 500px;
        h1{
            font-size: 96px;
            margin-bottom: 50px;
        }
        .hero-title{
            padding-left: 1%;
            padding-top: 0;
            padding-bottom: 0;
            width: 40%;
            background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%), #612C8F;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .hero-img{
            width: 60%;
            background: linear-gradient(90.22deg, #612C8F 3.81%, rgba(97, 44, 143, 0) 33.23%);
            img{
                max-height: 500px;
            }
        }
    `)}
`;