import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import { ThcTv } from "../components/global_component/thc-tv/ThcTv"
import { ArticlesGrid } from "../components/education/articles-grid/ArticlesGrid"
import Seo from "../components/layout/Seo"


const EducationPage = () => {

  const seo = {
    title: "Education Title",
    description: "Education Description"
  }

  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDoyOTI="}}){
                nodes{
                    education {
                        educationBanner {
                            educationBannerTitle
                            educationBannerImg {
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
  const title = data?.allWpPage?.nodes[0]?.education?.educationBanner?.educationBannerTitle
  const banner = data?.allWpPage?.nodes[0]?.education?.educationBanner?.educationBannerImg?.localFile?.childImageSharp?.gatsbyImageData
  return (
    <>
      <Seo {...seo} />
      <SmallHero title={title} banner={banner} />
      <ArticlesGrid />
      <ThcTv />
    </>
  )
}

export default EducationPage
