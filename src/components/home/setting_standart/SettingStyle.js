import styled from 'styled-components';

export const SettingStyle = styled.section` 
    * {
      box-sizing: border-box;
    }
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
        padding-right: 20px;
        h3 {
          font-size: 50px;
          font-family: 'Integral CF Bold';
          font-style: italic;
          max-width: 580px;
          margin-bottom: 30px;
        }
        .read_more {
          color: #612C8F;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 40px;
          text-align: left;
          font-size: 18px;
          padding: 0;
          font-family: 'MADE OUTER Sans Light';
          border: none;
          background: transparent;
        }
        p {
          max-width: 620px;
          font-size: 18px;
          margin: 0 0 30px;
        }
        .main_button {
          margin: 0;
        }
      }
    }
     @media (max-width: 1365px) {
       .setting_standart {
       .settings_image {
          .gatsby-image-wrapper {
            height: 100%;
          }
       }
        .setting_text {
           padding: 30px;
           h3 {
            font-size: 46px;
           }
        }
       }
   }
   @media (max-width: 967px) {
       .setting_standart {
        .setting_text {
        padding: 30px 10px;
           h3 {
            font-size: 32px;
           }
           p {
            font-size: 16px;
            margin-bottom: 20px;
           }
           .read_more {
               font-size: 18px;
               margin-bottom: 20px;
           }
        }
       }
   }
    @media (max-width: 767px) {
      .read_more{
        display: none;
      }
        .setting_standart {
          flex-direction: column;
          .settings_image {
            order: 2;
            max-width: 100%;
            .gatsby-image-wrapper {
            width: 100%;
            }
          }
          .setting_text {
              .main_button {
                max-width: 100%;
              }
          }
        }
       .link {
        font-size: 18px;
       }
   }
`;