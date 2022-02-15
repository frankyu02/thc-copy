import React from "react";
import styled from "styled-components";

const CartButtonStyle = styled.a`
    margin-left: 50px;
    margin-top: 30px;
    width: calc(90% - 50px);
    height: 59px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #612C8F;
    color: white;
    font-family: "Integral CF Bold";
    font-size: 18px;
    font-style: italic;
`;

export default function CartButton({ redirect }){
    var checkoutLink = redirect;
    console.log(checkoutLink);
    return(
        <CartButtonStyle href={checkoutLink} target="_blank">
            Checkout
        </CartButtonStyle>
    )
}