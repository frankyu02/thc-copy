import * as React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { BlogBannerStyled } from "./BlogBanner.styled";
import { MainButton } from "../../ui/main_button/MainButton";
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

export const BlogBanner = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    
    const styles = useSpring({
        opacity: inView ? 1 : 0 ,
        x: inView ? 0 : 100
    })
    const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    thcBlog {
                    fieldGroupName
                    thcBlogTitle
                    thcBlogButton {
                      target
                      title
                      url
                    }
                    thcBlogCard {
                      fieldGroupName
                      thcBlogCardTitle
                      thcBlogCardButton {
                        target
                        title
                        url
                      }
                      thcBlogCardImg{
                          localFile {
                            childrenImageSharp {
                                gatsbyImageData(quality: 100)
                            }
                          }
                      }
                    }
                  }
                }
            }
        }
    `)
    const thcBlog = data?.wpPage?.home?.thcBlog
    return (
        <BlogBannerStyled>
            <div className="container">
                <div className="blog-banner">
                <animated.div style={styles} ref={ref}>
                    <h2>{thcBlog?.thcBlogTitle}</h2>
                    </animated.div>
                    <div className="blog-wrap">
                        {thcBlog?.thcBlogCard?.map?.((item, key) => (
                            <div className="blog-item" key={key}>
                                <GatsbyImage image={getImage(item?.thcBlogCardImg?.localFile?.childrenImageSharp[0]?.gatsbyImageData)} alt={'category'}/>
                                <h3>{item?.thcBlogCardTitle}</h3>
                                <Link to={item?.thcBlogCardButton?.url || '#'}>{item?.thcBlogCardButton?.title}
                                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H22V22H20V3.41421L1.56425 21.85L0.150036 20.4358L18.5858 2H0V0Z" fill="#fff"/>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="button">
                        <MainButton url={thcBlog?.thcBlogButton?.url} target={thcBlog?.thcBlogButton?.target}>{thcBlog?.thcBlogButton?.title}</MainButton>
                    </div>
                </div>
            </div>
        </BlogBannerStyled>
    );
}