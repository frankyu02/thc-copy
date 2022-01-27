import styled from 'styled-components';

export const MerchCarouselStyled = styled.section` 
    .merch_header {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding-top: 100px;
      padding-bottom: 40px;
    }
    .merch_parent {
      padding-top: 20px;
      padding-bottom: 80px;
      background: rgb(240,240,240);
    }
    .merch_cart_list {
      display: flex;
    }
  .merch_cart_list.mobile {
    display: none;
  }
    .to_shop {
      .main_button {
        display: none;
      }
    }
    .cart_image_wrapper {
      position: relative;
      margin-bottom: 10px;
      .main_button {
      position:absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: var(--darkpurple);
      color: white;
      transition: 0.5s;
      opacity: 0;
    }
      &:hover .main_button{
        opacity: 1;
      }
    }
    h2 {
      font-size: 130px;
      font-weight: 900;      
      color: #612C8F;
      text-transform: uppercase;
      letter-spacing: 0.01em;
      line-height: 88%;
      font-family: 'Neumatic Compressed Bold';
    }
    h3{
         font-size: 35px;
         font-weight: 700;
         font-family: Integral CF Bold;
         font-style: italic;
     } 
     h4 {
      font-family: 'Neumatic Compressed Bold';
      font-size: 42px;
      text-transform: uppercase;
     }
     strong {
      font-size: 17px;
      font-family: 'Integral CF';
     }
    @media (max-width: 1365px){
        h2{
            font-size: 100px;
        }
    }
    @media (max-width: 992px){
      h2{
         font-size: 80px;
      }
      h3{
         font-size: 20px;
      }
    }
    @media (max-width: 967px){
    .merch_header {
      padding-top: 40px;
      padding-bottom: 30px;
      h3 {
        margin-bottom: 0;
      }
      h2 {
      margin-bottom: 5px;
      }
    }
    
    .to_shop {
      .main_button {
        display: block;
      }
    }
    .merch_parent {
      padding-bottom: 30px;
    }
      .merch_cart_list {
        display: none;
      }
      .merch_cart_list.mobile {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .gatsby-image-wrapper {
          width: 100%;
          &>div {
            max-width: 100%!important;
          }
        }
        .card {
          width: 48%;
          margin-bottom: 50px;
        }
      }
    }
    @media (max-width: 768px){
    
      h2{
          font-size: 60px;
      }
      h3{
          font-size: 20px;
      }
      h4 {
        font-size: 34px;
      }
      strong {
        
      }
    }
    @media (max-width: 480px){ 
      h4 {
        font-size: 22px;
      }
      strong {
      font-size: 12px;
      }
    }
`;