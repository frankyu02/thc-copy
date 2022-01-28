import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HeroStyled } from "./Hero.styled";
import { MainButton } from "../ui/main_button/MainButton";
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

export const HeroHome = () => {

    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    const styles = useSpring({
        opacity: inView ? 1 : 0,
        delay: 500,
        x: inView ? 0 : -50
    })

    const styles3 = useSpring({
        opacity: inView ? 1 : 0,
        delay: 500,
        y: inView ? 0 : -50
    })

    const styles2 = useSpring({
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -50
    })

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
     <HeroStyled >
          <div className="container">
              <div className="header">
                  <div className='address_parent'>
                  <animated.div style={styles} ref={ref}>
                      <h4>{overBanner?.overBannerLocation1}</h4>
                      <h4>{overBanner?.overBannerLocation2}</h4>
                    </animated.div>
                  </div>
                  <animated.div style={styles2} ref={ref}>
                  <h1>{overBanner?.overBannerTitle}</h1>
                  </animated.div>
              </div>
              <div className="inner">
                  <GatsbyImage className={'background'} image={getImage(banner)} alt={bannerText}/>
                  <div className="caption">
                  <animated.div style={styles3} ref={ref}>
                      <h3 className="title">{bannerTitle}</h3>
                      </animated.div>
                      <MainButton url={bannerButton?.url} target={bannerButton?.target}>{bannerButton?.title}</MainButton>
                  </div>
              </div>
          </div>
      </HeroStyled>
  )
}