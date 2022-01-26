import * as React from "react";
import Layout from "../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../components/header/HeaderMenu";
import {Footer} from "../components/footer/Footer";
import {TitleSubtext} from "../components/delivery/title_subtext/TitleSubtext";
import {InfoBanner} from "../components/delivery/delivery-info-banner/InfoBanner";
import {MapRegions} from "../components/delivery/map-regions/MapRegions";
import {LargeBanner} from "../components/global_component/large_banner/LargeBanner";
import {getImage, withArtDirection} from "gatsby-plugin-image";


const DeliveryPage = () => {

    const seo = {
        title: 'Delivery Title',
        description: 'Delivery Description'
    }

    const data = useStaticQuery(graphql`
        query {
          allWpPage(filter: {id: {eq: "cG9zdDo0MjE="}}) {
            nodes {
              delivery {
                deliveryBanner {
                  deliveryBannerTitle
                  deliveryBannerImg {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                deliveryLargeOrderBanner {
                  deliveryLargeOrderBannerTitle
                  deliveryLargeOrderBannerText
                  deliveryLargeOrderBannerImgMobile {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 100)
                      }
                    }
                  }
                  deliveryLargeOrderBannerImg {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 100)
                      }
                    }
                  }
                  deliveryLargeOrderBannerButton {
                    url
                    title
                    target
                  }
                }
              }
            }
          }
        }
        
    `)

    const title = data?.allWpPage?.nodes[0]?.delivery?.deliveryBanner?.deliveryBannerTitle;
    const banner = data?.allWpPage?.nodes[0]?.delivery?.deliveryBanner?.deliveryBannerImg?.localFile?.childImageSharp?.gatsbyImageData;

    const titleLargeBanner = data?.allWpPage?.nodes[0]?.delivery?.deliveryLargeOrderBanner?.deliveryLargeOrderBannerTitle;
    const textLargeBanner = data?.allWpPage?.nodes[0]?.delivery?.deliveryLargeOrderBanner?.deliveryLargeOrderBannerText;
    const butonLargeBanner = data?.allWpPage?.nodes[0]?.delivery?.deliveryLargeOrderBanner?.deliveryLargeOrderBannerButton;
    const largeBanner = data?.allWpPage?.nodes[0]?.delivery?.deliveryLargeOrderBanner;
    const images = withArtDirection(getImage(largeBanner.deliveryLargeOrderBannerImgMobile?.localFile), [
        {
            media: "(min-width: 768px)",
            image: getImage(largeBanner.deliveryLargeOrderBannerImg?.localFile),
        },
    ])
    
    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero title={title} banner={banner}/>
                <TitleSubtext/>
                <InfoBanner/>
                <MapRegions/>
                <LargeBanner images={images} titleLargeBanner={titleLargeBanner} textLargeBanner={textLargeBanner} butonLargeBanner={butonLargeBanner}/>
                <Footer/>
            </Layout>
        </>
    );
}

export default DeliveryPage;
