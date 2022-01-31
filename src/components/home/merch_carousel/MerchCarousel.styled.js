import styled from 'styled-components';
import {xxs, xs, sm, lg, md} from '../../../styles/utils/media_queries'
export const MerchCarouselStyled = styled.section` 
    .merch_header {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding-top: 40px;
      padding-bottom: 30px;
      ${sm(`
            padding-top: 100px;
      `)}
    }
    .merch_parent {
      padding-top: 20px;
      padding-bottom: 30px;
      background: rgb(240,240,240);
      ${sm(`
            padding-bottom: 80px;
      `)}
    }
    .merch_cart_list {
      display: none;
      ${sm(`
            display: flex;
      `)}
    }
  .merch_cart_list.mobile {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${sm(`
            display: none;
      `)}
    .card {
          width: 48%;
          margin-bottom: 50px;
        }
  }
    .to_shop {
      .main_button {
        display: block;
        ${sm(`
            display: none;
      `)}
      }
    }
    .cart_image_wrapper {
      border: 1px solid black;
      overflow: hidden;
      position: relative;
      margin-bottom: 10px;
       height: 225px;
       ${xxs(`
            height: 310px;
      `)}
       ${xs(`
            height: 350px;
      `)}
       ${lg(`
            height: 370px;
      `)}
      .main_button {
      position:absolute;
      border-bottom: none;
      bottom: 0;
      left: 0;
      width: 100%;
      max-width: 100%;
      background: var(--darkpurple);
      color: white;
      transition: 0.5s;
      opacity: 0;
    }
    .cart_img, .cart_img_hover {
      height: 100%;
    }
    .cart_img_hover {
      display: none;
    }
      &:hover .main_button{
        opacity: 1;
      }
      &:hover .cart_img{
        display: none;
      }
      &:hover .cart_img_hover{
        display: block;
      }
    }
    h2 {
      font-size: 60px;
      font-weight: 900;      
      color: #612C8F;
      text-transform: uppercase;
      letter-spacing: 0.01em;
      line-height: 88%;
      font-family: 'Neumatic Compressed Bold';
      ${sm(`
            font-size: 80px;
      `)}
      ${sm(`
            font-size: 100px;
      `)}
    }
    h3{
         font-size: 20px;
         font-weight: 700;
         font-family: Integral CF Bold;
         font-style: italic;
         ${sm(`
            font-size: 20px;
      `)}
          ${md(`
            font-size: 24px;
      `)}
     } 
     h4 {
      font-family: 'Neumatic Compressed Bold';
      font-size: 22px;
      text-transform: uppercase;
      ${xxs(`
            font-size: 30px;
      `)}
      ${xs(`
            font-size: 34px;
      `)}
      ${md(`
            font-size: 42px;
      `)}
     }
     strong {
      font-size: 12px;
      font-family: 'Integral CF';
      ${xxs(`
            font-size: 14px;
      `)}
      ${md(`
            font-size: 17px;
      `)}
     }
`;