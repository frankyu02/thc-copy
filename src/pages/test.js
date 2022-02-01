import React from "react"; 
import TypeBanner from "../components/global_component/StrainTypeBanner/TypeBanner";
import ClientReview from "../components/reviews/ClientReview/ClientReview";
import styled from "styled-components";
const Wrapper = styled.div`

width: 190px;
height: 57px;
`;
export default function a(){
    return(
        <Wrapper>
            <TypeBanner text="INDICA" size="24px" />
        </Wrapper>
    )
}