import React, {useEffect, useState, useReducer} from 'react';
import styled from 'styled-components';
import ProductsGrid from './productsGrid';

//Apollo
import { useApollo } from '../../apollo/apollo';
import { useQuery, useMutation } from '@apollo/client';
import  MENU_QUERY  from '../../apollo/queries/menu.graphql'
import MENU_SALE_QUERY from '../../apollo/queries/menu-sale.graphql'
import  RETAILERS_QUERY from '../../apollo/queries/retailerlist.graphql'
import BRANDS_QUERY from '../../apollo/queries/brands.graphql'
import gql from 'graphql-tag'

//Helpers
import queryString from 'query-string'
import { createVariablesObj } from '../../utils/menu/queryUtils';
import { useQueryParam, StringParam, ArrayParam, ObjectParam, 
    JsonParam, BooleanParam } from 'use-query-params'
import { navigate } from 'gatsby';
import { setCategory, setSubcategory, setTHC, 
    setEffects, setOnSale, setStrainType,
    setWeights, cbd, setCBD, setBrand } from '../../utils/menu/setFilters';
import { useLocation } from '@reach/router';
import Breadcrumbs from './options/Breadcrumbs';
import MenuFilter from './MenuFilter';
import CategoryWidget from './CategoryWidget';
import Loader from './other/Loader';

//Style Helpers
import { lg } from '../../styles/utils/media_queries';
import {GoSettings} from 'react-icons/go';

