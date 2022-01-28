import * as React from "react"
import { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderMenuStyled } from "./HeaderMenu.styled"
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


  const logoText = data?.site?.siteMetadata?.title
  const promobarText = data?.wp?.acfOptionsHeaderOptions?.preHeader?.promobarText
  const headerRef = useRef()

  return (
    <HeaderMenuStyled>
      <div ref={headerRef}> {/*header height calculation */}
        <PromoBar promoText={promobarText} />
        <Header headerRef={headerRef}
                logoText={logoText} />
      </div>

    </HeaderMenuStyled>


  )
}

export default HeaderMenu


