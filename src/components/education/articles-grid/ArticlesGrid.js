import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { ArticlesGridStyles } from "./ArticlesGrid.styled";
import { getImageData } from "../../../utils/get_image_data";
import { GatsbyImage } from "gatsby-plugin-image";

export const ArticlesGrid = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpEducation {
          edges {
            node {
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
              id
            }
          }
        }
      }
    `)

    const educations = data?.allWpEducation?.edges;

    return (
        <ArticlesGridStyles>
            <div className="container">
              <div className="article-wrap">
                {
                  educations.map(item => {
                    return (
                      <div className="article-item" key={item?.node?.id}>
                        <div className="article-img">
                          <GatsbyImage image={getImageData(item?.node?.featuredImage.node)} alt={item?.node?.title} />
                        </div>
                        <h3>{item?.node?.title}</h3>
                        <Link to={item?.node?.slug} className="article-buttom article-buttom-desktop">
                          Read more
                          <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#fff" strokeWidth="2" />
                          </svg>
                        </Link>
                        
                      </div>
                    )
                  })
                }
              </div>
            </div>
        </ArticlesGridStyles>
    );
}
