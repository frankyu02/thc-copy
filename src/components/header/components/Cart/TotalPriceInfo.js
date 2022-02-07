import React from "react";
import styled from "styled-components";

const TotalPriceWrapper = styled.div`
    border: 1px solid black;
    width: calc(100% - 50px);
    height: 250px;
    margin-left: 50px;
`;

export default function CartTotal({ subtotal, tax, discount, total}){
    return(
        <TotalPriceWrapper>

        </TotalPriceWrapper>
    )
}