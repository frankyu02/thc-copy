import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SettingStyle } from "./SettingStyle";
import { MainButton } from "../../ui/main_button/MainButton";

export const SettingStandart = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    news {
                        newsOpenModal
                        newsText {
                            newsTextParagraph
                        }
                        newsTitle
                        newsButton {
                            target
                            title
                            url
                        }
                        newsImg {
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
    const news = data?.wpPage?.home?.news;
    return (
        <SettingStyle>
            <div className='container'>
                <div className='setting_standart'>
                    <div className='settings_image'>
                        <GatsbyImage image={getImage(news?.newsImg?.localFile?.childImageSharp?.gatsbyImageData)} alt={'banner'}/>
                    </div>
                    <div className='setting_text'>
                        <h3>{news?.newsTitle}</h3>
                        {news?.newsText?.map?.((item, key) => (
                            <p key={key}>{item?.newsTextParagraph}</p>
                        ))}
                        <div className='read_more'>{news?.newsOpenModal}</div>
                        <MainButton url={news?.newsButton?.url} target={news?.newsButton?.target}>{news?.newsButton?.title}</MainButton>
                    </div>
                </div>
            </div>
        </SettingStyle>
    );
};