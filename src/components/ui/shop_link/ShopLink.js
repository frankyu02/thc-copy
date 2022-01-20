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
                            mediaItemUrl
                            localFile {
                                childrenImageSharp {
                                    gatsbyImageData
                                }
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
        {/*<GatsbyImage className={'link'} image={getImage(shopLogo.localFile.childrenImageSharp[0].gatsbyImageData)}*/}
        {/*             alt='link_to_hop' />*/}
        <img className={'link'} src={shopLogo.mediaItemUrl} alt='link_to_hop'/>
      </a>
    </LinkStyles>
  );
};