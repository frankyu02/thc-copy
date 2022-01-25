import * as React from "react";
import { HeaderMenu } from "../components/header/HeaderMenu";
import {Footer} from '../components/footer/Footer';
import Layout from "../components/layout/Layout";
import {ShopLink} from "../components/ui/shop_link/ShopLink";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {graphql, useStaticQuery} from "gatsby";
import {LocationMap} from "../components/location/location_map/LocationMap";
import {LargeBanner} from "../components/global_component/large_banner/LargeBanner";
import {getImage, withArtDirection} from "gatsby-plugin-image";

const Location = () => {
    const seo = {
        title: 'Location',
        description: 'Location Description'
    }
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo2NDM="}}) {
                nodes {
                    title
                    location {
                        locationBanner {
                            locationBannerImg {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(quality: 100)
                                    }
                                }
                            }
                        }
                        locationLargeOrderBanner {
                            locationLargeOrderBannerText
                            locationLargeOrderBannerTitle
                            locationLargeOrderBannerButton {
                                target
                                title
                                url
                            }
                            locationLargeOrderBannerImg {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(quality: 100)
                                    }
                                }
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
    `)
    const location = data?.allWpPage?.nodes[0];
    const locationImg = data?.allWpPage?.nodes[0]?.location?.locationBanner;
    const locationLarge = data?.allWpPage?.nodes[0]?.location?.locationLargeOrderBanner;
    const images = withArtDirection(getImage(locationLarge?.locationLargeOrderBannerImgMobile?.localFile), [
        {
            media: "(min-width: 768px)",
            image: getImage(locationLarge?.locationLargeOrderBannerImg?.localFile),
        },
    ])
    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero banner={locationImg?.locationBannerImg?.localFile?.childImageSharp?.gatsbyImageData} title={location?.title}/>
                <LocationMap/>
                <LargeBanner butonLargeBanner={locationLarge?.locationLargeOrderBannerButton} images={images} titleLargeBanner={locationLarge?.locationLargeOrderBannerTitle} textLargeBanner={locationLarge?.locationLargeOrderBannerText}/>
                <Footer/>
                <ShopLink/>
            </Layout>
        </>
    )
}

export default Location