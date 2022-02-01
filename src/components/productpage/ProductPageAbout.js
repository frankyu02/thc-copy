import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: min(548px, 70%);
    height: 400px;
    margin-top: 60px;
    .title{ 
        h2{
            font-size: 50px;
            font-family: "Integral CF Bold";
            font-style: italic;
            color: #612C8F;
        }
    }
    .content{
        padding-top: 20px;
        height: auto;
        p{
            font-size: 18px;
            font-family: "MADE Outer Sans";
            font-weight: bold;
        }
    }
`;
export default function ProductPageAbout({ description }){
    return(
        <Wrapper>
            <div className="title">
                <h2>About the Product</h2>
            </div>
            <div className="content">
                <p>{description}</p>
            </div>
        </Wrapper>
    )
}