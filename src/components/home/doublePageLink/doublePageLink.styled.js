import styled from "styled-components";

const DoublePageLinkStyles = styled.div`
    html, body {
        padding: 0;
        margin: 0;
    }
    * { 
        box-sizing: border-box; 
    }
    .container {
        background: #612C8F;
        max-width: 100%;
        max-height: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 100px;
        padding-top: 100px;
    }
    @media (min-width: 100px) {
        .container {
            width: 100%;
            height: 100%;
        }
    }
    .wrapper {
        flex: 1;
        width: 100%;
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        grid-gap: 20px;
    }
    .location, .question {
        position: relative;
        width: 100%;
        border: 1px solid white;
        display: flex;
        max-height: 385px;
        .image {
            position: relative;
            flex: 1;
            object-fit: cover;
            max-width: 100%;
            max-height: 100%;
            opacity: 0;
            transition: .4s;
        }
        &:hover {
            
            .image {
                opacity: 1;
                transition: .4s;
            }
        }
    }
    h3 {
        font-family: Neumatic Compressed Bold;
    }
    .content {
        position: absolute;
        color: white;
        padding-bottom: 52px;
        z-index: 50;
        background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
        background: rgba(25, 100, 45, 0.6);
        width: 100%;
        height: 100%;
        outline: 2px solid red;
        .title {
            font-style: normal;
            font-weight: bold;
            font-size: 96px;
            margin-top: 180px;
            margin-left: 50px;
        }
        .link {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            margin-left: 50px;
        }
    }
    .icon {
        font-size: 22px;
    }
    @media (max-width: 1500px) {
        .content {
            .title {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 70px;
            }
        }
    }
    @media (max-width: 1200px) {
        .wrapper {
            grid-template-columns: auto;
            grid-template-rows: 1fr 1fr;
        }
        
    }
    @media (max-width: 850px) {
    }
`
export default DoublePageLinkStyles;








