import React from "react";
import Img from "react-cool-img";  
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { __BREAKPOINTS } from "../../../../styles/utils/variables";
import CartQuantity from "./CartQuantity";
import ItemPrice from "./ItemPrice";
const ItemWrapper=styled.div`
    width: auto;
    height: 110px;
    position: relative;
    display: flex;
    padding: 0;
    align-items: center;
    button{
        background: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    img{
        border: 1px solid black;
        width: 60px;
        height: 60px;
        margin-left: 50px;
    }
    p{
        margin-left: 19px;
        font-family: "Neumatic Compressed Bold";
        font-size: 40px;
        min-width: 260px;
        max-width: 260px;
    }
    @media (max-width: ${__BREAKPOINTS.lg}px){
        p{
            min-width: 190px;
            max-width: 190px;
        }
    }
`;

export default function CartItem({ item, del, add, sub }){
    return(
        <ItemWrapper>
            <button onClick={del}><CgClose /></button>
            <Img src={item.product.image} alt={item.product.name} />
            <p>{item.product.name}</p>
            <CartQuantity add={add} sub={sub} quantity={item.quantity}/>
            <ItemPrice variants={item.product.variants} option={item.option} />
        </ItemWrapper>
    )
}