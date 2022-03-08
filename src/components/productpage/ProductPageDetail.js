import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CheckoutContext } from "../../contexts/checkout";
import { __BREAKPOINTS } from "../../styles/utils/variables";
import TypeBanner from "../global_component/StrainTypeBanner/TypeBanner";
import ProductCartButton from "./ProductCartButton";
import ProductDropdown from "./ProductPageDropdown";
import QuantitySelector from "./ProductPageQuantitySelector";

const Wrapper = styled.div`
    height: auto;
    margin-left: 10%;
    position: relative;
    width: 80%;

    .strandType{
        width: 37%;
        height: 57px;
        position: absolute;
        top: -10px;
    }
    .lowerStrand{
        width: 116px;
        min-height: 35px;
        display: none;
    }
    .title{
        margin-top: 80px;
        h1{
            text-transform: uppercase;
            font-family: "Integral CF";
            font-weight: bolder;
            font-size: 60px;
            
        }
        p{
            margin: 0;
            font-size: 16px;
            font-family: "Integral CF";
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
            font-family: "MADE Outer Sans Light";
            font-weight: bold;
            color: #797979;
            font-size: 24px;
        }
    }
    .details{
        min-height: 10%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .weight{
            width: 25%;
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
    .Toastify__progress-bar {
    background: var(--darkpurple);
    }
    .Toastify__toast-body{
        color: black;
        text-align: center;
        font-family: "MADE Outer Sans Light";
        font-size: 15px;
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
            h1{
                font-size: 25px;
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
                width: 45%;
            }
            .quantity{
                width: 45%;
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

export default function ProductPageDetail({ brand, name, cbd, thc, strainType, variants, id }){
    var show = (cbd?.formatted !== "") || (thc?.formatted !== "");
    const [index, setIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    var total = 0;
    if(variants[index]?.specialPriceRec){
        total = variants[index]?.specialPriceRec * quantity;
    } else{
        total = variants[index]?.priceRec * quantity;
    }
    console.log('variants ---> ', variants);
    const {addToCart} = useContext(CheckoutContext);
    total=total.toFixed(2);

    const handleAddToCart = () => {
        addToCart(id, quantity, variants[index].option)
        toast("Added Item To Cart!",{
            position: "bottom-right",
            autoClose: 5000,
            newestOnTop: false,
            closeOnClick: true,
            pauseOnHover: false
        })
    }
    return(
        <Wrapper a={show}>
            <div className="strandType">
                <TypeBanner text={strainType} size="24px" />
            </div>
            <div className="title">
                <h1>{name}</h1>
                <p>By {brand.name}</p>
            </div>
            <div className="lowerStrand">
                <TypeBanner text={strainType} size="14px" />
            </div>
            <div className="dosage" >
                <p>THC: {thc.formatted} &nbsp;&nbsp;|&nbsp;&nbsp; CBD: {cbd.formatted}</p>
            </div>
            <div className="details" >
                <div className="weight">
                    <ProductDropdown index={index} setIndex={setIndex} variant={variants} />
                </div>
                <div className="quantity">
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                </div>
                <div className="price">
                    <p className="subtitle">PRICE</p>
                    <p className="total">${total}</p>
                </div>
            </div>
            <ProductCartButton func={handleAddToCart}/>
        </Wrapper>
    )
}