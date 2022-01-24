import styled from 'styled-components';
import {sm, xs} from "../../../styles/utils/media_queries";

export const ArticlesGridStyles = styled.section`
  padding: 20px 0 70px;
  h3{
    width: 100%;
    font-family: Neumatic Compressed Bold;
    font-size: 40px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    line-height: 100%;
    margin-bottom: 15px;
  }
  .wrapper{
    display: flex;
    justify-content: space-between;
  }
  time{
    font-family: Neumatic Compressed Bold;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-size: 30px;
    width: 60%;
  }
  .article-buttom{
    color: #612C8F;
    font-family: Neumatic Compressed Bold;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-size: 30px;
    min-width: 100px;
    svg{
      width: 18px;
      height: 18px;
      margin-left: 10px;
    }
  }
  .article-wrap{
    display: flex;
    flex-wrap: wrap;
  }
  .article-item{
    border: 1px solid #000000;
    width: 100%;
    margin-bottom: 50px;
  }
  .content-wrap{
    border-top: 1px solid #000;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 30px 15px;
  }
  p{
    border-top: 1px solid #000;
    padding: 30px 15px 24px;
    margin: 0;
  }
  .article-img{
    font-size: 0;
    img{
      object-fit: cover;
      width: 100%;
      max-height: 300px;
    }
  }
  ${xs(`
    h3{
      font-size: 55px;
      margin-bottom: 20px;
    }
    .article-img{
      img{
        max-height: 400px;
      }
    }
  `)}
  ${sm(`
  padding: 100px 0 40px;
    h3{
      font-size: 70px;
      margin-bottom: 20px;
    }
    .article-item{
      width: 49%;
      margin-bottom: 60px;
    }
    .article-buttom{
      order: 1;
      position: relative;
    }
  `)}
`;