import React, { useState } from "react";
import styled from "styled-components";
import TypeBanner from "../global_component/StrainTypeBanner/TypeBanner";

const Wrapper = styled.div`
    border: 1px solid black;
    width: 500px;
    height: 60%;
    .strandType{
        width: 37%;
        height: 57px;
    }
    .title{
        margin-top: 30px;
        h2{
            font-family: "Neumatic Compressed Bold";
            font-weight: bolder;
            font-size: 90px;
        }
        p{
            margin: 0;
            font-size: 16px;
            font-family: "Integral CF Bold";
            color: #797979;
        }
    }
    .dosage{
        border: 1px solid #000000;
        border-left: none;
        border-right: none;
        margin-top: 30px;
        padding: 10px 0;
        visibility: ${props => props.a ? 'visible' : 'hidden'};
        p{
            font-family: "MADE Outer Sans";
            font-weight: bold;
            color: #797979;
            font-size: 24px;
        }
    }
    .details{
        border: 1px solid black;
        height: 20%;
        display: flex;
        margin-top: 30px;
        .weight{
            border: 1px solid red;
            width: 20%;
        }
        .quantity{
            border: 1px solid green;
            width: 20%;
            margin-left: 8%;
        }
        .price{
            border: 1px solid purple;
            width: 20%;
            margin-left: 8%;
            flex-direction: column;
            p{
                margin: 0;
            }
            .subtitle{
                font-size: 14px;
                font-family: "Integral CF";
                color: #797979;
            }
            .total{
                margin-top: 17.3px;
                font-size: 20px;
                font-family: "Integral CF Bold"
            }
        }
    }
`;

export default function ProductPageDetail({ brand, name, cbd, thc, strainType, variants, cart }){
    var show = (cbd?.formatted != null) || (thc?.formatted != null);
    const [index, setIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    var total = 0;
    if(variants[index]?.specialPriceRec){
        total = variants[index]?.specialPriceRec * quantity;
    } else{
        total = variants[index]?.priceRec * quantity;
    }

    total=total.toFixed(2);
    return(
        <Wrapper a={show}>
            <div className="strandType">
                <TypeBanner text={strainType} size="24px" />
            </div>
            <div className="title">
                <h2>{name}</h2>
                <p>By {brand.name}</p>
            </div>
            <div className="dosage" >
                <p>THC: {thc.formatted} &nbsp;&nbsp;|&nbsp;&nbsp; CBD: {cbd.formatted}</p>
            </div>
            <div className="details" >
                <div className="weight"></div>
                <div className="quantity"></div>
                <div className="price">
                    <p className="subtitle">price</p>
                    <p className="total">${total}</p>
                </div>
            </div>
        </Wrapper>
    )
}