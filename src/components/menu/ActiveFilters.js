import React from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md'
import { useQuery } from '@apollo/client';
import BRAND_NAME_QUERY from '../../apollo/queries/brand_name.graphql'
const Wrapper = styled.div`
    display: block;
    margin-top: 15px;
    margin-left: -5px;
`;

const BlockStyle = styled.div`
    display: inline-block;

    font-family: 'MADE Outer Sans Light';
    font-size: 12px;
    color: white;
    background: var(--darkpurple);
    padding: 5px 10px;
    margin: 5px;
    color: white;
    border: 1px solid var(--darkpurple);
    text-align: center;
    svg{
        margin-left: 7px;
        margin-bottom: -2px;
    }
    &:hover{
        background: white;
        color: var(--darkpurple);
        cursor: pointer;
    }
`;

const ClearAll = styled.div`
    display: inline-block;
    font-family: 'MADE Outer Sans Light';
    font-size: 12px;
    color: var(--darkpurple);
    text-decoration: underline;
    margin: 0px 8px;

    &:hover{
        cursor: pointer;
        color: var(--lightpurple);
    }
`;



const Block = ({title, handleClear}) => {

    return(
        <BlockStyle onClick={handleClear}>{title}<MdClose/></BlockStyle>
    )
}

function prettyText(text){
    return text.toLowerCase().replace("_", " ")
}

function prettyPotency(potency, obj){
    return obj.min + " > " + potency + " < " + obj.max
}

function prettyBrand(branddata){
    if (branddata?.menu?.products)
        return branddata?.menu?.products[0]?.brand?.name;
    else
        return "brand"
}

export default function ActiveFilters({weights, setWeights, onSale, setOnSale, 
    thc, setTHC, cbd, setCBD, strainType, setStrainType, brand, setBrand, 
    effects, setEffects, location, clearAllFilters, refetch,
    search, setSearch}){

    const {loading: loadingBrand, error: errorBrand, data: dataBrand } = useQuery(
    BRAND_NAME_QUERY, 
    {variables: {retailerId:'4c9422c5-d248-415b-8a88-0a75822c50e6', brandId: brand}, 
    fetchPolicy: "network-only"})

    return(
        <Wrapper>
            {onSale && 
            <Block title={"on sale"} handleClear={() => setOnSale("", location)}/>}
            {strainType && 
            <Block title={prettyText(strainType)} handleClear={() => setStrainType("", location)}/>}
            {brand &&
            <Block title={prettyBrand(dataBrand)} handleClear={() => setBrand("", location)} />}
            {thc &&
            <Block title={prettyPotency("thc", thc)} 
            handleClear={() => setTHC({min:0,max:0,unit:"",clear:true,location:location})} />}
            {cbd &&
            <Block title={prettyPotency("cbd", cbd)}
            handleClear={() => setCBD({min:0,max:0,unit:"",clear:true,location:location})} />}

            {weights && weights.map((w) => (
                <Block title={w}
                handleClear={()=>setWeights(weights, w, location, true, refetch)} />
            ))}  

            {effects && effects.map((e) => (
                <Block title={prettyText(e)}
                handleClear={()=>setEffects(effects, e, location, true, refetch)} />
            ))}
            
            {(weights || onSale || thc || cbd || strainType || brand || effects)
                &&
                <ClearAll onClick={()=>clearAllFilters()} data-cy="clearAll">clear all filters</ClearAll>
            }
            {search &&
            <Block title={"search= " + prettyText(search)} handleClear={() => setSearch("", location)} />}

        </Wrapper>
    )
}