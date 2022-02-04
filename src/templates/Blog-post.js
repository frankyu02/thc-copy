import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/layout/Seo";
import { ShopLink } from "../components/ui/shop_link/ShopLink";
import { EducationHero } from "../components/global_component/education-hero/EducationHero";
import { ContentPlace } from "../components/contentPlace/ContentPlace";
import { getImageData } from "../utils/get_image_data";
import { SubscribeFormProvider } from "../contexts/subscribe-form";
import { PostContentProvider } from "../contexts/post-content";
import { FeaturedPosts } from "../components/global_component/FeaturedPosts/FeaturedPosts";

const BlogPost = (props) => {
  
  const __DATA = props?.data?.post?.edges[0].node;
  const __FORM = __DATA?.blogPost?.signUpForm;
  const __IS_SHARE = __DATA?.blogPost?.shareSocial;
  const __NEXT_POSTS = props?.data?.next?.nodes;
  
  const { title, content, date } = __DATA; // data for hero banner
  const providing = { title,  content, share: __IS_SHARE }; // provide data to content and sidebar
  const seo = {
    title: __DATA?.seoMetaPost?.seoMetaPostTitle, 
    description: __DATA?.seoMetaPost?.seoMetaPostDescription
  }
  const banner = getImageData(__DATA.featuredImage.node);
  const filteredNextPosts = __NEXT_POSTS.filter(post => post.slug !== props.pageContext.slug); // exclude current post  

  return (
    <>
      <Seo {...seo} />
      <EducationHero title={title} data={date} banner={banner} />

      <SubscribeFormProvider data={__FORM}>
        <PostContentProvider data={providing}>
          <ContentPlace/>
        </PostContentProvider>          
      </SubscribeFormProvider>

      <FeaturedPosts path={'/blog/'} posts={filteredNextPosts} limit={2} random={true}/>
      <ShopLink />
    </>
  )
}

export default BlogPost;

export const query = graphql`
  query postPage($slug: String, $category: String) {

    post: allWpPost( filter: {slug: {eq: $slug}} ) {
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
          seoMetaPost {
            seoMetaPostDescription
            seoMetaPostTitle
          }
        }
      }
    }

    next: allWpPost(filter: {categories: {nodes: {elemMatch: {id: {eq: $category}}}}}) {
      nodes {
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        title
      }
    }
  }

`;