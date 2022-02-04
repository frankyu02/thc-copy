import styled from "styled-components"


export const HeroStyled = styled.section`
  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;

    h1 {
      margin: 0;
      line-height: 1;
      font-size: 160px;
      overflow: hidden;

    }

    .address_parent {
      margin-top: 40px;
    }

    .street {
      margin-top: 0;
      font-size: 16px;
      font-weight: 700;
      font-family: var(--fontPrimaryBold);
      font-family: "Integral CF";
      max-width: 180px;
    }

    .street:first-child {
      margin-bottom: 30px;
    }
  }


  .inner {
    padding: 10px;
    width: 100%;
    min-height: 580px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .video{
      height: 100%;
      width: 100%;
      position: absolute;
      padding-top: 56.25%;
      video{
        object-fit: cover;
      }
    }
    .caption {
      position: relative;
      z-index: 1;
      font-weight: 400;

      .title {
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
      pointer-events: none;
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .mark {
      position: absolute;
      bottom: 130px;
      right: 30px;
    }
  }

  @media (max-width: 1380px) {
    .header {

      h1 {
        font-size: 110px;
      }

      .street {
        font-size: 14px;
      }

      .address_parent {
        margin-top: 20px;
      }

      .street:first-child {
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
   /* @media (max-width: 975px) {
     .inner{
      max-height: 400px;
     }
   } */
   @media (max-width: 1024px) {
    .header {
      margin-bottom: 20px;


      h1 {
        font-size: 70px;
      }
    }

    .inner {
      .mark {
        width: 100px;
      }

      .caption {
        .title {
          font-size: 40px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .header {

      flex-direction: column-reverse;

      h1 {
        font-size: 13.7vw;
      }

      .address_parent {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .street {
          max-width: 46%;
          font-size: 16px;
        }
      }
    }

    .inner {
      .mark {
        width: 75px;
        right: 10px;
      }

      .caption {
        .title {
          font-size: 36px;
        }
      }
    }
  }
  @media (max-width: 767px) {

    .inner {
      .caption {
        .title {
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
        .street {
          font-size: 13px;
          margin-bottom: 0;
        }
      }
    }
  }
`
