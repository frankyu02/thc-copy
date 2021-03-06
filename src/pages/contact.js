import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SmallHero } from "../components/global_component/small_hero/SmallHero"
import Seo from "../components/layout/Seo"
import ContactForm from "../components/ContactPage/ContactForm"
import ContactMap from "../components/ContactPage/ContactMap/ContactMap"
import styled from "styled-components"
import LocationParking from "../components/location/location_map/location parking/locationParking"


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
    const Background = styled.div`
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: -2;
        background: var(--grey);
    `;
    return (
      <>
        <Seo {...seo} />
        <Background></Background>
        <SmallHero banner={contactBunner?.contactUsBannerImg?.localFile}
                     title={contactBunner?.contactUsBannerTitle} />
        <ContactMap />
        <LocationParking />
        <ContactForm />
      </>
    );
}

export default ContactPage;
