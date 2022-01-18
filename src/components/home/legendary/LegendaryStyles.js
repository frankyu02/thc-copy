import styled from 'styled-components';

export const LegendaryStyles = styled.section` 
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
  .main_legendary {
    display: flex;
    border: 1px solid black;
    margin-bottom: 20px;
    &>div {
    width: 50%;
    }
    .legendary_text {
      padding: 0 65px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-left: 1px solid black;
      {
        h2 {
          font-size: 64px;
          font-family: 'Integral CF Bold';
          font-style: italic;
          margin-bottom: 50px;
        }
        p {
          margin: 0 0 30px;
          font-size: 18px;
        }
        .read_more {
          color: #612C8F;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 40px;
        }
        .main_button{
          margin: 0;
        }
      }
    }
  }
  .legendary_parent {
    display: flex;
    justify-content: space-between;
    margin:  0 15px;
    &>div {
      width: 49.3%;
      .image_bg {
      height: 100%;
      width: 100%;
      }
    }
    .legendary_item {
      position: relative;
      overflow: hidden;
      .content_parent {
        position: absolute;
        left: 60px;
        bottom: 60px;
        color: white;
        z-index: 1;
        h3 {
          font-family: 'Neumatic Compressed Bold';
          font-size: 80px;
        }
        p {
          font-family: 'Integral CF';
          font-style: italic;
          max-width: 490px;
          margin: 0 0 20px;
          font-size: 28px;
        }
        .main_button {
          margin: 0;
        }
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
      }
    }
  }
  @media (max-width: 1365px) {
    .main_legendary {
      .legendary_text {
        padding: 30px;
        h2 {
          margin-bottom: 30px;
          font-size: 56px;
        }
        p {
          margin-bottom: 20px;
        }
        .read_more {
          margin-bottom: 20px;
        }
      }
      .legendary_baner {
      height: 100%;
      }
    }
    .legendary_parent {
      .legendary_item {
        .content_parent {
          left: 30px;
          bottom: 30px;
          h3 {
          font-size: 64px;
          }
          p {
            font-size: 20px;
            max-width: 350px;
          }
        }
      }
    }
   }
   @media (max-width: 967px) {
   .main_legendary {
    .legendary_text {
      h2 {
        font-size: 48px;
      }
    }
   }
    .legendary_parent {
      .legendary_item {
        .content_parent {
          left: 10px;
          bottom: 10px;
          p {
            font-size: 18px;
            max-width: 350px;
          }
        }
      }
    }
   }
   @media (max-width: 767px) {
   .link {
    font-size: 18px;
   }
    .main_legendary {
    flex-direction: column;
    .legendary_image {
    order: 2;
    }
    &>div {
      width: 100%;
    }
      .legendary_text {
      border-left: none;
        padding: 30px 10px;
        h2 {
          font-size: 32px;
        }
        p {
          margin-bottom: 30px;
          font-size: 16px;
        }
        .read_more {
          margin-bottom: 30px;
          font-size: 14px;
        }
      }
    }
    .legendary_parent {
    margin: 0;
      flex-direction: column;
      &>div {
        width: 100%;
        .image_bg {
          position: relative;
        }
      }
      .legendary_item {
      margin-bottom: 40px;
        .content_parent {
          width: 100%;
          left: 10px;
          bottom: 10px;
          h3 {
          font-size: 60px;
          max-width: 270px;
          }
          p {
            font-size: 14px;
            max-width: 350px;
          }
        }
        .main_button {
          max-width: calc(100% - 20px);
        }
      }
    }
   }
    @media (max-width: 480px) {
      .legendary_parent {
        .legendary_item {
          height: 400px;
        }
      }
      .main_button{
          max-width: 100%;
        }
    }
`;