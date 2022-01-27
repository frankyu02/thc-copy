import React from "react"
import { graphql } from "gatsby"
import { DoubleBanner } from "../../components/article/double_banner/DoubleBanner"
import { ShopLink } from "../../components/ui/shop_link/ShopLink"
import { EducationHero } from "../../components/global_component/education-hero/EducationHero"
import { ContentPlace } from "../../components/contentPlace/ContentPlace"
import { getImageData } from "../../utils/get_image_data"
import { SubscribeFormProvider } from "../../contexts/subscribe-form"
import { PostContentProvider } from "../../contexts/post-content"
import Seo from "../../components/layout/Seo"

const Article = (props) => {

  if (!props.pageContext.slug) return null

  const __DATA = props?.data?.allWpPost?.edges[0].node
  const __FORM = __DATA?.blogPost?.signUpForm

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
      <Seo {...seo} />
      <EducationHero title={title} data={date} banner={banner} />

      <SubscribeFormProvider data={__FORM}>
        <PostContentProvider data={content}>
          <ContentPlace />
        </PostContentProvider>
      </SubscribeFormProvider>
      <DoubleBanner />
      <ShopLink />
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
          blogPost {
            signUpForm {
              fieldGroupName
              showForm
              signUpFormButton
              signUpFormChechboxText
              signUpFormPlaceholdeer
              signUpFormTitle
            }
          }
        }
      }
    }
  }
`

export default Article