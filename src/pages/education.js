import * as React from "react";
import Layout from "../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../components/header/HeaderMenu";
import {Footer} from "../components/footer/Footer";
import {ThcTv} from '../components/global_component/thc-tv/ThcTv';


const EducationPage = () => {

    const seo = {
        title: 'Education Title',
        description: 'Education Description'
    }

    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDoyOTI="}}){
                nodes{
                    education {
                        educationBanner {
                            educationBannerTitle
                            educationBannerImg {
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
    const title = data?.allWpPage?.nodes[0]?.education?.educationBanner?.educationBannerTitle;
    const banner = data?.allWpPage?.nodes[0]?.education?.educationBanner?.educationBannerImg?.localFile?.childImageSharp?.gatsbyImageData;
    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero title={title} banner={banner}/>
                <ThcTv/>
                <Footer/>
            </Layout>
        </>
    );
}

export default EducationPage;
