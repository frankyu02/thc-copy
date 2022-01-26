import * as React from "react";
import Layout from "../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../components/header/HeaderMenu";
import {Footer} from "../components/footer/Footer";
import {LargeBanner} from "../components/global_component/large_banner/LargeBanner";
import {getImage, withArtDirection} from "gatsby-plugin-image";

const ReviewsPage = () => {

    const seo = {
        title: 'Media Title',
        description: 'Media Description'
    }
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo3MzI="}}) {
                edges {
                    node {
                        social {
                            socialBanner {
                                socialBannerTitile
                                socialBannerImg {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(quality: 100)
                                        }
                                    }
                                }
                            }
                            socialLargeOrderBanner {
                                socialLargeOrderBannerText
                                socialLargeOrderBannerTitle
                                socialLargeOrderBannerImg {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(quality: 100)
                                        }
                                    }
                                }
                                socialLargeOrderBannerImgMobile {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(quality: 100)
                                        }
                                    }
                                }
                                socialLargeOrderBannerButton {
                                    target
                                    title
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const smallBanner = data?.allWpPage?.edges[0]?.node?.social?.socialBanner;
    const largeBanner = data?.allWpPage?.edges[0]?.node?.social?.socialLargeOrderBanner;
    const images = withArtDirection(getImage(largeBanner?.socialLargeOrderBannerImgMobile?.localFile), [
        {
            media: "(min-width: 768px)",
            image: getImage(largeBanner?.socialLargeOrderBannerImg?.localFile),
        },
    ])
    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero banner={smallBanner?.socialBannerImg?.localFile?.childImageSharp?.gatsbyImageData} title={smallBanner?.socialBannerTitile}/>
                <LargeBanner images={images} butonLargeBanner={largeBanner?.socialLargeOrderBannerButton} textLargeBanner={largeBanner?.socialLargeOrderBannerText} titleLargeBanner={largeBanner?.socialLargeOrderBannerTitle}/>
                <Footer/>
            </Layout>
        </>
    )
}

export default ReviewsPage;
