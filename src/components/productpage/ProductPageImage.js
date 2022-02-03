import React from "react";
import Img from "react-cool-img";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";
import BrandLogoBanner from "../global_component/BrandLogoBanner/BrandLogoBanner";
const Wrapper = styled.div`
    border: 1px solid black;
    width: min(454px, 80%);
    height: 501px;
    position: relative;
    background-color: white;
    img{
        margin-top: 10%;
        width: 100%;
        height: auto;
    }
    .brandLogo{
        position: absolute;
        width: 99px;
        height: auto;
        top: 10px;
        left: 20px;
        p{
            font-size: 11px;
            font-weight: bold;
        }
    }
    @media (max-width: ${__BREAKPOINTS.md}px){
        width: 454px;
        height: 500px;
        .img{
            width: 454px;
            height: auto;
        }
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        width: auto;
        height: auto;
        margin: 10px;
    }
`;
export default function ProductPageImage({ imgurl, name, brand }){
    return(
        <Wrapper>
            <div className="brandLogo">
                <BrandLogoBanner brand={brand} />
            </div>
            <Img src={imgurl} alt={name} />
        </Wrapper>
    )
}