import styled from 'styled-components';
import {xs, xxs} from "../../../styles/utils/media_queries";


export const LargeBannerStyled = styled.section` 
     background-color: #F0F0F0;
    padding-bottom: 45px;
    .container {
      position: relative;
      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: linear-gradient(346.23deg, #612C8F 9.84%, rgba(97, 44, 143, 0) 100.31%);
      }
    }
    .content_parent {
      position: relative;
      z-index: 2;
    }
    .gatsby-image-wrapper {
      position:absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .large_wrapper {
      position: relative;
      min-height: 511px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      color: white;
      .large_banner {
        margin-top: 200px;
      }
      h2 {
         font-family: 'Integral CF';
         font-size: 30px;
         margin-bottom: 40px;
      }
      p {
        font-size: 12px;
        font-family: 'MADE OUTER Sans Light';
        max-width: 265px;
        margin: 0 auto 40px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
    ${xxs(`
        .large_banner {
            h2 {
                font-size: 38px;
            }
            p {
                font-size: 16px;
                max-width: 400px;
            }
        }
    `)}
    ${xs(`
        padding-bottom: 100px;
        .large_wrapper {
            .large_banner {
            margin-top: 40px;
            h2 {
                font-size: 48px;
            }
            p {
                font-size: 18px;
                max-width: 729px;
            }
        }
        }
    `)}
`;