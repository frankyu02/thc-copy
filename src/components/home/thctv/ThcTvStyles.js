import styled from 'styled-components';

export const ThcTvStyles = styled.section` 
  .thctv-block{
      background: #EBEBEB;
      padding: 103px 0 125px;
      .container{
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
  }
  .thc-tv-text{
      font-weight: 300;
      font-size: 16px;
      width: 40%;
      line-height: 20.11px;
      padding: 0 120px 0 100px;
      .btn{
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 19px 20px;
        box-sizing: border-box;
        max-width: 460px;
        background: white;
        border: 1px solid black;
        font-weight: 900;
        font-size: 18px;
        line-height: 18px;
        font-style: normal;
        margin-top: 59px;
        text-transform: uppercase;
        svg{
            display: block;
            margin-left: 14px;
        }
      }
  }
  .thc-tv-img{
      width: 50%;
  }
  h2{
      font-style: italic;
      font-weight: 900;
      font-size: 96px;
      margin-bottom: 60px;
      line-height: 96px;
  }
  .thc-tv-img-mob{
      display: none;
  }
  
  @media (max-width: 1200px){
    .thc-tv-text{
        padding: 0 50px 0 0;
        width: 50%
    }
    h2{
        font-size: 70px;
        margin-bottom: 30px
    }
  }
  @media (max-width: 767px){
    .thc-tv-text{
        font-size: 16px;
        line-height: 18px;
        width: 100%;
        padding: 0;
        .btn{
            margin-top: 0;
            max-width: 100%;
        }
    }
    .thc-tv-img{
        display: none;
    }
    .thc-tv-img-mob{
        display: block;
        width: 100%;
        margin: 32px auto 0;
        max-width: 375px;
    }
    h2{
        font-size: 60px;
    }
    .thctv-block{
        .container{
            flex-wrap: wrap;
        }
    }
  }
`;