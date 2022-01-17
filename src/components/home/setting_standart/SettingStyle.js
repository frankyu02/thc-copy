import styled from 'styled-components';

export const SettingStyle = styled.section` 
    .link {
      border: 1px solid black;
      padding: 17px 15px;
      box-sizing: border-box;
      font-family: 'Integral CF Bold';
      background: white;
      color: black;
      width: 100%;
      max-width: 330px;
      display: block;
      text-align: center;
    }
    .setting_standart {
      display: flex;
      border: 1px solid black;
      .settings_image {
        width: 100%;
        max-width: 610px;
      }
      .setting_text {
        width: 100%;
        padding-left: 100px;
      }
    }
    @media (max-width: 767px) {
       .link {
        font-size: 18px;
       }
   }
`;