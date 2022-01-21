import styled from 'styled-components';
import img from '../../../images/Group585.png';
export const ClientReviewStyle = styled.div`
    *{
        box-sizing: border-box;
    }
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    overflow: visible;
    padding-left: 1vw;
    padding-bottom: 10vh;
    position: relative;
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
            font-family: "Integral CF Heavy";
            font-size: 35px;
            font-weight: bolder;
            font-style: italic;
        }
    }
    @media(max-width: 992px){
        padding-top: 10%;
        padding-left: 2vw;
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
        bottom: 30px;
        p{
            font-family: "Integral CF";
            font-size: 14px;
            font-weight: lighter;
            color: #612C8F;
        }
    }
    @media(max-width: 1000px){
        height: 70%;
        min-height: 400px;
        width: 70vw;
        min-width: 246px;
        .stars{
            margin-left: 20%;
            .star{
                width: 10%;
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
                font-size: max(14px, 5vw);
            }
        }
        .location{
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
        width: 32.14px;
        height: auto;
        top: 50%;
    }
    .swiper-button-prev{
        width: 32.14px;
        height: auto;
        top: 50%;
        left: 0;
    }
`;