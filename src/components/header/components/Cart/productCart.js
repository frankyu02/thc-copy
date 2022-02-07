import React, { useCallback } from "react";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../../../styles/utils/variables";
import CartItem from "./ProductCartItem";
import CartTotal from "./TotalPriceInfo";

const Wrapper = styled.div`
    width: ${props => props.closed ? '0' : '100vw'};
    transition: 0.2s;
    height: calc(100vh - 124px);
    overflow: hidden;
    border: 1px solid black;
    position: absolute;
    z-index: 200;
    @media (max-width: ${__BREAKPOINTS.lg}px){
        height: calc(100vh - 104px);
    }
`;
const Background = styled.div`
    width: 40%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    cursor: pointer; 
    position: absolute;
    @media (max-width: ${__BREAKPOINTS.lg}px){
        width: 30%;
    }
`;
const CartContent = styled.div`
    width: 60%;
    height: 100%;
    float: right;
    border-left: 1px solid black;
    background: white;
    background: linear-gradient(71.17deg, #612C8F -2.69%, rgba(255, 255, 255, 0) 33.31%), #FFFFFF;
    border-left: 1px solid black;
    padding-top: 33px;
    padding-left: 73.06px;
    h2{
        margin-left: 30px;
        font-size: 36px;
        font-family: "Integral CF";
        font-style: italic;
    }
    .content{
        border: 1px solid black;
        margin-top: 32px;
        width: 90%;
        overflow-x: hidden;
        overflow-y: auto;
        height: 65%;
    }
    @media (max-width: ${__BREAKPOINTS.lg}px){
        width: 70%;
    }
`;
export default function ProductCart({ closed, setClosed, cart, deleteFunc, addFunc, subFunc }){
    const closePage = useCallback(() => {
        setClosed((c) => {
            return !c;
        });
    }, [setClosed]);
    return(
        <Wrapper closed={closed}>
            <Background onClick={closePage} />
            <CartContent>
                <h2>CART ({cart.items.length})</h2>
                <div className="content">
                    {cart.items.map((item, index) => {
                        return(
                            <CartItem key={index} item={item} />
                        )
                    })}
                    <CartTotal />
                </div> 
            </CartContent>
        </Wrapper>
    )
}