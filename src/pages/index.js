import * as React from "react"
import { useEffect, useState } from "react"
import { Legendary } from "../components/home/legendary/Legendary"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/layout/Seo"
import { HeroHome } from "../components/home/Hero"
import { MerchCarousel } from "../components/home/merch_carousel/MerchCarousel"
import { CategorySection } from "../components/home/category-section/CategorySection"
import ThcTv from "../components/global_component/thc-tv/ThcTv"
import { BlogBanner } from "../components/home/blog-banner/BlogBanner"
import { SettingStandart } from "../components/home/setting_standart/SettingStandart"
import Brands from "../components/home/brands/Brands"
import { ShopLink } from "../components/ui/shop_link/ShopLink"
import { __BREAKPOINTS } from "../styles/utils/variables"

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
  const [lazyLoading, setLazyLoading] = useState(false)
  //styles lazy loading

  useEffect(() => {
    if (window?.innerWidth > __BREAKPOINTS.md) {
      setLazyLoading && setLazyLoading(true)
    } else {
      if (window) {
        setTimeout(() => {
          setLazyLoading && setLazyLoading(true)
        }, 1500)
      }
    }
  }, [])
  return <>
    <Seo {...seo} />
    <HeroHome />
    <Legendary lazyLoading={lazyLoading} />
    <MerchCarousel lazyLoading={lazyLoading} />
    <CategorySection lazyLoading={lazyLoading} />
    <ThcTv lazyLoading={lazyLoading} />
    <BlogBanner lazyLoading={lazyLoading} />
    <SettingStandart lazyLoading={lazyLoading} />
    <Brands lazyLoading={lazyLoading} />
    <ShopLink />
  </>

}

export default HomePage