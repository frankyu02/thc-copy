import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { ModalLegendaryStyles } from "./ModalLegendary.styled";
import { MainButton } from "../../ui/main_button/MainButton";

export const ModalLegendary = ({open, close}) => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    storyLegendary {
                        storyLegendaryButton {
                            target
                            title
                            url
                        }
                        storyLegendaryTitle
                        storyLegendaryModalOpen
                        storyLegendaryModalText {
                          fieldGroupName
                          storyLegendaryModalTextItem
                        }
                        storyLegendaryModalImg1{
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                            altText
                        }
                        storyLegendaryModalImg2{
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
    const storyLegendary =  data?.wpPage?.home?.storyLegendary;
    return (
        <ModalLegendaryStyles className={open ? "active" : ''}>
            <div className={'modal_content'}>
                <div className={'close'} onClick={close}>
                    <StaticImage
                        src="../../../images/close.svg"
                        alt="close"
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
                <div className='legendary-modal_image'>
                    <GatsbyImage className='top_baner' image={getImage(storyLegendary?.storyLegendaryModalImg1?.localFile?.childImageSharp?.gatsbyImageData)} alt={storyLegendary?.storyLegendaryModalImg1?.altText || 'banner'}/>
                    <GatsbyImage className='bottom_baner' image={getImage(storyLegendary?.storyLegendaryModalImg2?.localFile?.childImageSharp?.gatsbyImageData)} alt={storyLegendary?.storyLegendaryModalImg2?.altText || 'banner'}/>
                </div>
                <div className={'legendary-modal_context'}>
                    <div className="legendary-modal_text">
                        {storyLegendary?.storyLegendaryModalText?.map?.((item, key) => (
                            <p key={key}>{item?.storyLegendaryModalTextItem}</p>
                        ))}
                    </div>
                    <div><MainButton url={storyLegendary?.storyLegendaryButton?.url} target={storyLegendary?.storyLegendaryButton?.target}>{storyLegendary?.storyLegendaryButton?.title}</MainButton></div>
                </div>
            </div>
            <div className={'overlay'} onClick={close}></div>
        </ModalLegendaryStyles>
    );
};
