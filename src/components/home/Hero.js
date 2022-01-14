import * as React from "react";
import { Link, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { HeroStyles } from "./HeroStyles";
import { getImageData } from "../../utils/get_image_data";

export const HeroHome = () => {

  return (
    <>
      <HeroStyles>

        <StaticQuery
          query={graphql`
            query {
              wpPage(uri: {eq: "/"}) {
                id
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
                    bannerButtonName
                    bannerButtonLink
                  }
                }
              }
            }
          `}

          render = {( { wpPage: { home } } ) => {
            const {
              banner: {bannerBg, bannerButtonLink, bannerButtonName, bannerTitle}, 
              overBanner: {overBannerLocation1, overBannerLocation2, overBannerTitle}
            } = home;

            const bannerImg = getImageData(bannerBg);


            return (
              <div className="container">
                <div className="header">
                  <p>{overBannerLocation1}</p>
                  <p>{overBannerLocation2}</p>
                  <h1>{overBannerTitle}</h1>
                </div>
                <div className="inner">
                  <GatsbyImage image={bannerImg} alt={bannerBg.altText} />
                  <div className="caption">
                    <h3 className="title">{bannerTitle}</h3>
                    <Link to={bannerButtonLink || '#'} className="btn btn--white" target="_parent">{bannerButtonName}</Link>
                  </div>
                </div>
              </div>
            )
          }}
        />
        
      </HeroStyles>
    </>
  )
}