import styled from 'styled-components';

export const ModalLegendaryStyles = styled.div` 
  display: none;
    .modal_content {
        display: flex;
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        top: 10%;
        align-items: center;
        background: white;
        justify-content: space-between;
        max-width: 1100px;
        border: 1px solid #000000;
        z-index: 201;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    &.active {
      display: block;
    }
    .overlay {
    position: fixed;
    z-index: 200;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0,0,0,0.7);
    left: 0;
    }
    .legendary-modal_image{
        width: 30%;
    }
    .legendary-modal_context{
        margin-right: 70px;
        font-size: 16px;
        width: 70%;
        max-width: 600px;
        box-sizing: border-box;
        .main_button{
            margin: 0;
        }
    }
    .legendary-modal_text{
        margin-bottom: 50px;
    }
`;