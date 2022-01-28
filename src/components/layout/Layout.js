import React from "react"
import "normalize.css"
import GlobalStyles from "../../styles/GlobalStyles"
import Typography from "../../styles/Typography"
import { HeaderMenu } from "../header/HeaderMenu"
import { Footer } from "../footer/Footer"
import { AgeGate } from "../AgeGate/AgeGate";


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <AgeGate/>
      <HeaderMenu />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;