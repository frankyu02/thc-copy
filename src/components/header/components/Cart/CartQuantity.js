import React from "react";
import styled from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi";
import { __BREAKPOINTS } from "../../../../styles/utils/variables";
const CartItemWrapper = styled.div`
    margin-bottom: 34px;
    margin-left: 20px;
    padding: 0;
    p{
        margin: 0;
    }
    .subtitle{
        font-size: 14px;
        font-family: "Integral CF";
        color: #797979;
        margin: 0;
    }
    .selector{
        margin-top: 20px;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        button{
            position: static;
            transform: none;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 35.83px;
            width: 35.83px;
            border: 1px solid #612C8F;
            .icon{
                color: #612C8F;
            }
            &:disabled{
                .icon{
                    color: #C4C4C4;
                }
            }
        }
        .quantity{
            margin-top: 5px;
            font-size: 18px;
            font-family: "Integral CF Heavy";
            margin-left: 0;
            min-width: 0;
        }
        
    }
    @media (min-width: 1600px){
        margin-left: 60px;
    }
    @media (max-width: ${__BREAKPOINTS.lg}px){
        margin-left: 0;
        width: 100px;
        .selector{
            justify-content: flex-start;
            .quantity{

                min-width: 30px;
                text-align: center;
                margin-left: 10px;
                margin-right: 10px;
            }
        }
    }
    @media (max-width:${__BREAKPOINTS.sm}px){
        margin: 0;
        margin-left: 18px;
        width: 45%;
        margin-top: 40px;
        .selector{
            .quantity{
                width: auto;
            }
        }
    }
`;

export default function CartQuantity({ add, sub, quantity }){
    return(
        <CartItemWrapper>
            <p className="subtitle">QUANTITY</p>
            <div className="selector">
                <button onClick={sub} disabled={quantity <= 1}>
                    <FiMinus className="icon"/>
                </button>
                <p className="quantity">{quantity}</p>
                <button onClick={add}>
                    <FiPlus className="icon" />
                </button>
            </div>
        </CartItemWrapper>
    )
}