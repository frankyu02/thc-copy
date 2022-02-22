import React, {useEffect, useState, useReducer} from 'react';
import styled from 'styled-components';
import ProductsGrid from './productsGrid';

//Apollo
import { useApollo } from '../../apollo/apollo';
import { useQuery, useMutation } from '@apollo/client';
import  MENU_QUERY  from '../../apollo/queries/menu.graphql'
import MENU_SALE_QUERY from '../../apollo/queries/menu-sale.graphql'
import  RETAILERS_QUERY from '../../apollo/queries/retailerlist.graphql'
import gql from 'graphql-tag'

//Helpers
import queryString from 'query-string'
import { createVariablesObj } from '../../utils/menu/queryUtils';
import { useQueryParam, StringParam, ArrayParam, ObjectParam, 
    JsonParam, BooleanParam } from 'use-query-params'
import { navigate } from 'gatsby';
import { setCategory, setSubcategory, setTHC, 
    setEffects, setOnSale, setStrainType } from '../../utils/menu/setFilters';
import { useLocation } from '@reach/router';
import Breadcrumbs from './options/Breadcrumbs';
import MenuFilter from './MenuFilter';
import CategoryWidget from './CategoryWidget';

const TopOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 20px;
`;

const LayoutWrapper = styled.div`
    display: flex;
`;

const ProductCount = styled.div`
    font-family: "Integral CF";
    font-size: 14px;
    margin-right: 40px;
`;

const Wrapper = styled.div`
    width: 20%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h3{
        font-size: 16px;
    }
`;

const TestingDisplay = styled.div`
    margin: 5px;
    border: 3px solid #3caff6;
    padding: 10px;
    border-radius: 5px;
    width: 300px;
`;

const TestButtons = styled.div`
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    button{
        margin: 5px;
        padding: 3px;
    }
`;

export default function MenuHubApollo(){
    //Single Value Filters
    const [category, setCategoryQuery] = useQueryParam('category', StringParam);
    const [subcategory, setSubategoryQuery] = useQueryParam('subcategory', StringParam);
    const [thc, setThcQuery] = useQueryParam('thc', JsonParam)
    const [strainType, setStrainTypeQuery] = useQueryParam('straintype', StringParam)
    ///On Sale
    const [onSale, setOnSaleQuery] = useQueryParam('onsale', BooleanParam)

    //Multi Value Filters
    const [effects, setEffectsQuery] = useQueryParam('effects', ArrayParam);

    //Pagination States
    const [pageLimit, setPageLimit] = useState(12);
    const [pageOffset, setPageOffset] = useState(0);
    const [pageNumber, setPageNumberQuery] = useQueryParam('page', StringParam)

    //Others States n Variables
    const [menuVariables, setMenuVariables] = useState({});
    const location = useLocation();

     //Queries
    const {loading, error, data, refetch} = useQuery(
        onSale ? MENU_SALE_QUERY : MENU_QUERY, 
        {variables: menuVariables, fetchPolicy: "network-only" })

    //Debugging Stuff
    const [count, setCount] = useState(0);
    
    
    useEffect(()=>{
        //when category changes, increase count
        setCount(count+1);

        console.log("----useEffect hit!----")
        console.log("useEffect onSale-->", onSale)
        //Re-Query with new variables
        setMenuVariables(createVariablesObj({
            retailerId: '4c9422c5-d248-415b-8a88-0a75822c50e6',
            category: category,
            subcategory: subcategory,
            strainType: strainType,
            effects: effects,
            potencyThc: thc,
            limit: pageLimit,
            offset: ((pageNumber-1)*pageLimit),
            onSale: onSale
        }));

        console.log("----useEffect offset->", pageOffset)
        console.log("----useEffect menuVariables->", menuVariables)
        
    },[category, subcategory, effects, thc, pageNumber, strainType])
    
    return(
        <div className="container">
        <TopOptions>
            <Breadcrumbs 
                category={category}
                subcategory={subcategory}
                location={location}
            />
            <div style={{display: 'flex', alignItems: 'center'}}>
                <ProductCount>
                    {data?.menu.productsCount ? data.menu.productsCount : 0} PRODUCTS
                </ProductCount>
                <div>SORT</div>
            </div>
        </TopOptions>
        <LayoutWrapper>
        <Wrapper>
            <CategoryWidget
                category={category}
                subcategory={subcategory}
                setCategory={setCategory}
                setSubcategory={setSubcategory}
                location={location}
            />
            <MenuFilter 
                location={location}
                onSale={onSale}
                setOnSale={setOnSale}
                effects={effects}
                setEffects={setEffects}
                strainType={strainType}
                setStrainType={setStrainType}
            />
        </Wrapper>

        { (data && !loading) ?
            <ProductsGrid 
                setPageOffset={setPageOffset} 
                numberOfProducts={data?.menu?.productsCount}
                productsPerPage={pageLimit}
                products={data?.menu?.products} 
                location={location}
            />
            :
            (
                (loading) ?
                <>loading...MenuHubApollo</>
                :
                <>error...MenuHubApollo</>
            )
        }
        </LayoutWrapper>
        </div>
    )
}