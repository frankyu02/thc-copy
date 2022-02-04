import * as React from "react"
import { ShopLink } from "../components/ui/shop_link/ShopLink"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import { graphql, useStaticQuery } from "gatsby"
import { LocationMap } from "../components/location/location_map/LocationMap"
import { LargeBanner } from "../components/global_component/large_banner/LargeBanner"
import { getImage, withArtDirection } from "gatsby-plugin-image"
import Seo from "../components/layout/Seo"

const Location = () => {
  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo2NDM="}}) {
                nodes {
                    title
                    template {
                        seoMetaTags {
                            seoMetaTagsDescription
                            seoMetaTagsJsonShema
                            seoMetaTagsTitle
                        }
                    }
                    location {
                        locationBanner {
                            locationBannerImg {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData 
                                    }
                                }
                            }
                        }
                        locationLargeOrderBanner {
                            locationLargeOrderBannerText
                            locationLargeOrderBannerTitle
                            locationLargeOrderBannerButton {
                                target
                                title
                                url
                            }
                            locationLargeOrderBannerImg {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData 
                                    }
                                }
                            }
                            locationLargeOrderBannerImgMobile {
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
  const location = data?.allWpPage?.nodes[0]
  const locationImg = data?.allWpPage?.nodes[0]?.location?.locationBanner
  const locationLarge = data?.allWpPage?.nodes[0]?.location?.locationLargeOrderBanner
  const images = withArtDirection(getImage(locationLarge?.locationLargeOrderBannerImgMobile?.localFile), [
    {
      media: "(min-width: 768px)",
      image: getImage(locationLarge?.locationLargeOrderBannerImg?.localFile)
    }
  ])
  return (
    <>
      <Seo {...seo} />
      <SmallHero banner={locationImg?.locationBannerImg?.localFile?.childImageSharp?.gatsbyImageData}
                 title={location?.title} />
      <LocationMap />
      <LargeBanner butonLargeBanner={locationLarge?.locationLargeOrderBannerButton} images={images}
                   titleLargeBanner={locationLarge?.locationLargeOrderBannerTitle}
                   textLargeBanner={locationLarge?.locationLargeOrderBannerText} />
      <ShopLink />
    </>
  )
}

export default Location