import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import { ArticlesGrid } from "../components/blog/articles-grid/ArticlesGrid"
import Seo from "../components/layout/Seo"


const BlogPage = () => {

  const seo = {
    title: "Blog Title",
    description: "Blog Description"
  }

  const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {id: {eq: "cG9zdDozNDA="}}) {
          nodes {
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
