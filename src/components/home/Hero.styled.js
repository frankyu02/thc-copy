import styled from 'styled-components';


export const HeroStyled = styled.section` 
  .header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 40px;

    h1 {
      margin: 0;
      line-height: 1;
      font-size: 160px;
    }
    h4 {
      font-size: 16px;
      max-width: 180px;
    }
    h4:first-child {
      margin-bottom: 30px;
    }
  }
  .inner {
    width: 100%;
    min-height: 580px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .caption {
        position: relative;
        z-index: 1;
        font-style: italic;
        h3 {
          font-size: 48px;
          color: white;
          text-align: center;
          max-width: 850px;
          padding: 0 15px;
          box-sizing: border-box;
          margin-bottom: 70px;
        }
        
    }
    .background {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
    }
    .mark {
      position: absolute;
      bottom: 130px;
      right: 30px;
    }
  }
@media (max-width: 1380px) {
    .header {
    padding: 0 15px;
      h1 {
        font-size: 110px;
      }
      h4 {
        font-size: 14px;
      }
      .address_parent {
        margin-top: 20px;
      }
      h4:first-child {
        margin-bottom: 10px;
      }
    }
    .inner {
        min-height: 530px;
        .mark {
          bottom: 70px;
        }
      }
   }
   @media (max-width: 1200px) {
    .header {
      h1 {
        font-size: 92px;
      }
    }
   }
   @media (max-width: 1024px) {
    .header {
      margin-bottom: 20px;
      align-items: center;
      h1 {
        font-size: 70px;
      }
    }
    .inner {
       .mark {
         width: 100px;
       }
      .caption {
        h3 {
          font-size: 40px;
        }
      }
    }
   }
   @media (max-width: 767px) {
    .header {
    padding: 0;
      flex-direction: column-reverse;
      h1 {
        font-size: 13.7vw;
      }
      .address_parent {
        width: 100%;
        display: flex;
        justify-content: space-between;
        h4 {
          max-width: 46%;
          font-size: 16px;
        }
      }
    }
    .inner {
      .mark {
        width: 75px;
        bottom: 20px;
        right: 10px;
      }
      .caption {
        h3 {
          font-size: 36px;
        }
      }
    }
   }
   @media (max-width: 767px) {
    .header {
      padding: 0px 10px;
    }
    .inner {
      .caption {
        h3 {
          font-size: 30px;
        }
      }
    }
   }
   @media (max-width: 560px) {
      .header {
      h1 {
        font-size: 13.2vw;
      }
      .address_parent {
        h4 {
          font-size: 13px;
          margin-bottom: 0;
        }
      }
    }
   }
`;
