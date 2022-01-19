import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {config_file}  from '../../../utils/config.js';
import { useStaticQuery, graphql } from "gatsby";
import { LinkStyles } from "./ShopLinkStyle";

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
    const {wp: {thcwebsiteGeneralOption: {shoplink: {shopLogo}}}} = data;
    return (
        <LinkStyles>
            <a target={'_blank'} rel='noreferrer' href={config_file.shop_link}>
                <GatsbyImage className={'link'} image={getImage(shopLogo.localFile.childrenImageSharp[0].gatsbyImageData)} alt='link_to_hop'/>
            </a>
        </LinkStyles>
    );
};