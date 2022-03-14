import React, {useEffect, useState, useReducer, useContext} from 'react';
import styled from 'styled-components';

//Apollo
import { useQuery } from '@apollo/client';
import MenuCard from '../menu/menuCard/menuCard';

import Loader from '../menu/other/Loader';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import swiperCss from "!raw-loader!swiper/css"
import swiperNavCss from "!raw-loader!swiper/css/navigation"
import swiperPagCss from "!raw-loader!swiper/css/pagination"
SwiperCore.use([Pagination, Navigation]);

const Title = styled.h2`
`;

const Wrapper = styled.div`
    margin: 50px 20px;
    .swiper-button-next{
        height: 100%;
        top: 0;
        right: 0;
        width: 225px;
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
        color: var(--darkpurple);
    }
    .swiper-button-prev{
        height: 120%;
        top: 0;
        left: 0;
        width: 225px;
        display: flex;
        justify-content: flex-start;
        padding-left: 10px;
        color: var(--darkpurple);
    }
    .swiper-button-disabled{
        display: none;
    }
    .swiper-product-row{
        height: 100%;
        padding: 40px 10px;
        padding-bottom: 70px;
        padding-left: 5px;
        padding-right: 5px;
        margin-left: -5px;
        margin-bottom: 20px;
    }
    .swiper-pagination{
        margin-bottom: -10px;
    }
    .swiper-pagination-bullet-active{
        color: var(--darkpurple);
    }

    .swiper-pagination-bullet{
        color: var(--darkpurple);
        background-color: var(--darkpurple)
    }
    
    @media screen and (max-width: 900px) {
        width: 100%;
        margin-top: 0px;
        .swiper-pagination-bullet{
            display: none;
        }
        .swiper-button-prev{
            display: none;
        }
        .swiper-button-next{
            display: none;
        }

        .swiperCard{
            border: 1px solid black;
        }
    }
`;

const AnimationLoader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`


export default function FeaturedRow({title, QUERY, variables}){
    
    //Query 
    const {
        loading: loading, 
        error: error, 
        data: data, 
        refetch: refetch 
    } = useQuery(
            QUERY, 
            {variables: variables, fetchPolicy: "no-cache" }
        )

    return(
        <Wrapper>
        <style>{swiperCss} {swiperNavCss} {swiperPagCss}</style>
        <Title>{title}</Title>
        <Swiper 
                className="swiper-product-row" 
                spaceBetween={10} 
                slidesPerView={1.25}
                slidesPerGroup={1} 
                pagination={{
                    "clickable": true
                }} 
                navigation={true}
                breakpoints={{
                    "640": {
                        "slidesPerView": 2.5,
                        "spaceBetween": 15
                    },
                    "900": {
                        "slidesPerView": 4,
                        "spaceBetween": 15
                    }
                }} 
            >
            {
                (data && !loading) ?
                data.menu.products.map((product, i) => (
                    <SwiperSlide
                        key={i}
                        virtualIndex={i}
                        className="swiperCard"
                    >
                        <MenuCard product={product} mobileRowMode={true}/>
                    </SwiperSlide>
                ))
                :
                (
                    (loading) ?
                    <AnimationLoader>
                        <Loader />
                    </AnimationLoader>
                    :
                    <>error...FeaturedRow</>
                )
            }
        </Swiper>
        </Wrapper>
    )
}