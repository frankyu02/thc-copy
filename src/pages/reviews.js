import * as React from "react";
import styled from 'styled-components';
import Layout from "../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../components/header/HeaderMenu";
import {Footer} from "../components/footer/Footer";
import DoublePageLink from "../components/reviews/doublePageLink/doublePageLink";
import ReviewGrid from "../components/reviews/reviewGrid/reviewGrid";
import ClientReview from "../components/reviews/ClientReview/ClientReview";

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

    const ReviewsStyles = styled.div`
      background: var(--grey);
      position: relative;
      z-index: -2;
    `;

  return (

    <Layout seo={seo}>
      <ReviewsStyles>
        <HeaderMenu/>
        <SmallHero title={title} banner={banner}/>
        <ReviewGrid/>
        <ClientReview/>
        <DoublePageLink/>
        <Footer/>
      </ReviewsStyles>
    </Layout>
  )
}

export default ReviewsPage;
