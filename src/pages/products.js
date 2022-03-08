import React from "react"
import { Router } from "@reach/router"
import ProductPage from "../templates/ProductPage"

export default function Products()
{
    return(
        <Router>
            <ProductPage  path="/products/:id" />
        </Router>
    )
}
