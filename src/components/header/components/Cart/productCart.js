import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { CheckoutContext } from "../../../../contexts/checkout";
import { __BREAKPOINTS } from "../../../../styles/utils/variables";
import { NoScroll } from "../../../../utils/noScroll";
import CartButton from "./CartButton";
import CartItem from "./ProductCartItem";
import CartTotal from "./TotalPriceInfo";

const Wrapper = styled.div`
    width: ${props => props.closed ? '0' : '100vw'};
    transition: 0.2s;
    height: calc(100vh - 124px);
    overflow: hidden;
    border: 1px solid black;
    border-right: none;
    position: absolute;
    z-index: 200;
    @media (max-width: ${__BREAKPOINTS.lg}px){
        height: calc(100vh - 104px);
    }
`;
const Background = styled.div`
    width: 30%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: absolute;
    @media (max-width: ${__BREAKPOINTS.lg}px){
        width: 20%;
    }
    @media (min-width: ${__BREAKPOINTS.xl}px){
        width: 50%;
    }
    @media (max-width: ${__BREAKPOINTS.xxs}px){
        width: 0%;
    }
`;
const CartContent = styled.div`
    width: 70%;
    height: 100%;
    float: right;
    border-left: 1px solid black;
    background: white;
    background: linear-gradient(71.17deg, #612C8F -2.69%, rgba(255, 255, 255, 0) 33.31%), #FFFFFF;
    border-left: 1px solid black;
    padding-top: 33px;
    padding-left: 73.06px;
    position: relative;
    h2{
        margin-left: 30px;
        font-size: 36px;
        font-family: "Integral CF";
        font-style: italic;
    }
    .content{
        margin-top: 32px;
        width: 90%;
        overflow-x: hidden;
        overflow-y: auto;
        scrollbar-width: thin;          /* "auto" or "thin" */
        scrollbar-color: var(--darkpurple) var(--lightpurple);   /* scroll thumb and track */ 
        &::-webkit-scrollbar {
            width: 12px;               /* width of the entire scrollbar */
        }

        &::-webkit-scrollbar-track {
            background: var(--lightpurple);        /* color of the tracking area */
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--darkpurple);    /* color of the scroll thumb */
        }
        height: 65%;
    }
    .close{
        margin: 0;
        margin-top: 29px;
        margin-left: 50px;
        width: calc(90% - 50px);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-family: "Integral CF Bold";
        cursor: pointer;
        font-style: italic;
        text-decoration: underline;
    }
    @media (max-width: ${__BREAKPOINTS.lg}px){
        width: 80%;
    }
    @media (min-width: ${__BREAKPOINTS.xl}px){
        width: 50%;
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        width: 100%;
        padding-top: 20px;
        padding-left: 0px;
        h2{
            margin: 0;
            margin-left: 20px;
            font-style: normal;
        }
        .content{
            width: 100%;
            margin: 0;
            &::-webkit-scrollbar {
            width: 5px;               /* width of the entire scrollbar */
        }
        }
    }
`;
export default function ProductCart({ closed, setClosed }){
    const { checkout } = useContext(CheckoutContext)

    const dutchieDispenaryId = '601c613e4f4adc00aa7da2b7';
    const checkoutUrl = 'https://checkout.thccanada.ca/checkouts/'+dutchieDispenaryId+"/"+checkout?.id;

    var Quanttotal = 0;
    for(var i = 0; i < checkout?.items?.length; i++){
        Quanttotal += checkout?.items[i]?.quantity;
    }
    const closePage = useCallback(() => {
        setClosed((c) => {
            return !c;
        });
    }, [setClosed]);
    let subtotal = 0.00;
    let discount = 0.00;
    let taxes = 0.00;
    let total = 0.00;
    if(checkout?.priceSummary){
        subtotal = checkout.priceSummary.subtotal / 100;
        discount = checkout.priceSummary.discounts / 100;
        taxes = checkout.priceSummary.taxes / 100;
        total = checkout.priceSummary.total / 100;
    }
    return(
        <Wrapper closed={closed}>
            { !closed && <NoScroll />}
            <Background onClick={closePage} />
            <CartContent>
                <h2>CART ({Quanttotal})</h2>
                <div className="content">
                    {checkout?.items.map((item, index) => {
                        return(
                            <CartItem 
                                key={index} 
                                item={item} 
                            />
                        )
                    })}
                    <CartTotal subtotal={subtotal} discount={discount} tax={taxes} total={total}/>
                </div> 
                <CartButton redirect={checkoutUrl}/>
                <p className="close" onClick={closePage}>CONTINUE SHOPPING</p>
            </CartContent>
        </Wrapper>
    )
}