import styled from 'styled-components';
import {sm, xs, xxs} from "../../../styles/utils/media_queries";

export const TitleSubtextStyled = styled.section`
  text-align: center;
  padding: 50px 15px;
  h2{
    font-family: Integral CF Bold;
    font-size: 40px;
    font-style: italic;
    margin: 0 auto 45px;
  }
  .content{
    max-width: 970px;
    margin: 0 auto;
    font-size: 12px;
    a{
      text-transform: uppercase;
      font-weight: 900;
      text-decoration: underline;
    }
  }
  a:hover{
    text-decoration: none;
  }
  ${xxs(`
    padding: 60px 15px;
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