import React from "react";
import styled from "styled-components";

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
        font-family: "Integral CF";
        font-size: 30px;
        margin-top: 22px;
        margin-bottom: 5px;
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