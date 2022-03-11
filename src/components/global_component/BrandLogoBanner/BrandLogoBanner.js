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
    p{
        font-family: "Integral CF Bold";
        font-size: ${props => props.fontsize || "100%"};
    }
`;
export default function BrandLogoBanner({ brand, size }){
    return(
        <>
            {brand?.image ? 
                <Wrapper>
                    <Img src={brand?.imageUrl} alt={brand?.name} />
                </Wrapper>
            :
                <Wrapper fontsize={size}>
                    <p>{brand?.name}</p>
                </Wrapper>
            }
        </>
    )
}