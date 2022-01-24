import React from 'react';
import { LargeBannerStyled } from "./LargeBanner.styled";
import MainButton from "../../ui/main_button/MainButton";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage, withArtDirection} from "gatsby-plugin-image";

export const LargeBanner = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo2NDM="}}) {
                edges {
                    node {
                        location {
                            locationLargeOrderBanner {
                                locationLargeOrderBannerText
                                locationLargeOrderBannerTitle
                                locationLargeOrderBannerImg {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(quality: 100)
                                        }
                                    }
                                }
                                locationLargeOrderBannerButton {
                                    title
                                    url
                                    target
                                }
                                locationLargeOrderBannerImgMobile {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(quality: 100)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const largeBanner = data?.allWpPage?.edges[0]?.node?.location?.locationLargeOrderBanner;
    const images = withArtDirection(getImage(largeBanner.locationLargeOrderBannerImgMobile?.localFile), [
        {
            media: "(min-width: 768px)",
            image: getImage(largeBanner.locationLargeOrderBannerImg?.localFile),
        },
    ])
    return (
        <LargeBannerStyled>
            <div className={'container'}>
                <div className={'large_wrapper'}>
                    <div className={'large_banner'}>
                        <h2>{largeBanner?.locationLargeOrderBannerTitle}</h2>
                        <p>{largeBanner?.locationLargeOrderBannerText}</p>
                    </div>
                    <MainButton url={largeBanner?.locationLargeOrderBannerButton?.url} target={largeBanner?.locationLargeOrderBannerButton?.target}>{largeBanner?.locationLargeOrderBannerButton?.title}</MainButton>
                    <GatsbyImage image={images} alt={'banner'}/>
                </div>
            </div>
        </LargeBannerStyled>
    );
};