import React from "react";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    position: relative;
    width: 100%;
    .title{
        font-size: 18px;
        font-family: "Integral CF Bold";
    }
    .content{
        font-size: 18px;
        font-family: "Integral CF";
        color: #797979;
        margin-left: 30%;
        position: absolute;
        left: 18%;
    }
`;
export default function ProfileItem({ title, content, optional }){
    return(
        <Content>
                <p className="title"> {title}</p>
                <p className="content">{content}{optional}</p>
        </Content>
    )
}