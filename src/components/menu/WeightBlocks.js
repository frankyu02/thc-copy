import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: block;
    padding: 5px;
    padding-left: -5px;
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

export default function WeightBlocks({availWeights, weights, setWeights, location}){
    console.log("availWeights---->", availWeights)
    if(availWeights){
        return(
            <Wrapper>
                {
                    availWeights.map((weightLabel)=>{
                        const selected = weights ? (weights.includes(weightLabel)) : false;
                        return(
                            <Block 
                                className={selected ? "on" : ""}
                                onClick={()=>{setWeights(weights, weightLabel, location, selected)}}
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