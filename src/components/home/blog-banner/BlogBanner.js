import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BlogBannerStyled } from "./BlogBanner.styled"
import { MainButton } from "../../ui/main_button/MainButton"
import { getImageData } from "../../../utils/get_image_data"

export const BlogBanner = ({ lazyLoading }) => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(limit: 2) {
        nodes {
          title
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      wpPage(uri: {eq: "/"}) {
        home {
            thcBlog {
            thcBlogTitle
            thcBlogMoreButton
          }
        }
      }
    }
  `)


  const __HEADING = data?.wpPage?.home?.thcBlog?.thcBlogTitle
  const __MORE_BTN = data?.wpPage?.home?.thcBlog?.thcBlogMoreButton
  const __POSTS = data?.allWpPost?.nodes
  const Html = () => <div className="container">
    <div className="blog-banner">
      <h2>{__HEADING}</h2>
      <div className="blog-wrap">
        {__POSTS.map(({ featuredImage, slug, title }) => {
          return (
            <div className="blog-item" key={slug}>
              <GatsbyImage image={getImageData(featuredImage.node)} alt={title} />
              <h3>{title}</h3>
              <Link aria-label={"open blog article "} to={"/blog/" + slug}>
                Read <span className={"hide-text"}>  about {title}</span> more
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M0 0H22V22H20V3.41421L1.56425 21.85L0.150036 20.4358L18.5858 2H0V0Z" fill="#fff" />
                </svg>
              </Link>
            </div>
          )
        })}
      </div>
      <div className="button">
        <MainButton url="/blog/">{__MORE_BTN}</MainButton>
      </div>
    </div>
  </div>
  return (
    lazyLoading ? <BlogBannerStyled>
      <Html />
    </BlogBannerStyled> : <section className={"loading"}><Html /></section>
  )
}