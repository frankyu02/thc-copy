import styled from 'styled-components';
import {md, lg, xs, xxs} from "../../../styles/utils/media_queries";



export const LocationMapStyle = styled.section` 
    padding: 30px 0 80px;
    background: rgb(240,240,240);
    .location_map {
    background: white;
      h4 {
      text-align: center;
      font-size: 24px;
      max-width: 280px;
      margin: 0 auto 20px;
      font-style: italic;
      font-family: 'Integral CF Bold';
    }
    p {
      font-size: 12px;
      max-width: 240px;
      margin: 60px auto;
      font-weight: bold;
    }
    .main_button {
      max-width: 100%;
      color: white;
      background: var(--darkpurple);
    }
    .map_info {
      padding-top: 50px;
    }
    .gatsby-image-wrapper {
      width: 100%;
    }
    }
    ${xxs(`
        .location_map {
            h4 {
                max-width: 100%
            }
            p{
            max-width: 90%;
            font-size: 14px;
        }
        }
    `)}
    ${xs(`
        padding: 50px 0 80px;
        .location_map {
            display: flex;
            align-items: center;
            .map_info {
                padding: 20px;
            }
            .main_button {
              color: black;
              background: transparent;
              max-width calc(100% - 50px);
              margin: 0 auto;
            }
            .main_button:hover {
                color: white;
                background: var(--darkpurple);
            }
        }
  `)}
    ${md(`
        padding: 100px 0 100px;
        .location_map {
            h4 {
                font-size: 30px;
                text-align: left;
            }
            p {
                max-width: 100%;
                font-size: 16px;
            }
            .map_info {
                width: 50%;
                padding: 30px 75px;
            }
            .map_block {
                width: 50%;
                max-width: 710px;
            }
            .main_button {
              max-width: 475px;
              margin: 0;
              
            }
        }
  `)}
    ${lg(`
        .location_map {
            .map_info {
                width: 50%;
                padding: 80px 95px;
            }
        }
  `)}
`;