import React from "react"
import "normalize.css"
import GlobalStyles from "../../styles/GlobalStyles"
import Typography from "../../styles/Typography"
import { HeaderMenu } from "../header/HeaderMenu"
import { Footer } from "../footer/Footer"
import { AgeGate } from "../AgeGate/AgeGate";
import { ShopLink } from "../ui/shop_link/ShopLink"


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <AgeGate/>
      <HeaderMenu />
      <ShopLink/>
      <main>
        {children}
      </main>
      <Footer />      
    </>
  )
}

export default Layout;