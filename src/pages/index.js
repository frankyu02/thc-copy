import * as React from "react"
import { HeroHome } from "../components/home/Hero"
import { Legendary } from "../components/home/legendary/Legendary"
import { ThcTv } from "../components/global_component/thc-tv/ThcTv"
import { CategorySection } from "../components/home/category-section/CategorySection"
import { Brands } from "../components/home/brands/Brands"
import { SettingStandart } from "../components/home/setting_standart/SettingStandart"
import { BlogBanner } from "../components/home/blog-banner/BlogBanner"
import { MerchCarousel } from "../components/home/merch_carousel/MerchCarousel"
import Seo from "../components/layout/Seo"
import { ShopLink } from "../components/ui/shop_link/ShopLink"
import {graphql, useStaticQuery} from "gatsby";

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

  const seoData = data?.allWpPage?.nodes[0]?.template?.seoMetaTags;
  const seo = {
    title: seoData?.seoMetaTagsTitle,
    description: seoData?.seoMetaTagsDescription
  }

  return <>
    <Seo {...seo} />
    <HeroHome />
    <Legendary />
    <MerchCarousel />
    <CategorySection />
    <ThcTv />
    <BlogBanner />
    <SettingStandart />
    <Brands />
    <ShopLink />
  </>

}

export default HomePage