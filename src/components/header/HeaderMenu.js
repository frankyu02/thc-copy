import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderMenuStyles } from "./HeaderMenuStyles"
import { PromoBar } from "./components/promobar"
import { Header } from "./components/header"

export const HeaderMenu = () => {
  const data = useStaticQuery(graphql`
        query {
            allWpMenuItem(filter: {locations: {eq: MENU_HEADER}, parentDatabaseId: {eq: 0}}) {
                edges {
                    node {
                        label
                        url
                        childItems {
                            nodes {
                                label
                                url
                            }
                        }
                    }
                }
            }
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


  const navItems = data?.allWpMenuItem?.edges
  const logoText = data?.site?.siteMetadata?.title
  const promobarText = data?.wp?.acfOptionsHeaderOptions?.promobarText
  return (
    <HeaderMenuStyles>
      <PromoBar promoText={promobarText} />
      <Header logoText={logoText} navItems={navItems} />
    </HeaderMenuStyles>
  )
}

export default HeaderMenu
