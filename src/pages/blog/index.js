import * as React from "react";
import Layout from "../../components/layout/Layout";
import {graphql, useStaticQuery} from "gatsby";
import {SmallHero} from "../../components/global_component/small_hero/SmallHero";
import {HeaderMenu} from "../../components/header/HeaderMenu";
import {Footer} from "../../components/footer/Footer";
import {ArticlesGrid} from '../../components/blog/articles-grid/ArticlesGrid';


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

    const titleArticle = "THC Percentage Isn’t Everything: The Entourage Effect";
    const buttonArticle = "Read more";
    const imgArticle = "/static/de678efaec14b60c18c417abc8880597/82da7/cards_join_bg_img_1.jpg";
    const dataArticle = "APRIL 8, 2021";
    const textArticle = 'If you’re buying cannabis based solely on THC percentage, you’re missing out on some of the dankest products on the market.';
    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <SmallHero title={title} banner={banner}/>
                <ArticlesGrid titleArticle={titleArticle} buttonArticle={buttonArticle} imgArticle={imgArticle} dataArticle={dataArticle} textArticle={textArticle}/>
                <Footer/>
            </Layout>
        </>
    );
}

export default BlogPage;
