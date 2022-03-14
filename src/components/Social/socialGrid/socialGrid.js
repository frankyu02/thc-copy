import React from "react";
import { SocialGridStyles, UnderLayerStyles } from "./socialGrid.styled"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SocialGrid = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(title: {eq: "Social"}) {
                social {
                  socialFollow {
                    socialFollowTitle
                    socialFollowCard {
                      socialFollowCardTitile
                      socialFollowCardIcon {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                      socialFollowCardIconWhite {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                      socialFollowCardImg {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                      socialFollowLink
                    }
                  }
                }
              }
        }
    `)
    const socialFollowTitle = data?.wpPage?.social?.socialFollow?.socialFollowTitle;
    const socialFollowCard = data?.wpPage?.social?.socialFollow?.socialFollowCard;

    return (
      <>
      <UnderLayerStyles>
        <div className="container">
            <SocialGridStyles>
                <div className="box">
                    <div className="header">{socialFollowTitle}</div>
                    <div className="grid">
                        {socialFollowCard?.map?.((item, key) => (
                          <a href={item.socialFollowLink} target="_blank">
                            <div key={key} className="cell">
                                <div className="filler"></div>
                                <GatsbyImage 
                                  className='backgroundImage' 
                                  image={getImage(item?.socialFollowCardImg?.localFile?.childImageSharp?.gatsbyImageData)} 
                                  alt={item?.socialFollowCardImg?.altText}
                                />
                                <GatsbyImage 
                                  className='logoOriginal' 
                                  image={getImage(item?.socialFollowCardIcon?.localFile?.childImageSharp?.gatsbyImageData)} 
                                  alt={item?.socialFollowCardIcon?.altText}
                                />
                                <GatsbyImage 
                                  className='logoWhite' 
                                  image={getImage(item?.socialFollowCardIconWhite?.localFile?.childImageSharp?.gatsbyImageData)} 
                                  alt={item?.socialFollowCardIconWhite?.altText}
                                />
                                <div className="textBox">
                                  <p className="logoText">{item?.socialFollowCardTitile}</p>
                                </div>
                            </div>
                          </a>
                        ))}
                    </div>
                </div>
            </SocialGridStyles>
        </div>
        </UnderLayerStyles>
      </>
    );
}

export default SocialGrid;