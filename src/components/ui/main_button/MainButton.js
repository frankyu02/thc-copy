import React from "react"
import { Link } from "gatsby"
import { ORDER_NOW } from "../../../utils/routes"

export const MainButton = ({ children, url, target }) => {
  return (
    <Link to={url || ORDER_NOW} className="main_button" target={target}>{children}</Link>
  )
}

export default MainButton