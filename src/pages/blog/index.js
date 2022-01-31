import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../../components/global_component/small_hero/SmallHero"
import { ArticlesGrid } from "../../components/blog/articles-grid/ArticlesGrid"
import Seo from "../../components/layout/Seo"


const BlogPage = () => {

  const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {id: {eq: "cG9zdDozNDA="}}) {
          nodes {
            template {
              seoMetaTags {
                seoMetaTagsDescription
                seoMetaTagsJsonShema
                seoMetaTagsTitle
              }
            }
            blog {
              blogBanner {
                fieldGroupName
                blogBannerTitle
                blogBannerImg {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 100)
                    }
                  }
                }
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
  console.log(seoData)
  const title = data?.allWpPage?.nodes[0]?.blog?.blogBanner?.blogBannerTitle
  const banner = data?.allWpPage?.nodes[0]?.blog?.blogBanner?.blogBannerImg?.localFile?.childImageSharp?.gatsbyImageData
  return (
    <>
      <Seo {...seo} />
      <SmallHero title={title} banner={banner} />
      <ArticlesGrid/>
    </>
  )
}

export default BlogPage
