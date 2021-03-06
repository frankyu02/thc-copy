import React, {Children, useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 5px 10px;
    border-top: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    margin-left: 0px;
`;

const Content = styled.div`
    width: 100%;
    transition: max-height 0.5s, padding-top 0.5s, padding-bottom 0.5s;
    transition-timing-function: cubic-bezier(.85,-0.01,.15,1);
    overflow: ${props => props.over ? 'auto' : 'hidden'};
    scrollbar-width: thin;          /* "auto" or "thin" */
    scrollbar-color: var(--darkpurple) var(--lightpurple);   /* scroll thumb and track */ 
    &::-webkit-scrollbar {
        width: 5px;               /* width of the entire scrollbar */
    }
    
    &::-webkit-scrollbar-track {
        background: var(--lightpurple);        /* color of the tracking area */
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: var(--darkpurple);    /* color of the scroll thumb */
    }
    padding-left: 0px;
    padding-right: 0px;

    max-height: ${props => props.open ? "800px" : "0px"};
    padding-top:  ${props => props.open ? "10px" : "0px"};
    padding-bottom:  ${props => props.open ? "10px" : "0px"};

    &.open{
        max-height: 800px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    &.close{
        max-height: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
    }
`;

const Title = styled.div`
    font-family: 'MADE Outer Sans Light';
    font-weight: 900;
    font-size: 14px;
    padding: 5px 0px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .sign {
        float: right;
        font-size: 22px;
    }
    &:hover{
        cursor: pointer;
    }
`

export default function AccordItem({title, defaultOpen, overflowAuto, children, id }){
    const [open, setOpen] = useState(defaultOpen)

    useEffect(() =>{
        setOpen(defaultOpen)
    },[defaultOpen])

    const [client, setClient] = useState(false)
    useEffect(() => {
        setClient(true)
    }, [])

    return(
        <Wrapper>
        {title && <Title onClick={()=>{setOpen(!open)}} data-cy={id}>{title}<div className='sign'>{open ? "-" : "+"}</div></Title>}
        <Content className={(open && client) ? "open" : "close"} over={overflowAuto}>
            {children}
        </Content>
        </Wrapper>
    )
}