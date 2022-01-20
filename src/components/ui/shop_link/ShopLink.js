import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { graphql, useStaticQuery } from "gatsby"
import { LinkStyles } from "./ShopLinkStyle"
import { MENU_LINK } from "../../../utils/config"

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
  const { wp: { thcwebsiteGeneralOption: { shoplink: { shopLogo } } } } = data;
  return (
    <LinkStyles>
      <a target={'_blank'} href={MENU_LINK}>
        <img className={'link'} src={shopLogo.localFile.publicURL} alt='link_to_hop'/>
      </a>
    </LinkStyles>
  );
};