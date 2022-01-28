import React, {useEffect, useState} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SettingStyle } from "./SettingStyle";
import { MainButton } from "../../ui/main_button/MainButton";
import { ModalSettingSrandart } from "../../ui/modal_setting-standart/ModalSettingStandart";
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

export const SettingStandart = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    
    const styles = useSpring({
        opacity: inView ? 1 : 0 ,
        x: inView ? 0 : -100
    })
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
                                    gatsbyImageData(quality: 100)
                                }
                            }
                        }
                    }
                }
            }
        }

    `)
    const news = data?.wpPage?.home?.news;
    const [modal, setModal] = useState(false)
    useEffect(() => {
        const body = document.querySelector("body")
        body.style.overflow = modal ? "hidden" : "auto"
    }, [modal])
    return (
        <SettingStyle>
            <div className='container'>
                <div className='setting_standart'>
                    <div className='settings_image'>
                    <animated.div style={styles} ref={ref}>
                        <GatsbyImage image={getImage(news?.newsImg?.localFile?.childImageSharp?.gatsbyImageData)} alt={'banner'}/>
                        </animated.div>
                    </div>
                    <div className='setting_text'>
                        <h3>{news?.newsTitle}</h3>
                        {news?.newsText?.map?.((item, key) => (
                            <p key={key}>{item?.newsTextParagraph}</p>
                        ))}
                        <button onClick={()=>setModal(true)} className='read_more'>{news?.newsOpenModal}</button>
                        <MainButton url={news?.newsButton?.url} target={news?.newsButton?.target}>{news?.newsButton?.title}</MainButton>
                    </div>
                </div>
                <ModalSettingSrandart open={modal} close={() => setModal(false)}/>
            </div>
        </SettingStyle>
    );
};