import styled from "styled-components";

const MenuCardStyles = styled.div`
* {
    margin: 0;
    padding: 0;
}

.card {
    .imgDiv {
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        margin: 30px 30px 0px 30px;
        position: relative;
        height: 360px;
        width: auto;
        background: white;
        border: 1px solid black;
        .image {
            position: absolute;
            top: 85px;
            width: auto;
            height: auto;
            .realImage {
                max-width: 100%;
                height: auto;
                max-height: 265px;
                width: auto;
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
            transition: opacity 0.5s, height 0.5s;
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
            font-family: 'Integral CF';
            font-size: 24px;
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
        .originalPrice {
            text-decoration: line-through;
            text-decoration-thickness: 2px;
        }
    }
    .cartBannerBottom {
        display: none;
    }
    .Toastify__progress-bar {
    background: var(--darkpurple);
    }
    .Toastify__toast-body{
        color: black;
        text-align: center;
        font-family: "MADE Outer Sans Light";
    }
}

@media (max-width: 900px) {
    .card {
        height : ${(props) => (props.mobileRowMode ? "625px" : "auto")};
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

            position: ${(props) => (props.mobileRowMode ? "absolute" : "static")};
            width: ${(props) => (props.mobileRowMode ? "100%" : "auto")};
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