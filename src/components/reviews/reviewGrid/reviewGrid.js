import React from "react"
import ReviewGridStyles from "./reviewGrid.styled"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Fade } from "react-awesome-reveal"

const ReviewGrid = () => {

  const data = useStaticQuery(graphql`
        query  {
            wpPage(title: {eq: "Reviews"}) {
                reviews {
                    cardsCompany {
                        cardsCompanyTitle
                        cardsCompanyItem {
                            cardsCompanyItemLogo {
                                altText
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                            }
                        }
                    }
                }
                link
            }
        }
    `)

  const cardsCompanyTitle = data?.wpPage?.reviews?.cardsCompany?.cardsCompanyTitle;
  const cardsCompanyItem = data?.wpPage?.reviews?.cardsCompany?.cardsCompanyItem;
  const link = data?.wpPage?.link;
  return (
    <div className="container">
      <ReviewGridStyles>
        <div className="container">
          <Fade><div>
          <div className="header">{cardsCompanyTitle}</div>
          </div></Fade>
          <div className="grid">
            {cardsCompanyItem?.map?.((item, key) => (
              <div key={key} className="cell">
                <a href={link} rel="noreferrer" target="_blank" className="logoBox">
                  <Fade><div>
                  <GatsbyImage
                    layout={"constrained"}
                    className="logo"
                    image={getImage(item?.cardsCompanyItemLogo?.localFile?.childImageSharp?.gatsbyImageData)}
                    alt={item?.cardsCompanyItemLogo?.altText}
                  />
                  </div></Fade>
                </a>
              </div>
            ))}
          </div>
        </div>
      </ReviewGridStyles>
    </div>
  )
}

export default ReviewGrid