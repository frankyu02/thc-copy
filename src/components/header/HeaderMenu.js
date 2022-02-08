import * as React from "react"
import { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderMenuStyled } from "./HeaderMenu.styled"
import { PromoBar } from "./components/promobar"
import { Header } from "./components/header"
import { useState } from "react"
import ProductCart from "./components/Cart/productCart"
import { FilledCart } from "./components/Cart/dummydata"

<<<<<<< HEAD
export const HeaderMenu = () => {
=======

export const HeaderMenu = ({ cart }) => {
>>>>>>> feature/ProductCart
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

  const logoText = data?.site?.siteMetadata?.title
  const promobarText = data?.wp?.acfOptionsHeaderOptions?.preHeader?.promobarText
  const headerRef = useRef()
  const [closed, setClosed] = useState(true);
  return (
    <HeaderMenuStyled cartState={closed}>
      <div ref={headerRef}> {/*header height calculation */}
        <PromoBar promoText={promobarText} />
        <Header headerRef={headerRef}
                logoText={logoText}
                cartState={closed}
                setCartState={setClosed}
                itemLength={FilledCart.items.length}
                 />
        <ProductCart closed={closed} setClosed={setClosed} cart={FilledCart} />
      </div>

    </HeaderMenuStyled>


  )
}

export default HeaderMenu


