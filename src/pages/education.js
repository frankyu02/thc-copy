import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import { ThcTv } from "../components/global_component/thc-tv/ThcTv"
import { ArticlesGrid } from "../components/education/articles-grid/ArticlesGrid"
import Seo from "../components/layout/Seo"


const EducationPage = () => {
  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDoyOTI="}}){
                nodes{
                    template {
                        seoMetaTags {
                            seoMetaTagsDescription
                            seoMetaTagsJsonShema
                            seoMetaTagsTitle
                        }
                    }
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
    const seoData = data?.allWpPage?.nodes[0]?.template?.seoMetaTags
    const seo = {
        title: seoData?.seoMetaTagsTitle,
        description: seoData?.seoMetaTagsDescription
    }
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
