import * as React from "react"
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

  const logoText = data?.site?.siteMetadata?.title
  const promobarText = data?.wp?.acfOptionsHeaderOptions?.preHeader?.promobarText

  return (
    <HeaderMenuStyles>
      <PromoBar promoText={promobarText} />
      <Header logoText={logoText} />
    </HeaderMenuStyles>
  )
}

export default HeaderMenu
