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
      display: flex;
      flex-direction: column;
      justify-content: center;
        width: 100%;
        padding-left: 100px;
        h3 {
          font-size: 50px;
          font-family: 'Integral CF Bold';
          font-style: italic;
          max-width: 580px;
          margin-bottom: 30px;
        }
        .read_more {
          color: #612C8F;
          cursor: pointer;
           font-family: 'MADE OUTER Sans Light';
           margin-bottom: 30px;
        }
        p {
          max-width: 620px;
          font-size: 18px;
          margin: 0 0 30px;
        }
      }
    }
    @media (max-width: 767px) {
       .link {
        font-size: 18px;
       }
   }
`;