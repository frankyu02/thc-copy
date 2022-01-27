import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import { TitleSubtext } from "../components/faq/title_subtext/TitleSubtext"
import Seo from "../components/layout/Seo"

const FaqPage = () => {

  const seo = {
    title: 'Faq Title',
    description: 'Faq Description'
  }

  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDoyNjY="}}) {
                nodes {
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
  const title = data?.allWpPage?.nodes[0]?.faq?.faqBanner?.faqBannerTitle;
  const banner = data?.allWpPage?.nodes[0]?.faq?.faqBanner?.faqBannerImg?.localFile?.childImageSharp?.gatsbyImageData;
  return (
    <>
      <Seo {...seo} />
      <SmallHero title={title} banner={banner} />
      <TitleSubtext />
    </>
  );
}

export default FaqPage;
