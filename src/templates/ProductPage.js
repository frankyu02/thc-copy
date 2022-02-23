import React from "react";
import styled from "styled-components";
import ProductPageAbout from "../components/productpage/ProductPageAbout";
import ProductPageDetail from "../components/productpage/ProductPageDetail";
import ProductPageImage from "../components/productpage/ProductPageImage";
import ProductProfile from "../components/productpage/ProductProfile";
import { __BREAKPOINTS } from "../styles/utils/variables";
import { useQuery } from '@apollo/client';
import PRODUCT_QUERY from '../apollo/queries/product.graphql';
import Loader from '../components/menu/other/Loader';

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

const AnimationLoader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export default function ProductPage({id}){

    const {loading: loading, error: error, data: data } = useQuery(
    PRODUCT_QUERY, 
    {variables: {retailerId:"4c9422c5-d248-415b-8a88-0a75822c50e6", id: id}, fetchPolicy: "network-only" })

    if (data && !loading){
    return(
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
                        variants={data.product.variants}/>
                </div>
                <div className="bottom">
                    <ProductPageAbout description={data.product.description}/>
                    <ProductProfile 
                        brand={data.product.brand} 
                        thc={data.product.potencyThc} 
                        cbd={data.product.potencyCbd} 
                        category={data.product.category} 
                        effect={data.product.effects}
                    />
                </div>
            </Wrapper>
        </div>
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