import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 8px 0px;
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
        background: white;
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
    location, label, id}){
    const prettyLabel = label.toLowerCase().replace("_"," ")

    const [client, setClient] = useState(false)
    useEffect(() => {
        setClient(true)
    }, [])

    if (label == "On Sale"){
        console.log("[SingleCheckbox Debug]: checkState, ", checkState)
    }
    
    return(
        <Wrapper data-cy={id.replace(/\s+/g, '').split('.').join("")}>
            <Box 
            className={(checkState && client) ? "on" : "off"}
            onClick={()=>{setCheckState(!checkState+0, location)}}/>
            <Label>{prettyLabel}</Label>
        </Wrapper>
    )
}