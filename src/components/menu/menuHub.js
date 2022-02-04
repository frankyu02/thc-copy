import React from "react";
import styled from "styled-components";
import PaginationBar from "./paginationBar";
import MenuCard from "./menuCard/menuCard";

const MenuGridStyles = styled.div`
    .wrapper {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        margin-bottom: 90px;
            .grid {
            display: grid;   
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 1fr;
            width: 100%;
            .cell {
                box-sizing: border-box;
                border: 1px solid black;
                height: 588px;
            }
        }
    }
`

const MenuGrid = ({ products }) => {
    return (
        <MenuGridStyles>
            <div className="wrapper">
                <div className="grid">
                    {products.map((item, i) => {
                        return (
                        <div className="cell" key={i}>
                            <a href={`/product/`+item.slug}>
                                <MenuCard product={item}/>
                            </a>
                        </div> 
                    )})}
                </div>
                <PaginationBar/>
            </div>
        </MenuGridStyles>
    )
}

export default MenuGrid;