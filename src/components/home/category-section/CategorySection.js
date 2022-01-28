import * as React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { CategoryStyles } from "./CategorySection.styled";
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

export const CategorySection = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    
    const styles = useSpring({
        opacity: inView ? 1 : 0 ,
        config: {duration: 1000}
    })
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
                                gatsbyImageData(quality: 100)
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
    return (
        <CategoryStyles>
            <div className="container">
                <div className="category-section">
                    <h2>{categoriesCannabis?.categoriesCannabisTitle}</h2>
                    <h3>{categoriesCannabis?.categoriesCannabisSubTitle}</h3>
                    <animated.div style={styles} ref={ref}>
                    <div className="category">
                        {categoriesCannabis?.categoriesCannabisItem?.map?.((item, key) => (
                            <Link to={item?.categoriesCannabisItemLink || '#'} key={key}>
                                <GatsbyImage image={getImage(item?.categoriesCannabisItemImg?.localFile?.childrenImageSharp[0]?.gatsbyImageData)} alt={'category'}/>
                                <h4>{item?.categoriesCannabisItemName}</h4>
                            </Link>
                        ))}
                    </div>
                    </animated.div>
                    <div className="button">
                        <Link to={categoriesCannabis?.categoriesCannabisButton?.url || '#'} className="btn" target={categoriesCannabis?.categoriesCannabisButton?.target}>{categoriesCannabis?.categoriesCannabisButton?.title}
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H22V22H20V3.41421L1.56425 21.85L0.150036 20.4358L18.5858 2H0V0Z" fill="#612C8F"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </CategoryStyles>
    );
}