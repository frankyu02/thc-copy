import { LegendaryStyles } from "./LegendaryStyles"
import React from "react"


const Styled = ({ children }) => {
  return <LegendaryStyles>
    {children}
  </LegendaryStyles>
}

export default Styled