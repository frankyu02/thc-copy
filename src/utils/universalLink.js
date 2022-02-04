import { Link } from "gatsby"
import React from "react"

export const UniversalLink = ({ children, to, ...rest }) => {

  const itExternalLink = to?.includes("http")
  return (<>
      {
        itExternalLink ? <a target="_blank" rel="noopener noreferrer" href={to && to}  {...rest}>{children} </a> :
          < Link to={to && to}  {...rest}> {children}</Link>
      }

    </>

  )
}
