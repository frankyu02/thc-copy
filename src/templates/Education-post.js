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


const EducationPost = (props) => {
  
  const __DATA = props?.data?.post?.nodes[0];
  const __NEXT_POSTS = props?.data?.next?.nodes;
  
  const { title: postTitle, content, date } = __DATA; // data for hero banner
  const providing = { postTitle, content, share: false }; // provide data to content and sidebar
  const { seoMetaPostTitle: title, seoMetaPostDescription: description } = __DATA?.seoMetaPost;
  const banner = getImageData(__DATA.featuredImage.node);

  const filteredNextPosts = __NEXT_POSTS.filter(post => post.slug !== props.pageContext.slug); // exclude current post  

  return (
    <>
      <Seo title={title} description={description} />
      <EducationHero title={postTitle} data={date} banner={banner} />

      <SubscribeFormProvider data={null}>
        <PostContentProvider data={providing}>
          <ContentPlace/>
        </PostContentProvider>          
      </SubscribeFormProvider>

      <FeaturedPosts path={'/education/'} posts={filteredNextPosts} limit={2} random={true}/>
      <ShopLink />
    </>
  )
}

export default EducationPost;

export const query = graphql`
  query educationPage($slug: String) {

    post: allWpEducation(filter: {slug: {eq: $slug}}) {
      nodes {
        title
        id
        content
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
        seoMetaPost {
          seoMetaPostDescription
          seoMetaPostTitle
        }
      }
    }

    next: allWpEducation {
      nodes {
        slug
        title
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
`;