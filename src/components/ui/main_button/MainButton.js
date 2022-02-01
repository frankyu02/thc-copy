import React from "react"
import { Link } from "gatsby"
import { ORDER_NOW } from "../../../utils/routes"

export const MainButton = ({ children, url, ...rest }) => {
  return (
    <Link to={url || ORDER_NOW} className="main_button"   {...rest}>{children}</Link>
  )
}

export default MainButton