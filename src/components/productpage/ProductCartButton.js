import React from "react";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";

const CartButton = styled.button`
    width: 99%;
    height: 59px;
    margin-left: 1%;
    position: absolute;
    margin-top: 25px;
    background: #612C8F;
    color: white;
    font-family: "Integral CF Bold";
    font-style: italic;
    font-size: 18px;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        width: 95%;
        height: 59px;
        margin: 0;
        margin-top: 26px;
        position: static;
    }
`;

export default function ProductCartButton({ func, toastify }){
    return(
        <CartButton onClick={func}>
            ADD TO CART
        </CartButton>
    )
}
