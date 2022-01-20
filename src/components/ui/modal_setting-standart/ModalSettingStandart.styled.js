import styled from 'styled-components';

export const ModalSettingSrandartStyles = styled.div` 
    display: none;
    &.active {
      display: block;
    }
    .modal_content {
        padding: 74px 97px 90px;
        display: flex;
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        top: 5%;
        height: 100%;
        max-height: 680px;
        align-items: center;
        background: white;
        justify-content: space-between;
        max-width: 1080px;
        width: 100%;
        border: 1px solid #000000;
        z-index: 201;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background: transparent;
      cursor: pointer;
    }
    .overlay {
    position: fixed;
    border: none;
    font-size: 0;
    z-index: 200;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0,0,0,0.7);
    left: 0;
    }
    
    .legendary-modal_image{
        position: absolute;
        transform: rotate(-18.04deg);
        bottom: -110px;
        width: 300px;
        right: 150px;
    }
    .legendary-modal_context{
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
        .legendary-modal_text {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          font-weight: 300;
          font-family: 'MADE OUTER Sans Light';
          max-height: 460px;
        }
        p {
          max-width: 400px;
          margin: 0 0 20px;
          font-size: 14px;
        }
        .main_button{
            margin: 0;
            bottom: 40px;
            position: absolute;
        }
    }
`;