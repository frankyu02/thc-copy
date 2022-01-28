import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import { LargeBanner } from "../components/global_component/large_banner/LargeBanner"
import { getImage, withArtDirection } from "gatsby-plugin-image"
import Seo from "../components/layout/Seo"

const ReviewsPage = () => {
  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo3MzI="}}) {
                edges {
                    node {
                        template {
                            seoMetaTags {
                                seoMetaTagsDescription
                                seoMetaTagsJsonShema
                                seoMetaTagsTitle
                            }
                        }
                        social {
                            socialBanner {
                                socialBannerTitile
                                socialBannerImg {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(quality: 100)
                                        }
                                    }
                                }
                            }
                            socialLargeOrderBanner {
                                socialLargeOrderBannerText
                                socialLargeOrderBannerTitle
                                socialLargeOrderBannerImg {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(quality: 100)
                                        }
                                    }
                                }
                                socialLargeOrderBannerImgMobile {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(quality: 100)
                                        }
                                    }
                                }
                                socialLargeOrderBannerButton {
                                    target
                                    title
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const seoData = data?.allWpPage?.edges[0]?.node?.template?.seoMetaTags
    const seo = {
        title: seoData?.seoMetaTagsTitle,
        description: seoData?.seoMetaTagsDescription
    }
  const smallBanner = data?.allWpPage?.edges[0]?.node?.social?.socialBanner;
  const largeBanner = data?.allWpPage?.edges[0]?.node?.social?.socialLargeOrderBanner;
  const images = withArtDirection(getImage(largeBanner?.socialLargeOrderBannerImgMobile?.localFile), [
    {
      media: "(min-width: 768px)",
      image: getImage(largeBanner?.socialLargeOrderBannerImg?.localFile),
    },
  ])
  return (
    <>
      <Seo {...seo} />

      <SmallHero banner={smallBanner?.socialBannerImg?.localFile?.childImageSharp?.gatsbyImageData}
                 title={smallBanner?.socialBannerTitile} />
      <LargeBanner images={images} butonLargeBanner={largeBanner?.socialLargeOrderBannerButton}
                   textLargeBanner={largeBanner?.socialLargeOrderBannerText}
                   titleLargeBanner={largeBanner?.socialLargeOrderBannerTitle} />

    </>
  )
}

export default ReviewsPage;
