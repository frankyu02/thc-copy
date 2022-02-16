import React, {useEffect, useState, useReducer} from 'react';
import styled from 'styled-components';
import { useQueryParam, StringParam } from 'use-query-params'
import { navigate } from 'gatsby';


const Wrapper = styled.div`
    width: 100vw;
    height: 30vh;
    background: #d3fff2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TestingDisplay = styled.div`
    margin: 5px;
    border: 3px solid #3caff6;
    padding: 10px;
    border-radius: 5px;
    width: 200px;
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
    const [category, setCategory] = useQueryParam('category', StringParam);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        //when category changes, increase count
        setCount(count+1);
    },[category])
    
    return(
        <Wrapper>
            <TestingDisplay>
                category: {category}
                <br/>
                count: {count}
            </TestingDisplay>
            <TestButtons>
                <h3>setCategory() - native method</h3>
                <button onClick={()=>{setCategory('EDIBLES');console.log("[DCV1: QUERY PARAM DEBUG] category:", category)}}>
                    Change category to EDIBLES
                </button>
                <button onClick={()=>{setCategory('FLOWER');console.log("[DCV1: QUERY PARAM DEBUG] category:", category)}}>
                    Change category to FLOWER
                </button>
                <button onClick={()=>{setCategory('PRE_ROLLS');console.log("[DCV1: QUERY PARAM DEBUG] category:", category)}}>
                    Change category to PRE_ROLLS
                </button>
            </TestButtons>
            <TestButtons>
                <h3>navigate() - work around method</h3>
                <button onClick={()=>{navigate('?category=EDIBLES');console.log("[DCV1: QUERY PARAM DEBUG] category:", category)}}>
                    Change category to EDIBLES
                </button>
                <button onClick={()=>{navigate('?category=FLOWER');console.log("[DCV1: QUERY PARAM DEBUG] category:", category)}}>
                    Change category to FLOWER
                </button>
                <button onClick={()=>{navigate('?category=PRE_ROLLS');console.log("[DCV1: QUERY PARAM DEBUG] category:", category)}}>
                    Change category to PRE_ROLLS
                </button>
            </TestButtons>
        </Wrapper>
    )
}