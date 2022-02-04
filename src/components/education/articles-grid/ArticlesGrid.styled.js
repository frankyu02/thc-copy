import styled from 'styled-components';
import {sm, xs} from "../../../styles/utils/media_queries";

export const ArticlesGridStyles = styled.section`
  background: #612C8F;
  color: #fff;
  padding: 20px 0 70px;
  h3{
    font-family: Neumatic Compressed Bold;
    font-size: 70px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    line-height: 100%;
    margin-bottom: 15px;
  }
  .article-buttom{
    font-family: MADE Outer Sans Light;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
    
    svg{
      width: 16px;
      height: 16px;
      margin-left: 10px;
    }
  }
  .article-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .article-item{
    width: 100%;
    margin-bottom: 50px;
  }
  .article-img{
    margin-bottom: 20px;
    img{
      object-fit: cover;
      width: 100%;
      max-height: 300px;
    }
  }
  ${xs(`
    .article-img{
      img{
        max-height: 400px;
      }
    }
  `)}
  ${sm(`
  padding: 100px 0 40px;
    .article-item{
      width: 49%;
      margin-bottom: 60px;
    }
    .article-img{
      margin-bottom: 30px;
    }
  `)}
`;