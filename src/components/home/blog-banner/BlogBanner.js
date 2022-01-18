import * as React from "react";
import {Link, StaticQuery, graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { BlogBannerStyles } from "./BlogBannerStyles";
import { MainButton } from "../../ui/main_button/MainButton";

export const BlogBanner = () => {
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
    const {wpPage: {home: {thcBlog}}} = data;
    return (
        <BlogBannerStyles>
            <div className="container">
                <div className="blog-banner">
                    <h2>{thcBlog.thcBlogTitle}</h2>
                    <div className="blog-wrap">
                        {thcBlog.thcBlogCard.map((item, key) => (
                            <div className="blog-item">
                                <GatsbyImage image={getImage(item.thcBlogCardImg.localFile.childrenImageSharp[0].gatsbyImageData)} alt={'category'}/>
                                <h3>{item.thcBlogCardTitle}</h3>
                                <Link to={item.thcBlogCardButton.url || '#'} key={key}>{item.thcBlogCardButton.title}
                                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V22H20V3.41421L1.56425 21.85L0.150036 20.4358L18.5858 2H0V0Z" fill="#fff"/>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="button">
                        <MainButton url={thcBlog.thcBlogButton.url} target={thcBlog.thcBlogButton.target}>{thcBlog.thcBlogButton.title}</MainButton>
                    </div>
                </div>
            </div>
        </BlogBannerStyles>
    );
}