import styled from 'styled-components';
import {md, sm, xs, xxs} from "../../../styles/utils/media_queries";

export const InfoBannerStyled = styled.section`
  .promo-item{
    border: 1px solid #000;
    margin-bottom: 80px;
    min-height: 200px;
  }
  .promo-context{
    padding: 30px;
    text-align: center;
  }
  ul{
    padding: 0;
    list-style: none;
  }
  li{
    font-family: Integral CF Bold;
    padding: 0 10px;
  }
  ul, h3{
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-style: italic;
  }
  h3{
    font-size: 30px;
    font-family: 'Integral CF';
  }
  .promo-info{
    background: #612C8F;
    color: #fff;
    font-family: 'Integral CF Bold';
    padding: 30px 20px 20px;
    .btn{
      text-align: center;
      background: #fff;
      color: #000;
      display: block;
      padding: 20px;
      font-size: 18px;
    }
  }
  .promo-price{
    display: flex;
    margin-bottom: 30px;
    h4{
      font-size: 20px;
      font-style: italic;
      line-height: 1;
      padding-left: 20px;
      max-width: 300px;
    }
    p{
      width: 50%;
      font-family: 'Integral CF';
      text-align: right;
      font-size: 40px;
      line-height: 1;
      margin: 0;
      font-style: italic;
      line-height: 80%;
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
    .promo-price{
      p{
        font-size: 60px;
      }
      h4{
        font-size: 30px;
      }
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
  h3{
    font-size: 45px;
  }
  .promo-item{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
    padding: 100px 0;
    h2{
      font-size: 60px;
      margin: 0 auto 70px;
    }
    .promo-context{
      width: 50%;
      text-align: left;
      padding-left: 60px;
      display: flex;
      align-items: center;
      ul{
        display: flex;
        flex-wrap: wrap;
      }
      li{
        width: 50%;
      }
    }
    .promo-info{
      width: 50%;
    }
  `)}
  ${md(`
    h3{
      font-size: 60px;
    }
    .promo-context{
      width: 60%;
      padding-left: 80px;
    }
    .promo-info{
      width: 40%;
      padding: 30px 20px 20px;
      .btn{
        margin: 0 30px;
      }
    }
    .promo-price{
      margin-bottom: 30px;
      h4{
        font-size: 30px;
        padding-left: 20px;
      }
      p{
        width: 50%;
        font-size: 70px;
      }
    }
  `)}
`;