import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HeroStyled } from "./Hero.styled";
import { MainButton } from "../ui/main_button/MainButton";
import { animated, useSpring} from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

import ReactPlayer from "react-player/lazy";

export const HeroHome = () => {

    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    const styles = useSpring({
        from: {
            opacity: 0,
            x: -700
        },
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : -700,
            
        },
        delay: 100,
        config:{ mass: 5, tension: 2000, friction: 200 }
    })
    const styles2b = useSpring({
        from: {
            opacity: 0,
            x: 700
        },
        to: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 700,
        },
        config:{ mass: 5, tension: 2000, friction: 200 }
    })

    const styles3 = useSpring( {
        from: {
            opacity: 0,
            y: 250
        },
        to: {
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 250,
        },
        config:{ mass: 2, tension: 2000, friction: 200 }
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
                                url
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
    const bannerURL = data?.wpPage?.home?.banner?.bannerBg?.localFile?.url;
    const bannerText = data?.wpPage?.home?.banner?.bannerBg?.altText;
    const bannerTitle = data?.wpPage?.home?.banner?.bannerTitle;
    const bannerButton = data?.wpPage?.home?.banner?.bannerButton;

    return (
     <HeroStyled >
          <div className="container">
              <div className="header">
                  <div className='address_parent'>
                  <animated.div style={styles} ref={ref}>
                    <p className={"street"}>{overBanner?.overBannerLocation1}</p>
                    <p className={"street"}>{overBanner?.overBannerLocation2}</p>
                 </animated.div>
                  </div>
                  <animated.div style={styles2b} ref={ref}>
                    <span><h1>{overBanner?.overBannerTitle}</h1></span>
                  </animated.div>
              </div>
              <div className="inner">
                <div className="video">
                    <ReactPlayer
                        className="background"
                        url="https://res.cloudinary.com/dnc6bhhkf/video/upload/v1643302202/THC_January_2021_qqmkkr.mp4" 
                        muted="true"
                        loop="true"
                        width="100%"
                        height="100%"
                        playing={true}
                        config={{
                            file: {
                                attributes:{
                                    poster: bannerURL
                                }
                            }
                        }}
                    />
                </div>
                <div className="caption">
                    
                        <h2 dangerouslySetInnerHTML={{ __html: bannerTitle }} className="title" />
                    
                    <animated.div style={styles3} ref={ref}>
                    <MainButton url={bannerButton?.url}
                        target={bannerButton?.target}>{bannerButton?.title}</MainButton>
                    </animated.div>
                </div>
              </div>
          </div>
      </HeroStyled>
  )
}