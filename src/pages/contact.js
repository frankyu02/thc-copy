import * as React from "react";
import Layout from "../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../components/header/HeaderMenu";
import {Footer} from "../components/footer/Footer";


const ContactPage = () => {

    const seo = {
        title: 'Contact Title',
        description: 'Contact Description'
    }
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo2NzE="}}) {
                nodes {
                    contactUs {
                        contactUsBanner {
                            contactUsBannerTitle
                            contactUsBannerImg {
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
    const contactBunner = data?.allWpPage?.nodes[0]?.contactUs?.contactUsBanner;
    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero banner={contactBunner?.contactUsBannerImg?.localFile} title={contactBunner?.contactUsBannerTitle}/>
                <Footer/>
            </Layout>
        </>
    );
}

export default ContactPage;