const TopOptions = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 20px;

    .breadcrumbs{
        margin-bottom: 40px;
    }

    .other{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .sort{
        display: none;
    }

    .filtersButton{
        border: 2px solid var(--darkpurple);
        color: var(--darkpurple);
        font-size: 14px;
        font-family: "Integral CF";
        padding: 7px;
        margin: 3px;
        text-align: center;
        svg{
            margin-right: 5px;
        }
    }

    ${lg(`
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding-bottom: 30px;
        .breadcrumbs{
            width: 100%;
            margin-bottom: 0px;
        }
        .other{
            display: flex;
            justify-content: flex-end;
        }
        .sort{
            display: block;
        }
        .filtersButton{
            display: none;
        }
    `)}
`;

const LayoutWrapper = styled.div`
    display: flex;
`;

const ProductCount = styled.div`
    font-family: "Integral CF";
    font-size: 14px;
    margin-right: 40px;
`;

const FilterWrapper = styled.div`
    position: fixed;
    top: 120px;
    right: ${(props) => props.open ? '0' : "-100%"};
    background: white;
    width: 85vw;
    height: calc(100vh - 120px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 100;
    padding: 0px 20px;

    transition: all 0.5s ease;

    ${lg(`
        position: static;
        width: 20%;
        min-height: 100vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height: auto;
        h3{
            font-size: 16px;
        }
        overflow-y: hidden;
    `)}
`;

const BackgroundMobileFilter = styled.div`
    position: fixed;
    top: 0;
    left: ${props => props.open ? "0" : "-100%"};
    width: 15vw;
    height: 100vh;
    index:  ${props => props.open ? "99" : "-5"};
    background: var(--darkpurple);
    opacity: 0.4;
    transition: all 0.5s ease;
    ${lg(`
        display: none;
    `)}
`;

const AnimationLoader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export default function MenuHubApollo(){
    //Single Value Filters
    const [category, setCategoryQuery] = useQueryParam('category', StringParam);
    const [subcategory, setSubategoryQuery] = useQueryParam('subcategory', StringParam);
    const [thc, setThcQuery] = useQueryParam('thc', JsonParam)
    const [cbd, setCbdQuery] = useQueryParam('cbd', JsonParam)
    const [strainType, setStrainTypeQuery] = useQueryParam('straintype', StringParam)
    const [brand, setBrandQuery] = useQueryParam('brand', StringParam)
    ///On Sale
    const [onSale, setOnSaleQuery] = useQueryParam('onsale', BooleanParam)
    ///Search
    const [search, setSearchQuery] = useQueryParam('search', StringParam)

    //Multi Value Filters
    const [effects, setEffectsQuery] = useQueryParam('effects', ArrayParam);
    const [weights, setWeightsQuery] = useQueryParam('weights', ArrayParam);

    //Pagination States
    const [pageLimit, setPageLimit] = useState(12);
    const [pageOffset, setPageOffset] = useState(0);
    const [pageNumber, setPageNumberQuery] = useQueryParam('page', StringParam)

    //Others States n Variables
    const [menuVariables, setMenuVariables] = useState({});
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     //Queries
    const {loading: loading, error: error, data: data } = useQuery(
        onSale ? MENU_SALE_QUERY : MENU_QUERY, 
        {variables: menuVariables, fetchPolicy: "network-only" })

    const {loading: loadingBrands, error: errorBrands, data: dataBrands } = useQuery(
        BRANDS_QUERY, 
        {variables: {retailerId:'4c9422c5-d248-415b-8a88-0a75822c50e6'}, 
        fetchPolicy: "network-only", 
        nextFetchPolicy: "cache-fist"})

        

    //Debugging Stuff
    const [count, setCount] = useState(0);
    
    
    useEffect(()=>{
        //when category changes, increase count
        setCount(count+1);

        console.log("----useEffect hit!----")
        console.log("useEffect onSale-->", onSale)
        console.log("search--->, ", search)
        //Re-Query with new variables
        setMenuVariables(createVariablesObj({
            retailerId: '4c9422c5-d248-415b-8a88-0a75822c50e6',
            category: category,
            subcategory: subcategory,
            strainType: strainType,
            effects: effects,
            potencyThc: thc,
            potencyCbd: cbd,
            limit: pageLimit,
            offset: ((pageNumber-1)*pageLimit),
            onSale: onSale,
            weights: weights,
            brand: brand,
            search: search
        }));

    },[category, subcategory, effects, thc, cbd, pageNumber, strainType,
        weights, brand, search])
    
    useEffect(() => {
        if (mobileMenuOpen) {
            document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
            // document.getElementsByTagName('html')[0].style.position = 'fixed';
            // document.getElementsByTagName('body')[0].style.position = 'fixed';
        }else{
            document.getElementsByTagName('html')[0].style.overflowY = '';
            // document.getElementsByTagName('html')[0].style.position = 'static';
            // document.getElementsByTagName('body')[0].style.position = 'static';
        }
    }, [mobileMenuOpen]);

    let page= pageNumber || 1;
    return(
        <>
        <div className="container">
        <TopOptions>
            <div className='breadcrumbs'>
                <Breadcrumbs 
                    category={category}
                    subcategory={subcategory}
                    location={location}
                />
            </div>
            <div className={"other"}>
                <ProductCount>
                    {data?.menu.productsCount ? data.menu.productsCount : 0} PRODUCTS
                </ProductCount>
                <div className='sort'>SORT</div>
                <div className='filtersButton' onClick={()=>{setMobileMenuOpen(true)}}><GoSettings/>FILTERS</div>
            </div>
        </TopOptions>
        <LayoutWrapper>
        <FilterWrapper open={mobileMenuOpen}>
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
                weights={weights}
                setWeights={setWeights}
                availWeights={data?.menu?.weights}
                thc={thc}
                setTHC={setTHC}
                cbd={cbd}
                setCBD={setCBD}
                brand={brand}
                setBrand={setBrand}
                allBrands={dataBrands?.menu?.brands}
            />
        </FilterWrapper>

        { (data && !loading) ?
            <ProductsGrid 
                setPageOffset={setPageOffset} 
                numberOfProducts={data?.menu?.productsCount}
                productsPerPage={pageLimit}
                products={data?.menu?.products} 
                location={location}
                page={page}
            />
            :
            (
                (loading) ?
                <AnimationLoader>
                    <Loader />
                </AnimationLoader>
                :
                <>error...MenuHubApollo</>
            )
        }
        </LayoutWrapper>
        </div>
        <BackgroundMobileFilter open={mobileMenuOpen} onClick={()=>{setMobileMenuOpen(false)}}/>
        </>
    )
}