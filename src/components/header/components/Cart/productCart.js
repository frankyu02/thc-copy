import React, { useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: ${props => props.closed ? '0' : '100vw'};
    transition: 0.2s;
    height: calc(100vh - 124px);
    overflow: hidden;
    border: 1px solid black;
    position: absolute;
    z-index: 200;
    .cartContent{
        width: 60%;
        height: 100%;
        float: right;
        border: 1px solid black;
        background: white;
        background: linear-gradient(71.17deg, #612C8F -2.69%, rgba(255, 255, 255, 0) 33.31%), #FFFFFF;
        border-left: 1px solid black;
    }
    @media(max-width: 1400px){
        height: calc(100vh - 104px);
    }
`;
const Background = styled.div`
    width: 40%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    cursor: pointer; 
    position: absolute;
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
        font-size: 36px;
        font-family: "Integral CF";
        font-style: italic;
    }
    .content{
        border: 1px solid black;
        margin-top: 32px;
        width: 90%;
        overflow: auto;
        height: 65%;
    }
`;
export default function ProductCart({ closed, setClosed, cart }){
    console.log(cart);
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
                    
                </div> 
            </CartContent>
        </Wrapper>
    )
}