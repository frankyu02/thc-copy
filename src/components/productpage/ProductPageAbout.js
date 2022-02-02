import React from "react";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";

const Wrapper = styled.div`
    width: min(454px, 80%);
    height: 400px;
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
        max-width: min(454px, 80%);
        p{
            font-size: 18px;
            font-family: "MADE Outer Sans";
            font-weight: bold;
        }
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        padding: 0 13px;
        width: 100%;
        height: 100%;
        margin-bottom: 44px;
        .title{
            h2{
                font-size: 36px;
            }
        }
        .content{
            max-width: 98%;
            p{
                font-size: 15px;
            }
        }
    }
    @media (max-width: ${__BREAKPOINTS.xxs}px){
        padding-top: 40px;
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