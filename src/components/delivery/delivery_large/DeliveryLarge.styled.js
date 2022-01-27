import styled from 'styled-components';
import {md, sm, xs, xxs} from "../../../styles/utils/media_queries";

export const DeliveryLargeStyled = styled.section`
  .container {
    position: relative;
  }
  .delivery_bg {
    margin-bottom: 20px;
    width: 100%;
  }
  .main_button {
    max-width: 100%;
  }
  ${sm(`
        .delivery_large {
          min-height: 510px;
          position: relative;
          .delivery_bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            
          }
        }
        .main_button {
          position: absolute;
          bottom: 60px;
          max-width: 330px;
          left: 160px;
        }
    `)}
`;