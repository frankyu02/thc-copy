import React from "react";
import Img from "react-cool-img";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";
import BrandLogoBanner from "../global_component/BrandLogoBanner/BrandLogoBanner";
const Wrapper = styled.div`
    outline: 1px solid black;
    max-width: 454px;
    min-width: 454px;
    height: 501px;
    position: relative;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-width: 100%;
        max-height: 100%;
    }
    .brandLogo{
        position: absolute;
        width: 100px;
        min-height: 100px;
        height: auto;
        z-index: 10;
        top: 10px;
        left: 20px;
        z-index: 5;
        p{
            font-size: 11px;
            font-weight: bold;
        }
    }
    @media (max-width: ${__BREAKPOINTS.md}px){
        min-width: 400px;
        max-width: 400px;
        height: 450px;
        .img{
            max-height: 450px;
            max-width: 454px;
            height: auto;
            width: auto;
        }
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        img{
            position: static;
        }
        min-width: 0;
        max-width: none;
        width: auto;
        height: auto;
        margin: 10px;
    }
`;
export default function ProductPageImage({ imgurl, name, brand }){
    
    return(
        <Wrapper>
            {brand &&
            <div className="brandLogo">
                <BrandLogoBanner brand={brand} />
            </div>}
            <Img src={imgurl} alt={name} />
        </Wrapper>
    )
}