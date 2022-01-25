import * as React from "react";
import Layout from "../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../components/header/HeaderMenu";
import {Footer} from "../components/footer/Footer";
import {TitleSubtext} from "../components/delivery/title_subtext/TitleSubtext";
import {InfoBanner} from "../components/delivery/delivery-info-banner/InfoBanner";
import {MapRegions} from "../components/delivery/map-regions/MapRegions";


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
              }
            }
          }
        }
    `)

    const title = data?.allWpPage?.nodes[0]?.delivery?.deliveryBanner?.deliveryBannerTitle;
    const banner = data?.allWpPage?.nodes[0]?.delivery?.deliveryBanner?.deliveryBannerImg?.localFile?.childImageSharp?.gatsbyImageData;

    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero title={title} banner={banner}/>
                <TitleSubtext/>
                <InfoBanner/>
                <MapRegions/>
                <Footer/>
            </Layout>
        </>
    );
}

export default DeliveryPage;
