import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import DoublePageLinkStyles from './doublePageLink.styled';
import { FiArrowUpRight } from 'react-icons/fi';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const DoublePageLink = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(title: {eq: "Reviews"}) {
                reviews {
                  recommendation {
                    recommendationImg {
                      altText
                      localFile {
                        childrenImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    recommendationButtonName
                    recommendationButtonLink
                    recommendationTitle
                  }
                }
              }
        }
    `)

    const recommendation = data?.wpPage?.reviews?.recommendation;
    
    return (
        <DoublePageLinkStyles>
            <div className="container">
                <div className='wrapper'>
                    <div className="location">
                        <GatsbyImage 
                            image={getImage(recommendation[0]?.recommendationImg?.localFile?.childrenImageSharp[0]?.gatsbyImageData)} 
                            alt={recommendation[0]?.recommendationImg?.altText} 
                        />
                        <div className='content'>
                            <div className="title">
                                <h3>{recommendation[0]?.recommendationTitle}</h3>
                            </div>
                            <div className="link">
                                <Link to={recommendation[0]?.recommendationButtonLink}>{recommendation[0]?.recommendationButtonName} <FiArrowUpRight/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="question">
                        <GatsbyImage 
                            image={getImage(recommendation[1]?.recommendationImg?.localFile?.childrenImageSharp[0]?.gatsbyImageData)}
                            alt={recommendation[1]?.recommendationImg?.altText}
                        />
                        <div className='content'>
                            <div className="title">
                                <h3>{recommendation[1]?.recommendationTitle}</h3>
                            </div>
                            <div className="link">
                                <Link to={recommendation[1]?.recommendationButtonLink}>{recommendation[1]?.recommendationButtonName} <FiArrowUpRight/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DoublePageLinkStyles>
    )
}

export default DoublePageLink;