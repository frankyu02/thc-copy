import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import { ModalSettingSrandartStyles } from "./ModalSettingStandart.styled";
import { MainButton } from "../../ui/main_button/MainButton";

export const ModalSettingSrandart = ({open, close}) => {
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
    const news = data?.wpPage?.home?.news;
    return (
        <ModalSettingSrandartStyles className={open ? "active" : ''}>
            <div className={'modal_content'}>
                <div className={'close'} onClick={close}>
                    <StaticImage
                        src="../../../images/close.svg"
                        alt="close"
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
                <div className={'legendary-modal_context'}>
                    <div className="legendary-modal_text">
                        {news?.newsModalText?.map?.((item, key) => (
                            <p key={key}>{item?.newsModalTextParagraph}</p>
                        ))}
                    </div>
                    <MainButton url={news?.newsButton?.url} target={news?.newsButton?.target}>{news?.newsButton?.title}</MainButton>
                </div>
                <div className='legendary-modal_image'>
                    <GatsbyImage image={getImage(news?.newsModalImg?.localFile?.childImageSharp?.gatsbyImageData)} alt={news.newsModalImg.altText || 'modal-img'}/>
                </div>
            </div>
            <div className={'overlay'} onClick={close}></div>
        </ModalSettingSrandartStyles>
    );
};
