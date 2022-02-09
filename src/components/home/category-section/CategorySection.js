import * as React from "react"
import { useMemo } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CategoryStyles } from "./CategorySection.styled"
import { Fade } from "react-awesome-reveal"

const Html = () => {
  const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    categoriesCannabis {
                      categoriesCannabisButton {
                        target
                        title
                        url
                      }
                      categoriesCannabisItem {
                        categoriesCannabisItemName
                        fieldGroupName
                        categoriesCannabisItemLink
                        categoriesCannabisItemImg {
                          localFile {
                            childrenImageSharp {
                                gatsbyImageData 
                            }
                          }
                        }
                      }
                      categoriesCannabisSubTitle
                      categoriesCannabisTitle
                    }
                }
            }
        }
    `)
  const categoriesCannabis = data?.wpPage?.home?.categoriesCannabis
  return useMemo(
    () => {
      return <div className="container">
        <div className="category-section">
          <Fade cascade direction="left" damping={0.3}>
            <h2>{categoriesCannabis?.categoriesCannabisTitle}</h2>
            <h3>{categoriesCannabis?.categoriesCannabisSubTitle}</h3>
          </Fade>
          <div className="category">
            {categoriesCannabis?.categoriesCannabisItem?.map?.((item, key) => (
              <Link to={item?.categoriesCannabisItemLink || "#"} key={key}>
                <GatsbyImage
                  image={getImage(item?.categoriesCannabisItemImg?.localFile?.childrenImageSharp[0]?.gatsbyImageData)}
                  alt={"category"} />
                <h4>{item?.categoriesCannabisItemName}</h4>
              </Link>
            ))}
          </div>
          <Fade><div>
          <div className="button">
            <Link to={categoriesCannabis?.categoriesCannabisButton?.url || "#"} className="btn"
                  target={categoriesCannabis?.categoriesCannabisButton?.target}>{categoriesCannabis?.categoriesCannabisButton?.title}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M0 0H22V22H20V3.41421L1.56425 21.85L0.150036 20.4358L18.5858 2H0V0Z"
                      fill="#612C8F" />
              </svg>
            </Link>
          </div>
          </div></Fade>
        </div>
      </div>
    }, []
  )

}
export const CategorySection = ({ lazyLoading }) => {

  return (
    lazyLoading ? <CategoryStyles>
      <Html />
    </CategoryStyles> : <section className={"loading"}>
      <Html />
    </section>
  )
}