import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 1090px;
    background-color: #F0F0F0;
    display: flex;
    .left{
        border: 1px solid green;
        width: 50%;
        height: 100%;
    }
    .right{
        border: 1px solid red;
        width: 50%;
        height: 100%;
    }
`;
export default function ProducePage({ product }){
    return(
        <div className="container">
            <Wrapper>
                <div className="left"></div>
                <div className="right"></div>
            </Wrapper>
        </div>
    )
}