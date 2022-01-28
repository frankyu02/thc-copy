import React from "react";
import { graphql } from "gatsby";
import { HeaderMenu } from "../components/header/HeaderMenu";
import { Footer } from '../components/footer/Footer';
import Seo from "../components/layout/Seo";
import { DoubleBanner } from "../components/article/double_banner/DoubleBanner";
import { ShopLink } from "../components/ui/shop_link/ShopLink";
import { EducationHero } from "../components/global_component/education-hero/EducationHero";
import { ContentPlace } from "../components/contentPlace/ContentPlace";
import { getImageData } from "../utils/get_image_data";
import { SubscribeFormProvider } from "../contexts/subscribe-form";
import { PostContentProvider } from "../contexts/post-content";

const BlogPost = (props) => {
  const __DATA = props?.data?.allWpPost?.edges[0].node;
  const __FORM = __DATA?.blogPost?.signUpForm;
  const __IS_SHARE = __DATA?.blogPost?.shareSocial;
  
  const { title, content, date } = __DATA; // data for hero banner
  const providing = { title,  content, share: __IS_SHARE }; // provide data to content and sidebar
  const seo = { title: title, description: "Article Description" };
  const banner = getImageData(__DATA.featuredImage.node);

  return (
    <>
      <Seo {...seo} />
      <HeaderMenu />
      <EducationHero title={title} data={date} banner={banner} />

      <SubscribeFormProvider data={__FORM}>
        <PostContentProvider data={providing}>
          <ContentPlace/>
        </PostContentProvider>          
      </SubscribeFormProvider>

      <DoubleBanner />
      <Footer />
      <ShopLink />
    </>
  )
}

export default BlogPost;


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
            shareSocial
          }
        }
      }
    }
  }
`