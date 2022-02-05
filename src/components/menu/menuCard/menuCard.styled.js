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
        border: 1px solid black;
        .image {
            position: absolute;
            top: 90px;
            bottom: 60px;
            width: auto;
            height: auto;
            .realImage {
                width: 228px;
                height: auto;
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
            width: 100%;
            bottom: 0px;
            font-family: 'Integral CF';
            font-size: 18px;
            font-style: italic;
            color: white;  
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
        margin-right: 100px;
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
            font-family: 'Integral CF Bold';
        }
    }
    .cartBannerBottom {
        display: none;
    }
}

@media (max-width: 900px) {
    .card {
        .imgDiv {
            margin: 20px 20px 0px 20px;
        }
        .title {
            margin-right: 60px;
        }
    }
}

@media (max-width: 780px) {
    .card {
        .imgDiv {
            margin: 0;
            border: none;
            border-bottom: 1px solid black;
            .cartBanner {
                display: none;
            }
        }
        .cartBannerBottom {
            display: flex;
            background: #612C8F;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            bottom: 0px;
            height: 60px;
            margin-top: 25px;
            font-family: 'Integral CF';
            font-size: 18px;
            font-style: italic;
            color: white;
        }
    }
}

@media (max-width: 500px) {
    .card {
        .detail {
            margin-left: 20px;
        }
        .title {
            margin-left: 20px;
        }
        .price {
            margin-left: 20px;
        }
        .cartBannerBottom {
            margin-top: 25px;
        }
    }
}

@media (max-width: 350px) {
    .card {
        .title {
            margin-right: 20px;
        }
    }
}
`

export default MenuCardStyles;