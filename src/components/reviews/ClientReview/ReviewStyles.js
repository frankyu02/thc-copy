import styled from 'styled-components';
import img from '../../../images/Group585.png';
import { __BREAKPOINTS } from "../../../styles/utils/variables";
import { AiFillStar } from "react-icons/ai";


export const ClientReviewStyle = styled.div`
    border-top: 1px solid black;
    overflow: hidden;
    padding-bottom: 10vh;
    position: relative;
    background: white;
    .reviewContainer{
        margin-right: 0;
        margin-left: max(50px, calc(calc(100vw - 1350px) / 2));
        @media(max-width: 1000px){
            margin: 0;
        }
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
    @media(max-width: 1000px){
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
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    position: relative;
    padding-bottom: 1%;
    padding-left: 5%;
    padding-right: 5%;
    .stars{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        align-items: space-between;
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
        max-width: 70vw;
        justify-content: center;
        align-items: center;
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
export const Star = styled(AiFillStar)`
    color: #612C8F;
    font-size: 17px;
    margin-left: 10px;
`;
export const SwiperContainer = styled.div`
    position: relative;
    .swiper-button-next{
        width: 3vw;
        height: 3vw;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: 100% auto;
        position: absolute;
        color: transparent;
        top: 5%;
        right: max(60px, calc(calc(100vw - 1350px) / 2));
    }
    .swiper-button-prev{
        position: absolute;
        width: 3vw;
        height: 3vw;
        top: 5%;
        left: min(calc(93% - 70px), calc(93% - calc(calc(100vw - 1300px)/2)));
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: 100% auto;
        transform: rotate(180deg);
        color: transparent;
    }
    .swiper-slide{
        padding-top: 100px;
    }
    @media (max-width: 1000px){
        .swiper-slide{
            padding-top: 0;
            display: flex;
            justify-content: center;
        }
        .swiper-button-next{
            width: 8.5vw;
            height: 8.5vw;
            top: 0;
            top: 50%;
            right: 0;
        }
        .swiper-button-prev{
            width: 8.5vw;
            height: 8.5vw;
            top: 0;
            top: 50%;
            left: 0;
        }
    }
`;