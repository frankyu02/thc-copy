import React from "react";
import styled from "styled-components";
import products from "./dutchie-dumby-data.json";
import PaginationBar from "./paginationBar";
import MenuCard from "./menuCard/menuCard";

const MenuGridStyles = styled.div`
    .grid {
        display: grid;   
        grid-template-columns: repeat(3, 1fr);
        .cell {
            box-sizing: border-box;
            border: 1px solid black;
            width: 388px;
            height: 589px;
        }
    }
`

const MenuGrid = ( products, addToCart ) => {
    
    return (
        <MenuGridStyles>
            <div className="grid">
                {products.map((item, index) => {
                    <div className="cell">
                        <MenuCard item={item} addToCart={addToCart}/>
                    </div>
                })}
            </div>
            <PaginationBar/>
        </MenuGridStyles>
    )
}

export default MenuGrid;