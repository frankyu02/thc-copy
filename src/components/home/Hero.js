import * as React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { HeroStyles } from "./HeroStyles";
import { getImageData } from "../../utils/get_image_data";

export const HeroHome = () => {
  return (
      <HeroStyles>
        <StaticQuery
          query={graphql`
            query {
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
                    bannerIcon {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
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
              banner: {bannerBg, bannerIcon, bannerButton: {title, url, target}, bannerTitle},
              overBanner: {overBannerLocation1, overBannerLocation2, overBannerTitle}
            } = home;

            const bannerImg = getImageData(bannerBg);
            const bannerIconImg = getImageData(bannerIcon)
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
                  <GatsbyImage className={'mark'} image={bannerIconImg} alt="mark" />
                  <div className="caption">
                    <h3 className="title">{bannerTitle}</h3>
                    <Link to={url || '#'} className="btn btn--white" target={target}>{title}</Link>
                  </div>
                </div>
              </div>
            )
          }}
        />
      </HeroStyles>
  )
}