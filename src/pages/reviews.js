import * as React from "react";
import Layout from "../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../components/header/HeaderMenu";
import {Footer} from "../components/footer/Footer";

const ReviewsPage = () => {

  const seo = {
    title: 'Reviews Title',
    description: 'Reviews Description'
  }
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDoyMTE="}}) {
                nodes {
                  reviews {
                    reviewsBanner {
                      reviewsBannerTitle
                      reviewsBannerImg {
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
    const title = data?.allWpPage?.nodes[0]?.reviews?.reviewsBanner?.reviewsBannerTitle;
    const banner = data?.allWpPage?.nodes[0]?.reviews?.reviewsBanner?.reviewsBannerImg?.localFile?.childImageSharp?.gatsbyImageData;

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

export default ReviewsPage;
