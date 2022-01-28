import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import { TitleSubtext } from "../components/delivery/title_subtext/TitleSubtext"
import { InfoBanner } from "../components/delivery/delivery-info-banner/InfoBanner"
import { MapRegions } from "../components/delivery/map-regions/MapRegions"
import { LargeBanner } from "../components/global_component/large_banner/LargeBanner"
import { getImage, withArtDirection } from "gatsby-plugin-image"
import { DeliveryLarge } from "../components/delivery/delivery_large/DeliveryLarge"
import Seo from "../components/layout/Seo"


const DeliveryPage = () => {

  const data = useStaticQuery(graphql`
        query {
          allWpPage(filter: {id: {eq: "cG9zdDo0MjE="}}) {
            nodes {
              template {
                seoMetaTags {
                  seoMetaTagsDescription
                  seoMetaTagsJsonShema
                  seoMetaTagsTitle
                }
              }
              delivery {
                deliveryBanner {
                  deliveryBannerTitle
                  deliveryBannerImg {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                deliveryLargeOrderBanner {
                  deliveryLargeOrderBannerTitle
                  deliveryLargeOrderBannerText
                  deliveryLargeOrderBannerImgMobile {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 100)
                      }
                    }
                  }
                  deliveryLargeOrderBannerImg {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 100)
                      }
                    }
                  }
                  deliveryLargeOrderBannerButton {
                    url
                    title
                    target
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
  const title = data?.allWpPage?.nodes[0]?.delivery?.deliveryBanner?.deliveryBannerTitle
  const banner = data?.allWpPage?.nodes[0]?.delivery?.deliveryBanner?.deliveryBannerImg?.localFile?.childImageSharp?.gatsbyImageData
  const titleLargeBanner = data?.allWpPage?.nodes[0]?.delivery?.deliveryLargeOrderBanner?.deliveryLargeOrderBannerTitle
  const textLargeBanner = data?.allWpPage?.nodes[0]?.delivery?.deliveryLargeOrderBanner?.deliveryLargeOrderBannerText
  const butonLargeBanner = data?.allWpPage?.nodes[0]?.delivery?.deliveryLargeOrderBanner?.deliveryLargeOrderBannerButton
  const largeBanner = data?.allWpPage?.nodes[0]?.delivery?.deliveryLargeOrderBanner
  const images = withArtDirection(getImage(largeBanner.deliveryLargeOrderBannerImgMobile?.localFile), [
    {
      media: "(min-width: 768px)",
      image: getImage(largeBanner.deliveryLargeOrderBannerImg?.localFile)
    }
  ])

  return (
    <>
      <Seo {...seo} />
      <SmallHero title={title} banner={banner} />
      <TitleSubtext />
      <DeliveryLarge />
      <InfoBanner />
      <MapRegions />
      <LargeBanner images={images} titleLargeBanner={titleLargeBanner} textLargeBanner={textLargeBanner}
                   butonLargeBanner={butonLargeBanner} />


    </>
  )
}

export default DeliveryPage
