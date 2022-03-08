import React from 'react'
import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";
import ProductPageAbout from "./ProductPageAbout";
import ProductPageDetail from "./ProductPageDetail";
import ProductPageImage from "./ProductPageImage";
import ProductProfile from "./ProductProfile";
import Loader from '../menu/other/Loader';
import Seo from "../layout/Seo";

const Wrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    min-height: 1182px;
    background-color: #F0F0F0;
    display: flex;
    flex-direction: column;
    padding-bottom: 92px;
    .top{
        width: auto;
        min-height: 60%;
        height: auto;
        margin-top: 78px;
        padding-left: 8%;
        padding-right: 8%;
        display: flex;
    }
    .bottom{
        width: auto;
        min-height: 40%;
        height: auto;
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

const AnimationLoader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export default function ProductPageHub({data, loading, error}){
    var seo = {};
    if (data){
        seo = {
            title: data.product.name + " - " + data.product.brand.name,
            description: data.product.description,
            image: data.product.image
        };
    }

    if (data && !loading){
    return(
        <>
        <Seo {...seo}/>
        <div className="container">
            <Wrapper>
                <div className="top">
                    <ProductPageImage 
                        imgurl={data.product.image} 
                        name={data.product.name} 
                        brand={data.product.brand}
                    />
                    <ProductPageDetail 
                        brand={data.product.brand}
                        name={data.product.name}
                        cbd={data.product.potencyCbd}
                        thc={data.product.potencyThc}
                        strainType={data.product.strainType}
                        variants={data.product.variants}
                        id={data.product.id}/>
                </div>
                <div className="bottom">
                    <ProductPageAbout description={data.product.description}/>
                    <ProductProfile 
                        brand={data.product.brand} 
                        thc={data.product.potencyThc} 
                        cbd={data.product.potencyCbd} 
                        category={data.product.category} 
                        strain={data.product.strainType}
                    />
                </div>
            </Wrapper>
        </div>
        </>
    )}
    else{
        return(
                (loading) &&
                <AnimationLoader>
                    <Loader />
                </AnimationLoader>
        )
    }
}