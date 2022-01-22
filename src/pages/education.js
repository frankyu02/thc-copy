import * as React from "react";
import { HeaderMenu } from "../components/header/HeaderMenu";
import {graphql, useStaticQuery} from "gatsby";
import {Footer} from '../components/footer/Footer';
import Layout from "../components/layout/Layout";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";


const EducationPage = () => {

    const data = useStaticQuery(graphql`
        query {
            wpPage(id: {eq: "cG9zdDoyOTI="}) {
                education {
                    educationBanner {
                        fieldGroupName
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
    `)

    const seo = {
        title: 'Education',
        description: 'Education Description'
    }

    const title = data?.allWpPage?.nodes[0]?.education?.educationBanner?.educationBannerTitle;
    const banner = data?.allWpPage?.nodes[0]?.education?.educationBanner?.educationBannerImg?.localFile?.childImageSharp?.gatsbyImageData;

    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero title={title} banner={banner}/>
                <Footer/>
            </Layout>
        </>
    )
}

export default EducationPage