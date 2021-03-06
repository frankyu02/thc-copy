import React from "react"
import { Link } from "gatsby"
import { ORDER_NOW } from "../../../utils/routes"

export const MainButton = ({ children, url, linkType, ...rest }) => {
  return (
    linkType === "a" ? <a href={url} className="main_button" {...rest}> {children} </a> :
      <Link to={url || ORDER_NOW} className="main_button"   {...rest}>{children}</Link>
  )
}

export default MainButton