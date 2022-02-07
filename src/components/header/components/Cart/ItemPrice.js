import React from "react";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../../../styles/utils/variables";

const PriceWrapper = styled.div`
    margin-bottom: 30px;
    margin-left: 25px;
    .subtitle{
        font-size: 14px;
        font-family: "Integral CF";
        color: #797979;
    }
    p{
        padding: 0;
        margin: 0;
    }
    .price{
        font-family: "Integral CF Bold";
        font-size: 30px;
        margin-top: 22px;
        margin-bottom: 5px;
    }
    @media (max-width:${__BREAKPOINTS.xxs}px){
        width: 40%;
        margin-bottom: 0;
        margin-top: 40px;
        margin-left: 0;
        .price{
            margin-bottom: 0;
        }
    }

`;

export default function ItemPrice({ variants, option, quantity }){
    let price = 0;
    for(let i = 0; i < variants.length; i++){
        if(variants[i].option === option){
            price = (variants[i].priceRec * quantity).toFixed(2);
        }
    }
    return(
        <PriceWrapper>
            <p className="subtitle"> PRICE</p>
            <p className="price">${price}</p>
        </PriceWrapper>
    )
}