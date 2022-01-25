import styled from 'styled-components';
import {sm, xs, xxs} from "../../../styles/utils/media_queries";

export const InfoBannerStyled = styled.section`
  .promo-item{
    border: 1px solid #000;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .promo-context{
    width: 60%;
  }
  ul{
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    // font-size: 24px;
  }
  li{
    width: 50%;
    font-family: Integral CF Bold;
  }
  ul, h3{
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-style: italic;
  }
  h3{
    font-size: 60px;
    font-family: 'Integral CF';
  }
  .promo-info{
    background: #612C8F;
    color: #fff;
    width: 40%;
  }
  .promo-price{
    display: flex;
    p{
      width: 50%;
    }
  }
  ${xxs(`
    padding: 60px 0;
    h2{
      font-size: 45px;
      margin: 0 auto 45px;
    }
    .content{
      font-size: 16px;
    }
  `)}
  ${xs(`
    .content{
      font-size: 18px;
    }
    h2{
      font-size: 50px;
    }
  `)}
  ${sm(`
    padding: 100px 0;
    h2{
      font-size: 60px;
      margin: 0 auto 70px;
    }
  `)}
`;