import React, {useEffect, useState, useReducer} from 'react';
import styled from 'styled-components';
import MenuGrid from './menuHub';

//Apollo
import { useApollo } from '../../apollo/apollo';
import { useQuery, useMutation } from '@apollo/client';
import  MENU_QUERY  from '../../apollo/queries/menu.graphql'
import  RETAILERS_QUERY from '../../apollo/queries/retailerlist.graphql'
import gql from 'graphql-tag'

//Helpers
import { createVariablesObj } from '../../utils/menu/queryUtils';
import { useQueryParam, StringParam, ArrayParam } from 'use-query-params'
import { navigate } from 'gatsby';
import { setCategory, setSubcategory, setEffects } from '../../utils/menu/setFilters';
import { useLocation } from '@reach/router';

const LayoutWrapper = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
    width: 20vw;
    min-height: 100vh;
    background: #d3fff2;
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
    const [category, setCategoryQuery] = useQueryParam('category', StringParam);
    const [subcategory, setSubategoryQuery] = useQueryParam('subcategory', StringParam);
    const [effects, setEffectsQuery] = useQueryParam('effects', ArrayParam);
    const [menuVariables, setMenuVariables] = useState({});
    const [count, setCount] = useState(0);
    const location = useLocation();

    //Queries
    const {loading, error, data, refetch} = useQuery(MENU_QUERY, {
        variables: menuVariables, fetchPolicy: "network-only" })
    
    useEffect(()=>{
        //when category changes, increase count
        setCount(count+1);

        //Re-Query with new variables
        setMenuVariables(createVariablesObj({
            retailerId: '4c9422c5-d248-415b-8a88-0a75822c50e6',
            category: category,
            subcategory: subcategory,
            effects: effects
        }));
        //refetch(menuVariables)
        console.log("[DCV1: QUERY PARAM DEBUG]: menuData: ", data)
    },[category, subcategory, effects])
    
    return(
        <LayoutWrapper>
        <Wrapper>
            <TestingDisplay>
                category: {category}
                <br/>
                subcategory: {subcategory}
                <br/>
                count: {count}
                <br/>
                effects: {effects}, typeof: {typeof effects}
                <br/>
            </TestingDisplay>
            <TestButtons>
                <h3>setCategory() - my method</h3>
                <button onClick={()=>{setCategory('EDIBLES', location)}}>
                    Change category to EDIBLES
                </button>
                <button onClick={()=>{setCategory('FLOWER', location)}}>
                    Change category to FLOWER
                </button>
                <button onClick={()=>{setCategory('PRE_ROLLS', location)}}>
                    Change category to PRE_ROLLS
                </button>
            </TestButtons>
            <TestButtons>
                <h3>navigate() - stripped down method</h3>
                <button onClick={()=>{navigate('?category=EDIBLES')}}>
                    Change category to EDIBLES
                </button>
                <button onClick={()=>{navigate('?category=FLOWER')}}>
                    Change category to FLOWER
                </button>
                <button onClick={()=>{navigate('?category=PRE_ROLLS')}}>
                    Change category to PRE_ROLLS
                </button>
            </TestButtons>
            <TestButtons>
                <h3>Subcategory</h3>
                <button onClick={()=>{setSubcategory('SINGLES', location)}}>
                    SINGLES
                </button>
                <button onClick={()=>{setSubcategory('PACKS', location)}}>
                    PACKS
                </button>
            </TestButtons>
            <TestButtons>
                <h3>Effects</h3>
                <button onClick={()=>{setEffects(effects, 'HAPPY', location)}}>
                    HAPPY
                </button>
                <button onClick={()=>{setEffects(effects, 'FOCUS', location)}}>
                    FOCUS
                </button>
                <button onClick={()=>{setEffects(effects, 'ENERGIZE', location)}}>
                    ENERGIZE
                </button>
            </TestButtons>
            <TestButtons>
                <h3>Remove Effects</h3>
                <button onClick={()=>{setEffects(effects, 'HAPPY', location, true)}}>
                    HAPPY
                </button>
                <button onClick={()=>{setEffects(effects, 'FOCUS', location, true)}}>
                    FOCUS
                </button>
                <button onClick={()=>{setEffects(effects, 'ENERGIZE', location, true)}}>
                    ENERGIZE
                </button>
            </TestButtons>
        </Wrapper>

        { (data && !loading) ?
            <MenuGrid products={data?.menu?.products} />
            :
            (
                (loading) ?
                <>loading...MenuHubApollo</>
                :
                <>error...MenuHubApollo</>
            )
        }
        </LayoutWrapper>
    )
}