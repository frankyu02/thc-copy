import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HeroStyled } from "./Hero.styled";
import { MainButton } from "../ui/main_button/MainButton";

export const HeroHome = () => {
    const data = useStaticQuery(graphql`
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
                                    gatsbyImageData(quality: 100)
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
    `)
    const overBanner = data?.wpPage?.home?.overBanner;
    const banner = data?.wpPage?.home?.banner?.bannerBg?.localFile?.childImageSharp?.gatsbyImageData;
    const bannerText = data?.wpPage?.home?.banner?.bannerBg?.altText;
    const bannerTitle = data?.wpPage?.home?.banner?.bannerTitle;
    const bannerButton = data?.wpPage?.home?.banner?.bannerButton;
  return (
      <HeroStyled>
          <div className="container">
              <div className="header">
                  <div className='address_parent'>
                      <h4>{overBanner?.overBannerLocation1}</h4>
                      <h4>{overBanner?.overBannerLocation2}</h4>
                  </div>
                  <h1>{overBanner?.overBannerTitle}</h1>
              </div>
              <div className="inner">
                  <GatsbyImage className={'background'} image={getImage(banner)} alt={bannerText}/>
                  <div className="caption">
                      <h3 className="title">{bannerTitle}</h3>
                      <MainButton url={bannerButton?.url} target={bannerButton?.target}>{bannerButton?.title}</MainButton>
                  </div>
              </div>
          </div>
      </HeroStyled>
  )
}