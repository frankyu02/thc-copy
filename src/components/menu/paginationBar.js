import React from "react";
import styled from "styled-components";
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'
import { setPageNumber } from "../../utils/menu/setFilters";

const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MoveButton = styled.div`
    margin: 6px;
    padding: 0px;
    color: black;
    button{
        background: none;
        border: none;
        &:hover{
        cursor: pointer;
        color: var(--lightpurple);
        }
        &:disabled{
            pointer-events: none;
        }
    }
`;

const PageButton = styled.div`
    margin: 6px;
    border: 1px solid black;
    padding: 7px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.selected ? '100%' : '20%'};
    font-family: "Integral CF";
    font-size: 10px;
    color: black;
    &:hover{
        cursor: pointer;
        color: white;
        background: var(--lightpurple);
        border: 1px solid var(--lightpurple);
        opacity: 100%;
    }
`;
const TransitionButton = styled.div`
    margin: 6px;
    border: 1px solid black;
    padding: 7px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.selected ? '100%' : '20%'};
    font-family: "Integral CF";
    font-size: 10px;
    color: black;
    pointer-events: none;
`
const PageButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PaginationBar = ({setPageOffset, numberOfProducts, productsPerPage, location, page}) => {
    const totalPages = Math.ceil(numberOfProducts / productsPerPage)
    let pageMax = 7;
    if(pageMax > totalPages){
        pageMax = totalPages;
    }
    let pageStart = totalPages - pageMax + 1;
    if(parseInt(page) <= totalPages - pageMax){
        pageStart = parseInt(page);
    }
    return (
        <>
        <Wrapper className="paginationDiv">
            <MoveButton>
                <button disabled={parseInt(page) === 1} 
                onClick={() => {setPageNumber((parseInt(page) - 1), location)}}
                className="paginationBack">
                    <MdArrowBackIos/>
                </button>
            </MoveButton>

            <PageButtonsWrapper>
                {parseInt(page) > 2 && pageMax != totalPages &&
                <>
                    <PageButton onClick={() => {
                        setPageNumber(1, location)
                    }}>
                        1
                    </PageButton>    
                    <TransitionButton >
                        ...
                    </TransitionButton>
                </>
                }
                {pageStart != 1 && parseInt(page) <= totalPages - pageMax + 1 && 
                    <PageButton onClick={() => {
                        setPageNumber(parseInt(page) - 1, location)
                    }}>
                        {parseInt(page) - 1}
                    </PageButton>
                }
                {
                    [...Array(totalPages)].slice(pageStart - 1, pageStart+pageMax - 1).map((e, i) => (
                        <PageButton key={i} onClick={() => {
                            // console.log("goToPage("+(i+1)+")")
                            setPageNumber(pageStart - 1 + i + 1, location)
                        }} selected={pageStart + i === parseInt(page)}>
                            {pageStart + i}
                        </PageButton>
                    ))
                }
                {pageStart != totalPages - pageMax + 1 &&
                    <>
                        <TransitionButton>
                            ...
                        </TransitionButton> 
                        <PageButton key={totalPages} onClick={() => {
                            setPageNumber(totalPages, location)
                        }}>
                            {totalPages}          
                        </PageButton>
                    </>
                }
            </PageButtonsWrapper>

            <MoveButton>
                <button disabled={parseInt(page) === totalPages} 
                onClick={() => {setPageNumber((parseInt(page) + 1), location)}}
                className="paginationNext">
                    <MdArrowForwardIos/>
                </button>
            </MoveButton>
        </Wrapper>
        </>
    )
}

export default PaginationBar;
