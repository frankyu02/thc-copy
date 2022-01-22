import * as React from "react";
import Layout from "../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../components/header/HeaderMenu";
import {Footer} from "../components/footer/Footer";


const BlogPage = () => {

    const seo = {
        title: 'Blog Title',
        description: 'Blog Description'
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
    const title = data?.allWpPage?.nodes[0]?.blog?.blogBanner?.blogBannerTitle;
    const banner = data?.allWpPage?.nodes[0]?.blog?.blogBanner?.blogBannerImg?.localFile?.childImageSharp?.gatsbyImageData;
    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero title={title} banner={banner}/>
                <Footer/>
            </Layout>
        </>
    );
}

export default BlogPage;
