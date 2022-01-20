import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import DoublePageLinkStyles from './doublePageLink.styled';
import { FiArrowUpRight } from 'react-icons/fi';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import locationImage from '../../../images/location.png';
import questionImage from '../../../images/question.png';

const DoublePageLink = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(title: {eq: "Reviews"}) {
                reviews {
                  recommendation {
                    recommendationTitle
                    recommendationButtonName
                    recommendationImg {
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
    `)

    const recommendation = data?.wpPage?.reviews?.recommendation;

    return (
        <DoublePageLinkStyles>
            <div className="container">
                <div className='wrapper'>
                    <div className="location">
                        <img src={locationImage} alt='picture1' className='image'/>
                        <div className='content'>
                            <div className="title">
                                <h3>OUR STORE LOCATION</h3>
                            </div>
                            <div className="link">
                                <Link>Visit us <FiArrowUpRight/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="question">
                        <img src={questionImage} alt='picture2' className='image'/>
                        <div className='content'>
                            <div className="title">
                                <h3>HAVE QUESTIONS?</h3>
                            </div>
                            <div className="link">
                                <Link>FAQ's <FiArrowUpRight/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DoublePageLinkStyles>
    )
}

export default DoublePageLink;