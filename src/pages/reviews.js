import * as React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import DoublePageLink from "../components/reviews/doublePageLink/doublePageLink"
import ReviewGrid from "../components/reviews/reviewGrid/reviewGrid"
import { ClientReview } from "../components/reviews/ClientReview/ClientReview"
import Seo from "../components/layout/Seo"

const ReviewsPage = () => {

  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDoyMTE="}}) {
                nodes {
                    template {
                        seoMetaTags {
                            seoMetaTagsDescription
                            seoMetaTagsJsonShema
                            seoMetaTagsTitle
                        }
                    }
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
  const seoData = data?.allWpPage?.nodes[0]?.template?.seoMetaTags
  const seo = {
    title: seoData?.seoMetaTagsTitle,
    description: seoData?.seoMetaTagsDescription
  }
  const title = data?.allWpPage?.nodes[0]?.reviews?.reviewsBanner?.reviewsBannerTitle
  const banner = data?.allWpPage?.nodes[0]?.reviews?.reviewsBanner?.reviewsBannerImg?.localFile?.childImageSharp?.gatsbyImageData

  const ReviewsStyles = styled.div`
    background: var(--grey);
    position: fixed;
    z-index: -2;
    width: 100vw;
    height: 100vh;
  `

  return (
    <>
      <ReviewsStyles />
      <Seo {...seo} />
      <SmallHero title={title} banner={banner} />
      <ReviewGrid />
      <ClientReview />
      <DoublePageLink />
    </>
  )
}

export default ReviewsPage
