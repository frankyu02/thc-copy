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

const HomePage = () => {

  const seo = {
    title: "Home Title",
    description: "Home Description"
  }

  return < >
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
  </ >

}

export default HomePage