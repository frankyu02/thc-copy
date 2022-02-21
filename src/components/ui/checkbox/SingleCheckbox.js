import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Box = styled.div`
    height: 30px;
    width: 30px;
    border: 1px solid black;
    background: white;
    &.on{
        background: var(--darkpurple)
    }
    &.off{
        &:hover{
            border: 1px solid var(--darkpurple);
            background: var(--lightpurple);
        }
    }
    &:hover{
        cursor: pointer;
    }
`;

const Label = styled.div`
    font-family: 'MADE Outer Sans Light';
    font-size: 12px;
    text-transform: capitalize;
    margin-left: 10px;
`;

export default function SingleCheckbox({checkState, setCheckState, 
    location, label}){
    const prettyLabel = label.toLowerCase().replace("_"," ")
    return(
        <Wrapper>
            <Box 
            className={checkState ? "on" : "off"}
            onClick={()=>{setCheckState(!checkState+0, location)}}/>
            <Label>{prettyLabel}</Label>
        </Wrapper>
    )
}