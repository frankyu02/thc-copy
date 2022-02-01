import React from "react";
import styled from "styled-components";
import ProductPageAbout from "../components/productpage/ProductPageAbout";
import ProductPageImage from "../components/productpage/ProductPageImage";

const Wrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 1090px;
    background-color: #F0F0F0;
    display: flex;
    .left{
        width: 50%;
        height: auto;
        margin-top: 78px;
        margin-left: 8%;
    }
    .right{
        border: 1px solid red;
        width: 50%;
        height: 100%;
    }
`;
export default function ProductPage({ product }){
     console.log(product);
    return(
        <div className="container">
            <Wrapper>
                <div className="left">
                    <ProductPageImage imgurl={product.image} name={product.name} brand={product.brand}/>
                    <ProductPageAbout description={product.description}/>
                </div>
                <div className="right"></div>
            </Wrapper>
        </div>
    )
}