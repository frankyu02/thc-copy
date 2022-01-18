import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { HeroStyles } from "./HeroStyles";
import { getImageData } from "../../utils/get_image_data";
import { MainButton } from "../ui/main_button/MainButton";

export const HeroHome = () => {
  return (
      <HeroStyles>
        <StaticQuery
          query={graphql`query {
              wpPage(uri: {eq: "/"}) {
                home {
                  overBanner {
                    overBannerLocation1
                    overBannerLocation2
                    overBannerTitle
                  }
                  banner {
                    bannerBg {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      altText
                    }
                    bannerTitle
                    bannerButton {
                      target
                      title
                      url
                    }
                  }
                }
              }
            }
          `}

          render = {( { wpPage: { home } } ) => {
            const {
              banner: {bannerBg, bannerButton: {title, url, target}, bannerTitle},
              overBanner: {overBannerLocation1, overBannerLocation2, overBannerTitle}
            } = home;

            const bannerImg = getImageData(bannerBg);
            return (
              <div className="container">
                <div className="header">
                  <div className='address_parent'>
                      <h4>{overBannerLocation1}</h4>
                      <h4>{overBannerLocation2}</h4>
                  </div>
                  <h1>{overBannerTitle}</h1>
                </div>
                <div className="inner">
                  <GatsbyImage className={'background'} image={bannerImg} alt={bannerBg.altText}/>
                  <div className="caption">
                    <h3 className="title">{bannerTitle}</h3>
                    <MainButton url={url} target={target}>{title}</MainButton>
                  </div>
                </div>
              </div>
            )
          }}
        />
      </HeroStyles>
  )
}