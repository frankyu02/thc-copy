import React from "react";
import styled from "styled-components";
import PaginationBar from "./paginationBar";
import MenuCard from "./menuCard/menuCard";
import { number } from "prop-types";

const MenuGridStyles = styled.div`
.container {
    display: flex;
    justify-content: flex-end;
    .wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 90px;
            .grid {
            display: grid;   
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 1fr;
            width: 100%;
            border-top: 1px solid black;
            border-left: 1px solid black;
            .cell {
                box-sizing: border-box;
                height: 588px;
                border-bottom: 1px solid black;
                border-right: 1px solid black;
                background: #F0F0F0;
            }
        }
    }
}
@media (max-width: 1310px) {
    .container {
        .wrapper {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }
}
@media (max-width: 780px) {
    
    max-width: 100%;
    .container {
        display: flex;
        justify-content: center;
        max-width: 100%;
        .wrapper {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 60px;
            .grid {
                display: flex;   
                flex-direction: column;
                width: 100%;
                background: #F0F0F0;
                border: none;
                padding: 10px;
                border: 1px solid black;
                .cell {
                    box-sizing: border-box;
                    border: 1px solid black;
                    height: auto;
                    margin-bottom: 30px;
                }
                .cell:last-child {
                    margin-bottom: 0px;
                }
                .cell:nth-child(9n+9) {
                    margin-bottom: 0px;
                } 
            }
        }
    }
}
`

const ProductsGrid = ({setPageOffset, products, addToCart, location, numberOfProducts, productsPerPage, page }) => {
    if (products){
        return (
            <MenuGridStyles data-cy="menuGrid">
                <div className="container">
                    <div className="wrapper">
                        <div className="grid">
                            {products.map((item, i) => {
                                return (
                                <div className="cell" key={i}>
                                    <MenuCard product={item} addToCart={addToCart}/>
                                </div> 
                            )})}
                        </div>
                        <PaginationBar 
                            setPageOffset={setPageOffset} 
                            numberOfProducts={numberOfProducts} 
                            productsPerPage={productsPerPage}
                            location={location}
                            page={page}
                        />
                    </div>
                </div>
            </MenuGridStyles>
        )
    } else {
        return (<>loading...</>)
    }
}

export default ProductsGrid;