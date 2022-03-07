import React from "react";

import { useQuery } from '@apollo/client';
import PRODUCT_QUERY from '../apollo/queries/product.graphql';
import ProductPageHub from "../components/productpage/ProductPageHub";


export default function ProductPage({id, pageContext, location}){

    var backupId = ""
    if (!id && location){
        backupId = location.pathname.substring(9)
    }

    const {loading: loading, error: error, data: data } = useQuery(
    PRODUCT_QUERY, 
    {variables: {retailerId:"4e81dfd3-e789-4712-b60c-5e22e7844322", id: (id|| backupId)}, fetchPolicy: "network-only" })
    
    console.log("Product Page - location",location.pathname);
    
    if (typeof window == "undefined"){
        const tempdata = {
            product: pageContext.product
        };
        return(
            <>
            <ProductPageHub 
                data={tempdata}
                loading={false}
                error={false}
            />
            </>
        )
    }else{
        return(
            <>
            <ProductPageHub 
                data={data}
                loading={loading}
                error={error}
            />
            </>
        )
    }
}