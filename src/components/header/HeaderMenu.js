import * as React from "react"
import { useRef, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderMenuStyled } from "./HeaderMenu.styled"
import { PromoBar } from "./components/promobar"
import { Header } from "./components/header"
import { useState } from "react"
import ProductCart from "./components/Cart/productCart"
import { CheckoutContext } from "../../contexts/checkout"

export const HeaderMenu = () => {
  const data = useStaticQuery(graphql`
        query { 
         site {
                siteMetadata {
                    title
                    siteUrl
                }
            }
             wp {
    acfOptionsHeaderOptions {
      preHeader {
        promobarText
      }
    }
  }
        }
    `)
  
  const {checkout} = useContext(CheckoutContext);
  const logoText = data?.site?.siteMetadata?.title
  const promobarText = data?.wp?.acfOptionsHeaderOptions?.preHeader?.promobarText
  const headerRef = useRef()
  const [closed, setClosed] = useState(true);
  var Quanttotal = 0;
    for(var i = 0; i < checkout?.items?.length; i++){
        Quanttotal += checkout?.items[i]?.quantity;
    }
  return (
    <HeaderMenuStyled cartState={closed}>
      <div ref={headerRef}> {/*header height calculation */}
        <PromoBar promoText={promobarText} />
        <Header headerRef={headerRef}
                logoText={logoText}
                cartState={closed}
                setCartState={setClosed}
                Quantity={Quanttotal}
                 />
        <ProductCart closed={closed} setClosed={setClosed} />
      </div>

    </HeaderMenuStyled>


  )
}

export default HeaderMenu


