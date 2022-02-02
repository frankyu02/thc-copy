import React from "react";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";
import ProfileItem from "./ProfileItem";

const Wrapper = styled.div`
    width: 500px;
    height: auto;
    margin-left: 10%;
    margin-top: 40px;
    @media (max-width: ${__BREAKPOINTS.sm}px){
        
        height: 300px;
        width: 100%;
        padding: 0;
        margin: 0;
        margin-top: 85px;
        padding: 0 13px;
    }
`;
const EffectContainer = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    position: relative;
    border-bottom: 1px solid black;
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
    @media (max-width: ${__BREAKPOINTS.sm}px){
        height: 25%;
        .title{
            font-size: 15px;
        }
        .content{
            font-size: 15px;
            left: 30%;
        }
    }
    @media (max-width: ${__BREAKPOINTS.xxs}px){
        height: 34%;
    }
    @media (max-width: 300px){
        height: 35%;
        .content{
            left: 26%;
        }
    }
`;
export default function ProductProfile({ brand, thc, cbd, category, effect }){
    const effects = effect.join(', ');
    return(
        <Wrapper>
            <ProfileItem title="BRAND" content={brand.name} />
            <ProfileItem title="THC" content={thc.formatted} optional=" MG/G" />
            <ProfileItem title="CBD" content={cbd.formatted} optional=" MG/G" />
            <ProfileItem title="PLANT TYPE" content={category} />
            <EffectContainer>
                <p className="title">Effects</p>
                <p className="content">{effects}</p>
            </EffectContainer>
        </Wrapper>
    )
}