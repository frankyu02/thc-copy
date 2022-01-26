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


  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const logoText = data?.site?.siteMetadata?.title
  const promobarText = data?.wp?.acfOptionsHeaderOptions?.preHeader?.promobarText
  const headerRef = useRef()

  return (
    <HeaderMenuStyles>
      <div ref={headerRef}> {/*header height calculation */}
        <PromoBar promoText={promobarText} />
        <Header headerRef={headerRef} setMenuOpen={setMenuOpen} toggleMenu={toggleMenu} menuOpen={menuOpen}
                logoText={logoText} />
      </div>
    </HeaderMenuStyles>


  )
}

export default HeaderMenu
