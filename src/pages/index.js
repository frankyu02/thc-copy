import * as React from "react"
import Seo from "../components/layout/Seo"
import { graphql, useStaticQuery } from "gatsby"
import { MerchCarouselLazy } from "../components/home/merch_carousel/MerchCarousel.lazyloader"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPage(filter: {id: {eq: "cG9zdDo3"}}) {
        nodes {
          template {
            seoMetaTags {
              seoMetaTagsDescription
              seoMetaTagsJsonShema
              seoMetaTagsTitle
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

  return <>
    <Seo {...seo} />
    {/*<HeroHome />*/}
    {/*<Legendary />*/}
    <MerchCarouselLazy />
    {/*<CategorySection />*/}
    {/*<ThcTv />*/}
    {/*<BlogBanner />*/}
    {/*<SettingStandart />*/}
    {/*<Brands />*/}
    {/*<ShopLink />*/}
  </>

}

export default HomePage