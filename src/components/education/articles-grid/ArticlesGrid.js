import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { ArticlesGridStyles } from "./ArticlesGrid.styled"
import { getImageData } from "../../../utils/get_image_data"
import { GatsbyImage } from "gatsby-plugin-image"
import { Fade } from "react-awesome-reveal"

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

  const educations = data?.allWpEducation?.edges

  return (
    <ArticlesGridStyles>
      <div className="container">
        <div className="article-wrap">
          {
            educations.map(item => {
              return (
                <div className="article-item" key={item?.node?.id}>
                  <div className="article-img">
                    <Fade><div>
                    <GatsbyImage image={getImageData(item?.node?.featuredImage.node)} alt={item?.node?.title} />
                    </div></Fade>
                  </div>
                  <Fade direction="down">
                  <h3>{item?.node?.title}</h3>
                  </Fade>
                  <Link aria-label={"open article page"} to={item?.node?.slug}
                        className="article-buttom article-buttom-desktop">
                    <span className={"hide"}> open article page and </span> <span> Read more  </span>
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
  )
}
