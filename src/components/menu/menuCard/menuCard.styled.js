import styled from "styled-components";

const MenuCardStyles = styled.div`
.card {
    .imgDiv {
        margin: 30px 30px 0px 30px;
        position: relative;
        .image {
            position: absolute;
            margin: 87px auto 62px auto;
            width: 228px;
            height: auto;
        }
        .brand {
            position: absolute;
            width: 65px;
            height: auto;
            left: 10px;
            top: 10px;
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
            .button {
                font-family: 'Integral CF';
                font-size: 18px;
                font-style: italic;
            }
        }
    }
    .detail {
        margin-top: 20px;
        color: #797979;
        font-family: "MADE OUTER Sans Light";
        font-size: 14px;
    }
    .title {
        margin-top: 20px;
        color: black;
        font-family: 'Neumatic Compressed Bold';
        font-size: 42px;
    }
    .price {
        margin-top: 16px;
        color: black;
        font-size: 17px;
        font-family: 'Integral CF';
    }
}
`

export default MenuCardStyles;