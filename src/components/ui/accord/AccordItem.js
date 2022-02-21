import React, {Children, useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 5px 10px;
    border-top: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    margin-left: 0px;
`;

const Content = styled.div`
    width: 100%;
    &.open{
        height: 100%;
        padding: 30px 0px;
    }
    &.closed{
        height: 0px;
        overflow: hidden;
        padding: 0px 0px;
    }
    
`;

const Title = styled.div`
    font-family: 'MADE Outer Sans Light'
    font-weight: 900;
    font-size: 20px;
    padding: 5px 0px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    &:hover{
        cursor: pointer;
    }
`

export default function AccordItem({title, defaultOpen, children}){
    const [open, setOpen] = useState(defaultOpen)
    return(
        <Wrapper>
        {title && <Title onClick={()=>{setOpen(!open)}}>{title}</Title>}
        <Content className={open ? 'open' : 'closed'}>
            {children}
        </Content>
        </Wrapper>
    )
}