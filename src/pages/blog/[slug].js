import * as React from "react"
import { HeaderMenu } from "../../components/header/HeaderMenu"
import { Footer } from "../../components/footer/Footer"
import Layout from "../../components/layout/Layout"
import { DoubleBanner } from "../../components/article/double_banner/DoubleBanner"
import { ShopLink } from "../../components/ui/shop_link/ShopLink"
import { EducationHero } from "../../components/global_component/education-hero/EducationHero"
import { graphql } from "gatsby"
import { getImageData } from "../../utils/get_image_data"


const Article = (props) => {

  if (!props.pageContext.slug) return null

  const __DATA = props.data.allWpPost.edges[0].node

  const {
    title,
    content,
    date
  } = __DATA

  const seo = {
    title: title,
    description: "Article Description"
  }

  const banner = getImageData(__DATA.featuredImage.node)

  return (
    <>
      <Layout seo={seo}>
        <HeaderMenu />
        <EducationHero title={title} data={date} banner={banner} />
        <DoubleBanner />
        <Footer />
        <ShopLink />
      </Layout>
    </>
  )
}


export const query = graphql`
  query post($slug: String) {
    allWpPost(
      filter: {slug: {eq: $slug}}
    )
    {
      edges {
        node {
          id
          content
          title
          date(formatString: "MMMM DD YYYY")
          featuredImage {
            node {
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
`

export default Article