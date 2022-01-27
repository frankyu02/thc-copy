import React, {useRef} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import { ModalSettingSrandartStyles } from "./ModalSettingStandart.styled";
import { MainButton } from "../../ui/main_button/MainButton";
import {OnEscape} from "../../../utils/onEscape";
import {OnClickOutside} from "../../../utils/onClickOutside";
import {ModalLegendaryStyles} from "../modal_legendary/ModalLegendary.styled";

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
                          gatsbyImageData(quality: 100)
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
    const ref = useRef()
    return (
        <ModalSettingSrandartStyles className={open ? "active" : ''}>
            {open && <OnEscape callback={close}/>}
            {open && <OnClickOutside firstRef={ref} handler={close} />}
            <div ref={ref} className={'modal_content'}>
                <button className={'close'} onClick={close}>
                    <StaticImage
                        src="../../../images/close.svg"
                        alt="close"
                        placeholder="blurred"
                        layout="fixed"
                    />
                </button>
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
            <button className={'overlay'} onClick={close}>overlay</button>
        </ModalSettingSrandartStyles>
    );
};
