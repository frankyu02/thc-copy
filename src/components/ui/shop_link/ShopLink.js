import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { LinkStyles } from "./ShopLinkStyle"
import { MENU_LINK } from "../../../utils/routes"

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
      <a target={"_blank"} rel={"noreferrer"} href={MENU_LINK}>
        <img className={"link"} src={shopLogo?.localFile?.publicURL} alt="link_to_hop" />
      </a>
    </LinkStyles>
  )
}