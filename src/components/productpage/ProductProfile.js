import React from "react";
import styled from "styled-components";
import ProfileItem from "./ProfileItem";

const Wrapper = styled.div`
    width: 500px;
    height: auto;
    margin-left: 10%;
    margin-top: 40px;
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