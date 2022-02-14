import * as React from "react"
import { ArticlesGridStyles } from "./ArticlesGrid.styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

export const ArticlesGrid = () => {

  const data = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            title
            date
            slug
            excerpt
            blogPost {
              linkName
            }
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
      }
    }
  `)
  const posts = data?.allWpPost?.edges
  return (
    <ArticlesGridStyles>
      <div className="container">
        <div className="article-wrap">
          {posts.map((item, key) => (
            <div key={key} className="article-item">
              <Fade>
                <div className="article-img">
                  <GatsbyImage
                    image={getImage(item?.node?.featuredImage?.node?.localFile)}
                    alt={"background"} />
                </div>
              </Fade>
              <Fade>
                <div className="article-content">
                  <h3>{item?.node?.title}</h3>
                  <time>{item?.node?.date}</time>
                  <Link to={item?.node?.slug}
                        className="article-buttom article-buttom-mobile">{item?.node?.blogPost?.linkName}
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                    </svg>
                  </Link>
                </div>
              </Fade>
              <div className="content-wrap">
                <Fade style={{display: 'flex'}}>
                <div dangerouslySetInnerHTML={{ __html: item?.node?.excerpt }} />
                  <Link to={item?.node?.slug}
                        className="article-buttom article-buttom-desktop">{item?.node?.blogPost?.linkName}
                          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                          </svg>
                  </Link>
                </Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ArticlesGridStyles>
  )
}
