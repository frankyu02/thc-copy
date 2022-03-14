import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { LinkStyles } from "./ShopLinkStyle"
import { MENU_LINK } from "../../../utils/routes"
import { UniversalLink } from "../../../utils/universalLink"
import { GatsbyImage } from "gatsby-plugin-image"

export const ShopLink = () => {
  const data = useStaticQuery(graphql`
        query {
            wp {
                thcwebsiteGeneralOption {
                    shoplink {
                        fieldGroupName
                        shopLink
                        shopLogo {
                          slug
                          localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                          }
                        }
                    }
                }
            }
        }
    `)
  const shopLogo = data?.wp?.thcwebsiteGeneralOption?.shoplink?.shopLogo?.localFile?.childImageSharp?.gatsbyImageData;
  return (
    <LinkStyles>
      <UniversalLink aria-label={"link to menu"} to={'/curated-menu'}>
        <GatsbyImage image={shopLogo} imgClassName="gatsby-img"/>
      </UniversalLink>
    </LinkStyles>
  )
}