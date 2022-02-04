import styled from "styled-components";

const MenuCardStyles = styled.div`
* {
    margin: 0;
    padding: 0;
}

.card {
    .imgDiv {
        display: flex;
        margin: 30px 30px 0px 30px;
        position: relative;
        height: 360px;
        width: auto;
        justify-content: center;
        background: white;
        .image {
            position: absolute;
            margin-top: 80px;
            margin-bottom: 62px;
            width: auto;
            height: auto;
            .realImage {
                width: 250px;
                height: 100%;
            }
        }
        .brand {
            position: absolute;
            width: 100px;
            height: auto;
            left: 12px;
            top: 12px;
        }
        .strain {
            position: absolute;
            width: 80px;
            height: 24px;
            right: 16px;
            top: 16px;
        }
        .cartBanner {
            position: absolute;
            background: #612C8F;
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            bottom: 0px;
            width: 100%;
            height: 15%;
            button {
                background: #612C8F;
                border: none;
                .buttonText {
                    font-family: 'Integral CF';
                    font-size: 18px;
                    font-style: italic;
                    color: white;
                }
            }
        }
    }
    .detail {
        margin-top: 20px;
        margin-left: 30px;
        p {
            color: #797979;
            font-family: "MADE OUTER Sans Light";
            font-size: 14px;
        }
    }
    .title {
        margin-top: 10px;
        margin-left: 30px;
        h4 {
            color: black;
            font-family: 'Neumatic Compressed Bold';
            font-size: 42px;
        }
    }
    .price {
        margin-top: 12px;
        margin-left: 30px;
        display: flex;
        flex-wrap: nowrap;
        h5 {
            color: black;
            font-size: 17px;
            font-family: 'Integral CF';
        }
        .slash{
            color: #612C8F;
        }
    }
}
`

export default MenuCardStyles;