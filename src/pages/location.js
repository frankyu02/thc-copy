import * as React from "react";
import { HeaderMenu } from "../components/header/HeaderMenu";
import {Footer} from '../components/footer/Footer';
import Layout from "../components/layout/Layout";
import {ShopLink} from "../components/ui/shop_link/ShopLink";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {graphql, useStaticQuery} from "gatsby";
import {LocationMap} from "../components/location/location_map/LocationMap";

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
                    }
                }
            }
        }


    `)
    const location = data?.allWpPage?.nodes[0];
    const locationImg = data?.allWpPage?.nodes[0]?.location?.locationBanner;
    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero banner={locationImg?.locationBannerImg?.localFile?.childImageSharp?.gatsbyImageData} title={location?.title}/>
                <LocationMap/>
                <Footer/>
                <ShopLink/>
            </Layout>
        </>
    )
}

export default Location