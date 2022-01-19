import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ModalSettingSrandartStyles } from "./ModalSettingStandart.styled";
import { MainButton } from "../../ui/main_button/MainButton";

export const ModalSettingSrandart = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                  news {
                    newsOpenModal
                    newsText {
                      newsTextParagraph
                    }
                    newsButton {
                      target
                      title
                      url
                    }
                    newsModalText {
                      fieldGroupName
                      newsModalTextParagraph
                    }
                    newsModalImg{
                        localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      altText
                    }
                  }
                }
            }
        }
    `)
    const news =  data?.wpPage?.home?.news;
    return (
        <ModalSettingSrandartStyles>
            <div className={'legendary-modal_context'}>
                <div className="legendary-modal_text">
                    {news?.newsModalText?.map?.((item, key) => (
                        <p key={key}>{item?.newsModalTextParagraph}</p>
                    ))}
                </div>

                <MainButton url={news?.newsButton?.url} target={news?.newsButton?.target}>{news?.newsButton?.title}</MainButton>
            </div>
            <div className='legendary-modal_image'>
                <GatsbyImage className='legendary_baner' image={getImage(news?.newsModalImg?.localFile?.childImageSharp?.gatsbyImageData)} alt={news.newsModalImg.altText || 'modal-img'}/>
            </div>
        </ModalSettingSrandartStyles>
    );
};
