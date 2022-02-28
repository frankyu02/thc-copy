import styled from "styled-components";

const UnderLayerStyles = styled.div`
    position: static;
    background: #F0F0F0;
    z-index: -10;
    width: 100%;
    height: auto;
`

const SocialGridStyles = styled.div`
    html, body {
        padding: 0;
        margin: 0;
    }
    * { 
        box-sizing: border-box; 
    }
    .box {
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
    }
    @media (min-width: 10px) {
        .box {
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
        position: relative;
        display: flex;
        width: 100%;
        border: 1px solid #000000;
        background: white;
        justify-content: center;
        .filler {
            position: absolute;
            width: 100%;
            height: 100%;
            transition: .4s;
            z-index: 1;
        }
        .backgroundImage {
            flex: 1;
            object-fit: cover;
            max-width: 100%;
            max-height: 100%;
            opacity: 0;
            transition: .4s;
        }
        .logoOriginal {
            position: absolute;
            align-self: center;
            opacity: 1;
            transition: .4s;
            z-index: 2;
        }
        .logoWhite {
            position: absolute;
            align-self: center;
            opacity: 0;
            transition: .4s;
            z-index: 2;
        }
        .textBox {
            position: absolute;
            align-self: flex-end;
            width: 100%;
            z-index: 2;
            .logoText {
                color: white;
                font-family: Integral CF;
                font-size: 20px;
                opacity: 0;
                transition: .4s;
                margin: 0;
                margin-bottom: 10px;
                margin-left: 10px;
            }
        }
        &:hover {
            .filler {
                background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
                transition: .4s;
            }
            .backgroundImage {
                opacity: 1;
                transition: .4s;
            }
            .logoOriginal {
                opacity: 0;
                transition: .4s;
            }
            .logoWhite {
                opacity: 1;
                transition: .4s;
            }
            .textBox {
                .logoText {
                    opacity: 1;
                    transition: .4s;
                }
            }
        }
    }
    @media (max-width: 950px) {
        .header {
            margin-top: 70px;
            margin-bottom: 70px;
            font-size: 110px;
        }
        .cell {
            .logoOriginal {
                width: 90px;
                height: auto;
            }
            .logoWhite {
                width: 90px;
                height: auto;
            }
        }
    }
    @media (max-width: 750px) {
        .box {
            padding-left: 15px;
            padding-right: 15px;
            padding-bottom: 80px;
        }
        .header {
            font-size: 95px;
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
            .filler {
                background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
                opacity: 1;
            }
            .backgroundImage {
                opacity: 1;
            }
            .logoOriginal {
                display: none;
            }
            .logoWhite {
                opacity: 1;
            }
            .textBox {
                .logoText {
                    opacity: 1;
                }
            }
        }
    }
    @media (max-width: 550px) {
        .box {
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 60px;
        }
        .header {
            margin-top: 50px;
            margin-bottom: 50px;
            font-size: 70px;
        }
        .cell {
            .logoOriginal {
                width: 75px;
                height: auto;
            }
            .logoWhite {
                width: 75px;
                height: auto;
            }
        }
    }
    @media (max-width: 350px) {
        .header {
            margin-top: 40px;
            margin-bottom: 40px;
            font-size: 60px;
        }
        .cell {
            .logoOriginal {
                width: 65px;
                height: auto;
            }
            .logoWhite {
                width: 65px;
                height: auto;
            }
            .textBox {
                .logoText {
                    font-size: 12px;
                }
            }
        }
    }
`

export { SocialGridStyles, UnderLayerStyles } ;