import React from "react";
import styled from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi";
import { __BREAKPOINTS } from "../../styles/utils/variables";
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    p{
        margin: 0;
    }
    .subtitle{
        font-size: 14px;
        font-family: "Integral CF";
        color: #797979;
    }
    .selector{
        margin-top: 17.3px;
        display: flex;
        
        overflow: visible;
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 24px;
            width: 24px;
            border: 1px solid #612C8F;
            background: white;
            .icon{
                color: #612C8F;
            }
            &:hover{
                cursor: pointer;
            }
            &:disabled{
                border: 1px solid #C4C4C4;
                .icon{
                    color: #C4C4C4;
                }
            }
        }
        p{
            margin-top: 3px;
            margin-left: 15px;
            margin-right: 15px;
            font-size: 16px;
            font-family: "Integral CF Heavy";
        }
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        padding: 0 30%;
        .selector{
            button{
                min-width: 44px;
                min-height: 44px;
            }
            p{
                text-align: center;
                margin-top: 10px;
                min-width: 32px;
                font-size: 18px;
            }
        }
    }
    @media (max-width: ${__BREAKPOINTS.xs}px){
        padding: 0 20%;
    }
    @media (max-width: ${__BREAKPOINTS.xxs}px){
        padding: 0;
        .selector{
            p{
                margin-left: 1px;
                margin-right: 1px;
            }
        }
    }
`;
export default function QuantitySelector({ quantity, setQuantity }){
    const add = (e) => {
        e.preventDefault();
        setQuantity((q) => q + 1);
    }
    const subtract = (e) => {
        e.preventDefault();
        setQuantity((q) => q - 1);
    }
    return(
        <Wrapper>
            <p className="subtitle">QUANTITY</p>
            <div className="selector">
                <button onClick={subtract} disabled={quantity <= 1}>
                    <FiMinus className="icon"/>
                </button>
                <p>{quantity}</p>
                <button onClick={add}>
                    <FiPlus className="icon" />
                </button>
            </div>
        </Wrapper>
    )
}