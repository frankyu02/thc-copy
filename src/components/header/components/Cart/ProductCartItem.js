import React from "react";
import Img from "react-cool-img";  
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { __BREAKPOINTS } from "../../../../styles/utils/variables";
import CartQuantity from "./CartQuantity";
import ItemPrice from "./ItemPrice";
import { useContext } from "react";
import { CheckoutContext } from "../../../../contexts/checkout";
const ItemWrapper=styled.div`
    max-width: 100%;
    height: 110px;
    position: relative;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: flex-start;
    button{
        background: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #612C8F;
    }
    img{
        border: 1px solid black;
        min-width: 60px;
        max-width: 60px;
        min-height: 60px;
        max-height: 60px;
        margin-left: 50px;
    }
    p{
        margin-left: 19px;
        font-family: "Neumatic Compressed Bold";
        font-size: 40px;
        min-width: 200px;
        max-width: 200px;
    }
    @media (max-width:${__BREAKPOINTS.sm}px){
        flex-wrap: wrap;
        height: auto;
        padding-bottom: 25px;
        margin-top: 25px;
        button{
            position: static;
            transform: none;
        }
        img{
            margin: 0;
            margin-left: 10px;
        }
        p{
            width: 50%;
            margin: 0;
            margin-left: 15%;
        }
        .title{
            margin-left: 40%;
            right: 0;
            min-width: 0;
        }
    }
    @media (max-width: ${__BREAKPOINTS.xxs}px){
        .title{
            margin-left: 20%;
        }
    }
        @media(max-width: 350px){
            .title{
                margin-left: 45px;
            }
        }
`;

export default function CartItem({ item }){
    const {removeFromCart, updateQuantity} = useContext(CheckoutContext)

    const sub = () => {
        updateQuantity(item.id, item.quantity-1)
    }
    const add = () => {
        updateQuantity(item.id, item.quantity+1)
    }
    return(
        <ItemWrapper>
            <button onClick={()=>{removeFromCart(item.id)}}>
                <CgClose />
            </button>
            <Img src={item.product.image} alt={item.product.name} />
            <p className="title">{item.product.name}</p>
            <CartQuantity add={add} sub={sub} quantity={item.quantity}/>
            <ItemPrice variants={item.product.variants} option={item.option} quantity={item.quantity}/>
        </ItemWrapper>
    )
}