import React from "react";
import styled from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi";
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
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
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
            font-size: 16px;
            font-family: "Integral CF Heavy";
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