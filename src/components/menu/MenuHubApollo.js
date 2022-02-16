import React, {useEffect, useState, useReducer} from 'react';
import styled from 'styled-components';
import { useQueryParam, StringParam } from 'use-query-params'


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: '#d3fff2';
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TestingDisplay = styled.div`
    margin: 5px;
    border: 3px solid '#3caff6';
    padding: 10px;
    border-radius: 5px;
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

export default function MenuHubApollo({history}){
    const [category, setCategory] = useQueryParam('category', StringParam);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        //when category changes, increase count
        setCount(count+1);
    },[category])

    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    useEffect(() => {
        // listen for changes to the URL and force the app to re-render
        history.listen(() => {
            forceUpdate();
        });
    }, [])
    return(
        <Wrapper>
            <TestingDisplay>
                category: {category}
                <br/>
                count: {count}
            </TestingDisplay>
            <TestButtons>
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
        </Wrapper>
    )
}