import styled from "styled-components";

const ReviewGridStyles = styled.div`
    html, body {
        padding: 0;
        margin: 0;
    }

    * { 
        box-sizing: border-box; 
    }

    .container {
        background: #F0F0F0;
        max-width: 100%;
        max-height: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
    }

    @media (min-width: 100px) {
        .container {
            width: 100%;
            height: 100%;
        }
    }

    .header {
        text-align: center;
        font-family: Neumatic Compressed Bold;
        font-style: normal;
        font-weight: 900;
        font-size: 130px;
        letter-spacing: 0.01em;
        color: #612C8F;
        margin-top: 100px;
        margin-bottom: 100px; 
    }

    .grid {
        flex: 1;
        width: 100%;
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        grid-gap: 20px;
    }

    .cell {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border: 1px solid #000000;
        background: white;
        padding-top: 110px;
        padding-bottom: 110px;
        position: relative;
        transition: 0.3s;
    }
    .logoBox {
      transition: 0.3s;
    }
    .cell:hover {
      box-shadow: 0px 0px 20px rgba(97, 44, 143, 0.3);
      .logoBox {
        position: relative;
        top: -5px;
      }
    }

    @media (max-width: 1100px) {
        .cell {
            padding-top: 85px;
            padding-bottom: 85px;
        }
    }

    @media (max-width: 950px) {
        .header {
            margin-top: 75px;
            margin-bottom: 75px;
        }
    }

    @media (max-width: 750px) {
        .container {
            padding-top: 20px;
        }
        .header {
            display: none;
        }
        .grid {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .cell {
            flex: 1;
            flex-wrap: nowrap;
            padding-top: 60px;
            padding-bottom: 60px;
        }
    }
`

export default ReviewGridStyles;