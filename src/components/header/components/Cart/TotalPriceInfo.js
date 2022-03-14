import React from "react";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../../../styles/utils/variables";

const TotalPriceWrapper = styled.div`
    border-top: 1px solid #D8D8D8;
    margin-top: 30px;
    width: 100%;
    height: 250px;
    margin-left: 50px;
    margin-right: 50px;
    .priceBreakdown{
        width: 100%;
        height: 176px;
        border-bottom: 1px solid #D8D8D8;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px 0;
        p{
            margin: 0;
            font-family: "Integral CF Bold";
            font-style: italic;
            font-size: 24px;
        }
        .PriceContent{
            position: relative;
            display: flex;
            .value{
                position: absolute;
                top: 0;
                left: 63%;
                font-style: normal;
            }
        }
    }
    .total{
        p{
            font-family: "Integral CF Bold";
            font-style: italic;
            font-size: 24px;
        }
            position: relative;
            display: flex;
            .value{
                position: absolute;
                top: 0;
                left: 63%;
                font-style: normal;
            }
    }
    @media (min-width: ${__BREAKPOINTS.xl}px){
        .priceBreakdown{
            .PriceContent{
                .value{
                    left: 74%;
                }
            }
        }
        .total{
            .value{
                left: 74%;
            }
        }
    }
    @media (max-width: ${__BREAKPOINTS.lg}px){
        .priceBreakdown{
            .PriceContent{
                .value{
                    left: 61%;
                }
            }
        }
        .total{
            .value{
                left: 61%;
            }
        }
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        margin-left: 18px;
        margin-right: 4px;
        margin-top: 0;
        width: calc(100% - 22px);
        .priceBreakdown{
            p{
                font-size: 20px;
            }
        }
    }
    @media (max-width: ${__BREAKPOINTS.xxs}px){
        .priceBreakdown{
            p{
                font-size: 17px;
            }
        }
        .total{
            p{
                font-size: 17px;
            }
        }
    }
`;

export default function CartTotal({ subtotal, tax, discount, total}){
    subtotal = subtotal.toFixed(2);
    tax = tax.toFixed(2);
    discount = discount.toFixed(2);
    total = total.toFixed(2);
    return(
        <TotalPriceWrapper>
            <div className="priceBreakdown">
                <div className="PriceContent">
                    <p>SUBTOTAL</p>
                    <p className="value">${subtotal}</p>
                </div>
                <div className="PriceContent">
                    <p>TAXES</p>
                    <p className="value">${tax}</p>
                </div>
                <div className="PriceContent">
                    <p>DISCOUNT</p>
                    <p className="value">${discount}</p>
                </div>
            </div>
            <div className="total">
                <p>TOTAL</p>
                <p className="value">${total}</p>
            </div>
        </TotalPriceWrapper>
    )
}