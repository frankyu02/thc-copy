import React from "react";
import ProductPage from "../templates/ProductPage";
import products from "../components/menu/dutchie-dumby-data.json";
export default function test(){
    return(
        <ProductPage product={products.data.dutchieplus.menu.products[0]}/>
    )
}