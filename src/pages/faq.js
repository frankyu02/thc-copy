import * as React from "react";
import Layout from "../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../components/header/HeaderMenu";
import {Footer} from "../components/footer/Footer";
import {TitleSubtext} from "../components/faq/title_subtext/TitleSubtext"

const FaqPage = () => {

    const seo = {
        title: 'Faq Title',
        description: 'Faq Description'
    }

    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDoyNjY="}}) {
                nodes {
                  faq {
                    faqBanner {
                      faqBannerTitle
                      faqBannerImg {
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
    const title = data?.allWpPage?.nodes[0]?.faq?.faqBanner?.faqBannerTitle;
    const banner = data?.allWpPage?.nodes[0]?.faq?.faqBanner?.faqBannerImg?.localFile?.childImageSharp?.gatsbyImageData;
    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero title={title} banner={banner}/>
                <TitleSubtext/>
                <Footer/>
            </Layout>
        </>
    );
}

export default FaqPage;
