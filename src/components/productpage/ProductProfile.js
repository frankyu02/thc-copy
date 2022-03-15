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
        width: 100%;
        padding: 0;
        margin: 0;
        margin-top: 85px;
        padding: 0 13px;
    }
`;

export default function ProductProfile({ brand, thc, cbd, category, strain }){
    const prettyStrain = strain.replaceAll('_', ' ');
    return(
        <Wrapper>
            {brand && <ProfileItem title="BRAND" content={brand.name} />}
            <ProfileItem title="THC" content={thc.formatted || "0 MG/G"}/>
            <ProfileItem title="CBD" content={cbd.formatted || "0 MG/G"}/>
            <ProfileItem title="Category" content={category} />
            {strain != "NOT_APPLICABLE" && strain &&
            <ProfileItem title="Strain Type" content={prettyStrain} />
            }
        </Wrapper>
    )
}