import React, {useEffect, useState, useReducer} from 'react';
import styled from 'styled-components';
import { useQueryParam, StringParam, ArrayParam } from 'use-query-params'
import { navigate } from 'gatsby';
import { setCategory, setSubcategory, setEffects } from '../../utils/menu/setFilters';
import { useLocation } from '@reach/router';
import { useApollo } from '../../apollo/apollo';

const Wrapper = styled.div`
    width: 100vw;
    height: 30vh;
    background: #d3fff2;
    display: flex;
    justify-content: center;
    align-items: center;

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
    const [count, setCount] = useState(0);
    const location = useLocation();
    useEffect(()=>{
        //when category changes, increase count
        setCount(count+1);
        console.log("[DCV1: QUERY PARAM DEBUG]: effects: ", effects)
    },[category, effects])
    return(
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
    )
}