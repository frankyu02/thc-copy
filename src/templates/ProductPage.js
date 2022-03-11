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
    {variables: {retailerId:"4c9422c5-d248-415b-8a88-0a75822c50e6", id: (id|| backupId)}, fetchPolicy: "network-only" })
    
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