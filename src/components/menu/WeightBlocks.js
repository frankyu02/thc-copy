import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: block;
    padding: 5px;
    padding-left: 0px;
    margin-left: -5px;
`;

const Block = styled.div`
    margin: 5px;
    border: 1px solid black;
    padding: 5px 18px;

    display: flex;
    justify-content: center;
    align-items: center;
    display: inline-block;

    font-family: 'MADE Outer Sans Light';
    font-size: 12px;

    &:hover{
        cursor: pointer;
        background: var(--lightpurple);
        color: white;
        border: 1px solid var(--lightpurple);
    }

    &.on{
        background: var(--darkpurple);
        border: 1px solid var(--darkpurple);
        color: white;
    }
`;

export default function WeightBlocks({availWeights, weights, setWeights, 
    location, refetch}){
    console.log("availWeights---->", availWeights)
    if(availWeights){
        let tempWeights = [];
        availWeights.forEach((weight)=>{
            tempWeights.push(weight.replace('g', ''));
        })
        tempWeights.sort(function(a, b){return a-b});
        let sortedWeights = [];
        tempWeights.forEach((weight)=>{
            sortedWeights.push(weight + 'g');
        })
        return(
            <Wrapper data-cy="weights">
                {
                    sortedWeights.map((weightLabel)=>{
                        const selected = weights ? (weights.includes(weightLabel)) : false;
                        return(
                            <Block 
                                className={selected ? "on" : ""}
                                onClick={()=>{
                                    setWeights(weights, weightLabel, location, selected, refetch)
                                }}
                            >
                                {weightLabel}
                            </Block>
                        )
                    })
                }
            </Wrapper>
        )
    }else{
        return(<>empty</>)
    }
    
}