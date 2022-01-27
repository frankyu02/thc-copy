import styled from "styled-components";
import { sm } from "../../../../styles/utils/media_queries";

export const SubscribeFormStyles = styled.div`

  button[type=submit] {
    width: 100%;
    max-width: 100%;
    margin-top: 16px;

    ${sm(`
      margin-top: 30px;
    `)}
  }  

  form {
    
    ${sm(`
      max-width: 70%;
    `)}
  }

  h3 {
    margin-top: 50px!important;
    font-size: 24px;

    ${sm(`
      font-size: 32px;
    `)}
  }

  
  

`