import styled from "styled-components";

const DoublePageLinkStyles = styled.div`
    html, body {
        padding: 0;
        margin: 0;
    }
    * { 
        box-sizing: border-box; 
    }
    .box {
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
        border-top: 1px solid black;
    }
    @media (min-width: 100px) {
        .box {
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
        height: 100%;
        border: 1px solid white;
        display: flex;
        .gatsby-image-wrapper {
            position: relative;
            flex: 1;
            object-fit: cover;
            max-width: 100%;
            max-height: 100%;
            opacity: 0;
            transition: .4s;
        }
        &:hover {
            .gatsby-image-wrapper {
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
        display: grid;
        color: white;
        background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
        width: 100%;
        height: 100%;
        padding-bottom: 50px;
        .title {
            font-style: normal;
            font-weight: bold;
            font-size: 96px;
            margin-top: 150px;
            margin-left: 50px;
        }
        .link {
            font-family: MADE OUTER Sans Light;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            margin-left: 50px;
        }
    }
    @media (max-width: 1400px) {
        .content {
            .title {
                font-size: 80px;
            }
        }
    }
    @media (max-width: 1250px) {
        .wrapper {
            grid-template-columns: auto;
            grid-template-rows: 1fr 1fr;
        }
        .content {
            padding-bottom: 40px;
            .title {
                margin-top: 160px;
                margin-left: 40px;
            }
            .link {
                margin-left: 40px;
            }
        }
    }
    @media (max-width: 650px) {
        .content {
            .title {
                font-size: 70px;
            }
        }
    }
    @media (max-width: 570px) {
        .content {
            .title {
                margin-top: 120px;
            }
        }
    }
    @media (max-width: 500px) {
        .content {
            .title {
                margin-top: 100px;
            }
        }
    }
    @media (max-width: 450px) {
        .content {
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
            flex-direction: column;
            padding-top: 80px;
            .title {
                font-size: 60px;
                margin: 0;
                flex: 1;
                margin-left: 25px;
            }
            .link {
                margin: 0;
                flex: 1;
                margin-left: 25px;
            }
        }
    }
    @media (max-width: 375px) {
        .content {
            padding-top: 60px;
            .title {
                font-size: 50px;
            }
        }
    }
    @media (max-width: 325px) {
        .content {
            padding-top: 45px;
            .title {
                margin-left: 20px;
            }
            link {
                margin-left: 20px;
            }
        }
    }
    @media (max-width: 300px) {
        .content {
            padding-top: 40px;
            .title {
                font-size: 45px;
            }
        }
    }
`
export default DoublePageLinkStyles;








