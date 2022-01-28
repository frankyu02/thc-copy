import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import Seo from "../components/layout/Seo"


const ContactPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo2NzE="}}) {
                nodes {
                    template {
                        seoMetaTags {
                            seoMetaTagsDescription
                            seoMetaTagsJsonShema
                            seoMetaTagsTitle
                        }
                    }
                    contactUs {
                        contactUsBanner {
                            contactUsBannerTitle
                            contactUsBannerImg {
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
    const contactBunner = data?.allWpPage?.nodes[0]?.contactUs?.contactUsBanner;
    return (
      <>
          <Seo {...seo} />
          <SmallHero banner={contactBunner?.contactUsBannerImg?.localFile}
                     title={contactBunner?.contactUsBannerTitle} />
      </>
    );
}

export default ContactPage;
