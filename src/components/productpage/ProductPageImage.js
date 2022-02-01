import React from "react";
import Img from "react-cool-img";
import styled from "styled-components";
import BrandLogoBanner from "../global_component/BrandLogoBanner/BrandLogoBanner";
const Wrapper = styled.div`
    border: 1px solid black;
    width: min(454px, 70%);
    height: 501px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
    .brandLogo{
        position: absolute;
        width: 99px;
        height: 22px;
        top: 10px;
        left: 20px;
        p{
            font-size: 11px;
            font-weight: bold;
        }
    }
`;
export default function ProductPageImage({ imgurl, name, brand }){
    console.log(name);
    return(
        <Wrapper>
            <div className="brandLogo">
                <BrandLogoBanner brand={brand} />
            </div>
            <Img src={imgurl} alt={name} />
        </Wrapper>
    )
}