import styled from "styled-components"
import { lg } from "../../../styles/utils/media_queries"

export const ModalLegendaryStyles = styled.div`
  display: none;

  .modal_content {
    display: flex;
    position: fixed;
    left: 50%;
    padding: 100px 0;
    transform: translate(-50%, -50%);
    ${lg(`
    margin-top:90px;
    `)}
    top: 50%;
    align-items: center;
    background: white;
    justify-content: space-between;
    max-width: 1080px;
    max-height: 90vh;
    width: 100%;
    border: 1px solid #000000;
    z-index: 201;

  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 0;
    cursor: pointer;
    border: none;
    background: transparent;
  }

  &.active {
    display: block;
  }

  .overlay {
    position: fixed;
    border: none;
    z-index: 200;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    left: 0;
  }

  .legendary-modal_image {
    position: relative;

    .top_baner {
      position: absolute;
      bottom: -20px;
      width: 343px;
      left: -65px;
      transform: rotate(6.48deg);
    }

    .bottom_baner {
      position: absolute;
      top: -30px;
      left: 0;
      width: 306px;
      transform: rotate(-10.79deg);
    }
  }

  .legendary-modal_context {
    margin-right: 70px;
    font-size: 16px;
    width: 70%;
    max-width: 600px;
    box-sizing: border-box;
    max-height: 80vh;
    overflow: auto;

    .main_button {
      margin: 0;
    }
  }

  .legendary-modal_text {
    margin-bottom: 50px;
  }

  @media (max-width: 1200px) {
    .modal_content {

      padding: 50px 10px;
    }

    .legendary-modal_image {
      display: none;
    }

    .legendary-modal_context {
      margin: 0 auto;
    }
  }
  @media (max-width: 764px) {
    .modal_content {
      align-items: baseline;
      padding: 80px 20px 50px;
      overflow: auto;

      .main_button {
        color: white;
        background: var(--darkpurple);
      }
    }
  }
  @media (max-width: 640px) {
    .modal_content {
      .legendary-modal_context {
        width: 100%;
        max-width: 100%;

        .legendary-modal_text {
          margin-bottom: 40px;
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .modal_content {
      .legendary-modal_context {
        .legendary-modal_text {
          font-size: 12px;
          margin: 0 20px 40px;
        }
      }
    }
  }
`