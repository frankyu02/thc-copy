import * as React from "react"
import { DoubleBanner } from "../components/article/double_banner/DoubleBanner"
import { ShopLink } from "../components/ui/shop_link/ShopLink"
import { LargeBanner } from "../components/global_component/large_banner/LargeBanner"
import { EducationHero } from "../components/global_component/education-hero/EducationHero"
import BlogPost from "../templates/Blog-post"
import Seo from "../components/layout/Seo"

const Article = () => {
  const seo = {
    title: "Article",
    description: "Article Description"
  }
  const headingText = "How to Judge the Quality of Cannabis"
  const data = "JANUARY 28, 2021"
  const banner = ""


  return (
    < >
      <Seo {...seo} />
      <BlogPost />
      <LargeBanner />
      <EducationHero title={headingText} data={data} banner={banner} />
      <DoubleBanner />
      <ShopLink />
    </ >
  )
}

export default Article