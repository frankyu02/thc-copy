import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import MenuHubApollo from '../components/menu/MenuHubApollo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Seo from "../components/layout/Seo"

export default function Menu(){
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {slug: {eq: "menu"}}) {
                nodes {
                    template {
                        seoMetaTags {
                            seoMetaTagsDescription
                            seoMetaTagsJsonShema
                            seoMetaTagsTitle
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
    return(
        <>
        <Seo {...seo} />
        <MenuHubApollo />
        </>
    )
}