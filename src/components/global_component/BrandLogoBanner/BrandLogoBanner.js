import React from "react";
import Img from "react-cool-img";
import styled from "styled-components";
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    img{
        height: 100%;
        width: auto;
    }
`;
export default function BrandLogoBanner({ brand }){
    console.log(brand);
    return(
        <>
            {brand.image ? 
                <Wrapper>
                    <Img src={brand.image} alt={brand.name} />
                </Wrapper>
            :
                <Wrapper>
                    <p>{brand.name}</p>
                </Wrapper>
            }
        </>
    )
}