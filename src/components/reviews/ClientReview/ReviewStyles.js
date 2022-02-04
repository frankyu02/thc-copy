import styled from 'styled-components';
import img from '../../../images/Group585.png';
import { __BREAKPOINTS } from "../../../styles/utils/variables";



export const ClientReviewStyle = styled.div`
    *{
        box-sizing: border-box;
    }
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
    overflow: visible;
    padding-left: 1vw;
    padding-bottom: 10vh;
    position: relative;
    background: white;
    .review-container{
        margin-right: 0px;
        margin-left: calc(calc(100vw - 1400px)/2);
        outline: 1px solid red;
    }
    .title{
        h2{
            font-family: "Neumatic Compressed Bold";
            font-size: 130px;
            font-weight: bolder;
            color: #612C8F;
        }
    }
    .subtitle{
        h3{
            font-family: "Integral CF Bold";
            font-size: 35px;
            font-weight: bolder;
            font-style: italic;
        }
    }
    @media(max-width: 992px){
        padding-top: 10%;
        padding-left: 2vw;
        padding-right: 2vw;
        border-right: 0px solid black;
        border-left: 0px solid black;
        .title{
            h2{
                font-size: max(60px, 15vw);
            }
        }
        .subtitle{
            h3{
                font-size: max(5vw, 20px);
                font-weight: bolder;
            }
        }
    }
`
export const Reviews = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    position: relative;
    padding-bottom: 1%;
    min-height: 330px;
    min-width: min(592px, 40vw);
    padding-left: 5%;
    padding-right: 5%;
    .stars{
        margin-top: 5%;
        .star{
            width: 17px;
            height: 16px;
            margin-left: 10px;
        }
    }
    .review{
        p{
            font-family: "MADE Outer Sans"
            font-size: 18px;
            color: black;
            font-weight: bold;
            text-align: center;
        }
    }
    .name{
        font-style: italic;
        margin-bottom: 5%;
        p{
            font-family: "Integral CF";
            font-size: 25px;
            font-weight: bold;
            color: #612C8F;
        }
    }
    .location{
        position: relative;
        bottom: 50px;
        p{
            font-family: "Integral CF";
            font-size: 14px;
            font-weight: lighter;
            color: #612C8F;
        }
    }
    @media(max-width: 1000px){
        height: 100%;
        min-height: 400px;
        width: 70vw;
        min-width: 246px;
        justify-content: center;
        align-items: center;
        .stars{
            .star{
                width: 5vw;
                height: auto;
            }
        }
        .review{
            width: 70%;
            p{
                font-size: max(12px, 3vw);
            }
        }
        .name{
            p{
                text-align: center;
                font-size: 4vw;
            }
        }
        .location{
            padding: 20px 0px;
        }
    }
`;
export const SwiperContainer = styled.div`
    position: relative;
    overflow: visible;
    .swiper-button-next{
        width: 2.5vw;
        height: 2.5vw;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: 100% auto;
        position: absolute;
        color: transparent;
        top: 5%;
        
    }
    .swiper-button-prev{
        position: absolute;
        width: 2.5vw;
        height: 2.5vw;
        top: 5%;
        left: 90%;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: 100% auto;
        transform: rotate(180deg);
        color: transparent;
    }
    .swiper-slide{
        padding-top: 100px;
    }
    @media (max-width: 992px){
        .swiper-slide{
            padding-top: 0;
            display: flex;
            justify-content: center;
        }
        .swiper-button-next{
            width: min(32px, 8.5vw);
            height: min(32px, 8.5vw);
            top: 0;
            top: 50%;
            right: 0;
        }
        .swiper-button-prev{
            width: min(32px, 8.5vw);
            height: min(32px, 8.5vw);
            top: 0;
            top: 50%;
            left: 0;
        }
    }
`;