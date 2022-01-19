import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SmallHeroStyles } from "./SmallHeroStyles";
import { getImageData } from "../../../utils/get_image_data";

export const SmallHero = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
              home {
                banner {
                  bannerBg {
                    localFile {
                      childrenImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
              title
            }
          }
    `)
    const {wpPage: {title}} = data;
    const {wpPage: {home: {banner}}} = data;
    return (
        <SmallHeroStyles>
            <div className={'small-hero'}>
            <GatsbyImage image={getImage(banner.bannerBg.localFile.childrenImageSharp[0].gatsbyImageData)} alt={'brands'}/>
            <div className={'small-hero-title'}>{title}</div>
            </div>
        </SmallHeroStyles>
    );
};

export default SmallHero;