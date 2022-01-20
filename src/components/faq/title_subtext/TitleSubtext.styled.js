import styled from 'styled-components';
import {sm, xxs} from "../../../styles/utils/media_queries";

export const TitleSubtextStyled = styled.section`
  background: #EBEBEB;
  text-align: center;
  padding: 30px 0 40px;
  h2{
    font-family: Integral CF Bold;
    font-size: 30px;
    font-style: italic;
    max-width: 700px;
    margin: 0 auto 25px;
  }
  .content{
    max-width: 700px;
    margin: 0 auto;
    font-size: 12px;
  }
  ${xxs(`
    padding: 60px 0 70px;
    h2{
        font-size: 45px;
        margin: 0 auto 45px;
    }
    .content{
      font-size: 14px;
     }
  `)}
  ${sm(`
    padding: 100px 0 130px;
    h2{
        font-size: 60px;
        margin: 0 auto 45px;
    }
    .content{
      font-size: 16px;
     }
  `)}
`;