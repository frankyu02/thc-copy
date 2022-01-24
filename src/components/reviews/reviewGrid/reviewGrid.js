import React from "react";
import ReviewGridStyles from "./reviewGrid.styled";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ReviewGrid = () => {
    
    const data = useStaticQuery(graphql`
        query {
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
              }
        }
    `)

    const cardsCompanyTitle = data?.wpPage?.reviews?.cardsCompany?.cardsCompanyTitle;
    const cardsCompanyItem = data?.wpPage?.reviews?.cardsCompany?.cardsCompanyItem;

    return (
      <div className="container">
        <ReviewGridStyles>
            <div className="container">
                <div className="header">{cardsCompanyTitle}</div>
                <div className="grid">
                    {cardsCompanyItem?.map?.((item, key) => (
                        <div key={key} className="cell">
                            <a href="#" target="_blank" className="logoBox">
                                <GatsbyImage 
                                    layout={'constrained'} 
                                    className='logo' 
                                    image={getImage(item?.cardsCompanyItemLogo?.localFile?.childImageSharp?.gatsbyImageData)} 
                                    alt={item?.cardsCompanyItemLogo?.altText}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </ReviewGridStyles>
      </div>
    );
}

export default ReviewGrid;