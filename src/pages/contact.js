import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import Seo from "../components/layout/Seo"


const ContactPage = () => {

    const seo = {
        title: 'Contact Title',
        description: 'Contact Description'
    }
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo2NzE="}}) {
                nodes {
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
