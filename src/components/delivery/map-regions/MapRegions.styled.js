import styled from 'styled-components';
import {md, sm, xs, xxs} from "../../../styles/utils/media_queries";

export const MapRegionsStyled = styled.section`
  background: #F0F0F0;
  padding: 70px 15px 25px;
  h2{
    font-family: Neumatic Compressed Bold;
    font-size: 60px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #612C8F;
    line-height: 100%;
    margin-bottom: 15px;
  }
  h3{
    font-family: Integral CF Bold;
    font-style: italic;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    margin-bottom: 40px;
  }
  .map{
    background: #FFFFFF;
    border: 1px solid #000000;
  }
  .map-img{
    border-bottom: 1px solid #000000;
    .gatsby-image-wrapper-constrained{
      width: 100%;
      height: 100%;
    }
  }
  .map-content{
    text-align: center;
    padding: 25px 45px 0;
    p{
      font-size: 12px;
      margin-bottom: 40px;
    }
    .btn{
      display: block;
      background: #612C8F;
      color: #fff;
      padding: 20px;
      margin: 0 -45px;
      font-family: Integral CF Bold;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      font-size: 18px;
      text-align: center;
      transition: .3s;
    }
    .btn:hover{
      background: #612C8F;
      color: #fff;
    }
  }
  ul{
    list-style: none;
    padding: 0;
    font-style: italic;
    font-size: 14px;
    line-height: 90%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    margin-bottom: 45px;
    li{
      font-family: Integral CF ;
      margin-bottom: 10px;
    }
  }
  ${xxs(`
  h2{
    font-size: 80px;
  }
  .map-content{
    p{
      font-size: 14px;
    }
  }
  `)}
  ${xs(`
  h2{
    font-size: 100px;
    margin-bottom: 0;
  }
  h3{
    font-size: 25px;
  }
  .map-content{
    p{
      font-size: 16px;
    }
  }
  `)}
  ${sm(`
  border-top: 1px solid #000;
  padding: 60px 0 100px;
    .map{
      display: flex;
    }
    h3{
      font-size: 30px;
    }
    ul{
      font-size: 16px;
    }
    .map-img{
      width: 51%;
      border: 0;
      border-right: 1px solid #000;
    }
    .map-content{
      width: 49%;
      .btn{
        border: 1px solid #000;
        margin: 0;
        margin-bottom: 60px;
        background: #FFFFFF;
        color: #000;
      }
      p{
        margin-bottom: 60px;
      }
    }
  `)}
  ${md(`
  h2{
    font-size: 130px;
  }
  h3{
    font-size: 35px;
  }
  .map-content{
    padding: 60px 6%;
    text-align: left;
    .btn{
      margin-bottom: 0;
    }
  }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 50%;
        padding-right: 25px;
      }
    }
  `)}
`;