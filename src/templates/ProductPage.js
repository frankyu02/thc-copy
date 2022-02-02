import React from "react";
import styled from "styled-components";
import ProductPageAbout from "../components/productpage/ProductPageAbout";
import ProductPageDetail from "../components/productpage/ProductPageDetail";
import ProductPageImage from "../components/productpage/ProductPageImage";
import ProductProfile from "../components/productpage/ProductProfile";

const Wrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 1090px;
    background-color: #F0F0F0;
    display: flex;
    flex-direction: column;
    .top{
        width: auto;
        height: 60%;
        margin-top: 78px;
        margin-left: 8%;
        display: flex;
    }
    .bottom{
        border: 1px solid red;
        width: auto;
        height: 40%;
        margin-left: 8%;
        display: flex;
    }
`;
export default function ProductPage({ product }){
     console.log(product);
    return(
        <div className="container">
            <Wrapper>
                <div className="top">
                    <ProductPageImage imgurl={product.image} name={product.name} brand={product.brand}/>
                    <ProductPageDetail 
                        brand={product.brand}
                        name={product.name}
                        cbd={product.potencyCbd}
                        thc={product.potencyThc}
                        strainType={product.strainType}
                        variants={product.variants}/>
                </div>
                <div className="bottom">
                    <ProductPageAbout description={product.description}/>
                    <ProductProfile brand={product.brand} thc={product.potencyThc} cbd={product.potencyCbd} category={product.category} effect={product.effects}/>
                </div>
            </Wrapper>
        </div>
    )
}