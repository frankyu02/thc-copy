import * as React from "react"
import { useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderMenuStyles } from "./HeaderMenuStyles"
import { PromoBar } from "./components/promobar"
import { Header } from "./components/header"

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
  const [menuOpen, SetMenuOpen] = useState(false)
  const toggleMenu = () => {
    SetMenuOpen(!menuOpen)
  }

  const logoText = data?.site?.siteMetadata?.title
  const promobarText = data?.wp?.acfOptionsHeaderOptions?.preHeader?.promobarText
  const headerRef = useRef()

  return (
    <HeaderMenuStyles>
      <div ref={headerRef}> {/*dropdown wrapper */}
        <PromoBar promoText={promobarText} />
        <Header headerRef={headerRef} toggleMenu={toggleMenu} menuOpen={menuOpen} logoText={logoText} />
      </div>
    </HeaderMenuStyles>


  )
}

export default HeaderMenu
