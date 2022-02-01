import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { LinkStyles } from "./ShopLinkStyle"
import { MENU_LINK } from "../../../utils/routes"
import { UniversalLink } from "../../../utils/universalLink"

export const ShopLink = () => {
  const data = useStaticQuery(graphql`
        query {
            wp {
                thcwebsiteGeneralOption {
                    shoplink {
                        fieldGroupName
                        shopLink
                        shopLogo {
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `)
  const shopLogo = data?.wp?.thcwebsiteGeneralOption?.shoplink?.shopLogo
  return (
    <LinkStyles>
      <UniversalLink area-label={"link to menu"} to={MENU_LINK}>
        <img className={"link"} src={shopLogo?.localFile?.publicURL} alt="link to menu" />
      </UniversalLink>
    </LinkStyles>
  )
}