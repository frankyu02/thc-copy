import React, { useState } from "react";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";
import TypeBanner from "../global_component/StrainTypeBanner/TypeBanner";
import ProductCartButton from "./ProductCartButton";
import QuantitySelector from "./ProductPageQuantitySelector";

const Wrapper = styled.div`
    width: 500px;
    height: 100%;
    margin-left: 10%;
    position: relative;
    .strandType{
        width: 37%;
        height: 57px;
        position: absolute;
        top: -10px;
    }
    .lowerStrand{
        width: 116px;
        height: 35px;
        display: none;
    }
    .title{
        margin-top: 80px;
        h2{
            text-transform: uppercase;
            font-family: "Neumatic Compressed Bold";
            font-weight: bolder;
            font-size: 70px;
        }
        p{
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
        height: 10%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .weight{
            border: 1px solid red;
            width: 20%;
        }
        .quantity{
            width: 20%;
            margin-left: 10%;
        }
        .price{
            margin-left: 10%;
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
    @media (max-width: ${__BREAKPOINTS.sm}px){
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0 13px;
        .strandType{
            visibility: hidden;
        }
        .lowerStrand{
            display: inline-block;
        }
        .title{
            margin: 5px;
            h2{
                font-size: 60px;
            }
        }
        .dosage{
         margin-top: 0;
         margin-top: 20px;   
         padding: 0;
         p{
             font-size: 16px;
         }
        }
        .details{
            .weight{
                width: 50%;
            }
            .quantity{
                width: 40%;
            }
            .price{
                width: 100%;
                margin: 0;
                margin-top: 25px;
                .subtitle{
                    font-size: 14px;
                }
                .total{
                    margin: 0;
                    font-size: 30px;
                }
            }
        }
    }
`;

export default function ProductPageDetail({ brand, name, cbd, thc, strainType, variants, cart }){
    var show = (cbd?.formatted !== "") || (thc?.formatted !== "");
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
            <div className="lowerStrand">
                <TypeBanner text={strainType} size="14px" />
            </div>
            <div className="dosage" >
                <p>THC: {thc.formatted} &nbsp;&nbsp;|&nbsp;&nbsp; CBD: {cbd.formatted}</p>
            </div>
            <div className="details" >
                <div className="weight"></div>
                <div className="quantity">
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                </div>
                <div className="price">
                    <p className="subtitle">PRICE</p>
                    <p className="total">${total}</p>
                </div>
            </div>
            <ProductCartButton />
        </Wrapper>
    )
}