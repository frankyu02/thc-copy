import React from "react";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";

const Content = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    position: relative;
    width: 100%;
    .title{
        font-size: 18px;
        font-family: "Integral CF Bold";
        margin-bottom: 0;
    }
    .filler{
        border: 1px solid black;
        font-size: 18px;
        font-family: "Integral CF";
        color: #797979;
        width: 52%;
        visibility: hidden; 
        margin-bottom: 0;
        margin-bottom: 20px;
    }
    .content{
        font-size: 18px;
        font-family: "Integral CF";
        color: #797979;
        margin-left: 30%;
        margin-bottom: 0;
        position: absolute;
        left: 18%;
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        .title{
            font-size: 15px;
        }
        .filler{
            font-size: 15px;
            width: 40%;
        }
        .content{
            font-size: 15px;
            left: 30%;
        }
    }
    @media (max-width: 300px){
        .filler{
            width: 45%;
        }
        .content{
            left: 25%;
        }
    }
`;
export default function ProfileItem({ title, content, optional }){
    return(
        <Content>
                <p className="title"> {title}</p>
                <p className="filler">{content}</p>
                <p className="content">{content}{optional}</p>
        </Content>
    )
}