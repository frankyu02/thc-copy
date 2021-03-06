import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HeroStyled } from "./Hero.styled";
import { MainButton } from "../ui/main_button/MainButton";
import { Fade } from "react-awesome-reveal";

import ReactPlayer from "react-player/lazy";

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
                                # url
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

    const removePoster = () =>{
        document.getElementsByClassName("poster")[0].style.display = 'none';
        document.getElementsByClassName("background")[0].style.display = 'block';
    }
    // const img = getImage(banner).sources[0].srcSet
    // console.log('IMAGE BANNER', getImage(banner))
    return (
        <HeroStyled >
        <div className="container">
            <div className="header">
                <div className='address_parent'>
                <Fade direction="left">
                    <div>
                        <p className={"street"}>{overBanner?.overBannerLocation1}</p>
                        <p className={"street"}>{overBanner?.overBannerLocation2}</p>
                    </div>
                </Fade>
                </div>
                <Fade direction="right">
                    <span><h1>{overBanner?.overBannerTitle}</h1></span>
                </Fade>
            </div>
            <div className="inner">
                <GatsbyImage className="poster" image={getImage(banner)} alt={bannerText} />
                <div className="video">
                    <ReactPlayer
                        className="background"
                        url="https://res.cloudinary.com/dnc6bhhkf/video/upload/v1643302202/THC_January_2021_qqmkkr.mp4" 
                        muted="true"
                        loop="true"
                        width="100%"
                        height="100%"
                        playing={true}
                        onPlay={removePoster}
                    />
                </div>
                <div className="caption">
                    <Fade direction="down"><div>
                        <h2 dangerouslySetInnerHTML={{ __html: bannerTitle }} className="title" />
                    </div></Fade>
                    <Fade direction="up">
                        <div>
                        <MainButton url={bannerButton?.url}
                            target={bannerButton?.target}>{bannerButton?.title}
                        </MainButton>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </HeroStyled>
  )
}