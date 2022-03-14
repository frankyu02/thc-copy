import React from "react";
import styled from "styled-components";
import { MdErrorOutline } from "react-icons/md";
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        margin-top: 10px;
        text-align: center;
        font-size: 16px;
        span{
            font-weight: bold;
            &:hover{
                cursor: pointer;
            }
        }
    }
    .icon{
        font-size: 50px;
    }
`;
export default function NoProduct( { clear } ){
    return(
        <Wrapper>
            <h2>NO RESULTS FOUND</h2>
            <p className="icon"><MdErrorOutline /></p>
            <p>try adjusting your search or <span onClick={()=>clear()}>Clear Filters</span> <br /> to find what you're looking for.</p>
        </Wrapper>
    )
}