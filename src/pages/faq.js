import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import { TitleSubtext } from "../components/faq/title_subtext/TitleSubtext"
import Seo from "../components/layout/Seo"
import FAQComponent from "../components/faq/FAQ_component/FaqComponent"

const FaqPage = () => {
  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDoyNjY="}}) {
                nodes {
                    template {
                        seoMetaTags {
                            seoMetaTagsDescription
                            seoMetaTagsJsonShema
                            seoMetaTagsTitle
                        }
                    }
                  faq {
                    faqBanner {
                      faqBannerTitle
                      faqBannerImg {
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
  const title = data?.allWpPage?.nodes[0]?.faq?.faqBanner?.faqBannerTitle;
  const banner = data?.allWpPage?.nodes[0]?.faq?.faqBanner?.faqBannerImg?.localFile?.childImageSharp?.gatsbyImageData;
  return (
    <>
      <Seo {...seo} />
      <SmallHero title={title} banner={banner} />
      <TitleSubtext />
      <FAQComponent />
    </>
  );
}

export default FaqPage;
