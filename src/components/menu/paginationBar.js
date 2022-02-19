import React from "react";
import styled from "styled-components";
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'

const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MoveButton = styled.div`
    margin: 6px;
    margin-top: 10px;
    padding: 0px;
    color: black;

    &:hover{
        cursor: pointer;
        color: var(--lightpurple);
    }
`;

const PageButton = styled.div`
    margin: 6px;
    border: 1px solid black;
    padding: 7px;
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Integral CF";
    font-size: 15px;
    color: black;

    &:hover{
        cursor: pointer;
        color: white;
        background: var(--lightpurple);
        border: 1px solid var(--lightpurple);
    }
`;

const PageButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PaginationBar = ({setPageOffset, numberOfProducts, productsPerPage}) => {
    const totalPages = Math.ceil(numberOfProducts / productsPerPage)

    return (
        <>
        <div>
            totalPages: {totalPages}
        </div>
        <Wrapper>
            <MoveButton><MdArrowBackIos/></MoveButton>

            <PageButtonsWrapper>
                {
                    [...Array(totalPages)].map((e, i) => (
                        <PageButton key={i} onClick={() => {
                            const offset = i*productsPerPage;
                            console.log("goToPage("+(i+1)+")")
                            console.log("setPageOffset("+(offset)+")")
                            setPageOffset(offset)
                        }}>
                            {i+1}
                        </PageButton>
                    ))
                }
            </PageButtonsWrapper>

            <MoveButton><MdArrowForwardIos/></MoveButton>
        </Wrapper>
        </>
    )
}

export default PaginationBar;
