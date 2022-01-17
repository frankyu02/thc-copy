import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { SettingStyle } from "./SettingStyle";
import { getImageData } from "../../../utils/get_image_data";

export const SettingStandart = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    news {
                        newsOpenModal
                        newsText
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
    const {wpPage: {home: {news}}} = data;
    return (
        <SettingStyle>
            <div className='container'>
                <div className='setting_standart'>
                    <div className='settings_image'>
                        <GatsbyImage image={getImageData(news.newsImg)} alt={'banner'}/>
                    </div>
                    <div className='setting_text'>
                        <h3>{news.newsTitle}</h3>
                        <p>{news.newsText}</p>
                        <div>{news.newsOpenModal}</div>
                        <Link className={'link'} to="#">{news.newsButton.title}</Link>
                    </div>
                </div>
            </div>
        </SettingStyle>
    );
};

export default SettingStandart;