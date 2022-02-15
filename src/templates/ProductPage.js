import React from "react";
import styled from "styled-components";
import ProductPageAbout from "../components/productpage/ProductPageAbout";
import ProductPageDetail from "../components/productpage/ProductPageDetail";
import ProductPageImage from "../components/productpage/ProductPageImage";
import ProductProfile from "../components/productpage/ProductProfile";
import { __BREAKPOINTS } from "../styles/utils/variables";
const Wrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 1182px;
    background-color: #F0F0F0;
    display: flex;
    flex-direction: column;
    padding-bottom: 92px;
    .top{
        width: auto;
        height: 60%;
        margin-top: 78px;
        padding-left: 8%;
        padding-right: 8%;
        display: flex;
    }
    .bottom{
        width: auto;
        height: 40%;
        padding-left: 8%;
        padding-right: 8%;
        display: flex;
    }
    @media (max-width: ${__BREAKPOINTS.md}px){
        .top{
            padding-left: 5%;
            padding-right: 5%;
        }
        .bottom{
            padding-left: 5%;
            padding-right: 5%;
        }
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        height: 100%;
        padding-bottom: 0;
        .top{
            width: 100%;
            height: 100%;
            margin: 0;
            flex-direction: column;
            padding-left: 1px;
            padding-right: 1px;
        }
        .bottom{
            width: 100%;
            height: auto;
            flex-direction: column-reverse;
            margin: 0;
            padding-left: 10px;
            padding-right: 10px;
        }
    }
`;
export default function ProductPage({ product }){
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