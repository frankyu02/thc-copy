import React from "react"
import { ORDER_NOW } from "../../../utils/routes"

export const MainButtonShop = ({ children, url, target }) => {
    return (
        <a href={url || ORDER_NOW} rel="nofollow" className="main_button" target={target}>{children}</a>
    )
}

export default MainButtonShop