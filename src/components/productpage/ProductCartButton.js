import React from "react";
import styled from "styled-components";

const CartButton = styled.button`
    width: 99%;
    height: 59px;
    margin-left: 1%;
    position: absolute;
    bottom: 20px;
    background: #612C8F;
    color: white;
    font-family: "Integral CF Bold";
    font-style: italic;
    font-size: 18px;
    &:hover{
        cursor: pointer;
    }
`;

export default function ProductCartButton({ func, toastify }){
    return(
        <CartButton onClick={func}>
            ADD TO CART
        </CartButton>
    )
}
