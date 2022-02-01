import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
border: 1px solid green;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
    p{
        font-family: "Integral CF";
        font-size: ${props => props.fontsize || "100%"};
        font-style: italic;
        color: #612C8F;
    }
`;
export default function TypeBanner({ text, size }){
    return(
        <Wrapper fontsize={size}>
            <p>{text}</p>
        </Wrapper>
    )
}