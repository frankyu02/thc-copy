import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ModalLegendaryStyles } from "./ModalLegendary.styled";
import { MainButton } from "../../ui/main_button/MainButton";

export const ModalLegendary = () => {
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
        <ModalLegendaryStyles>
            <div className='legendary-modal_image'>
                <GatsbyImage className='legendary_baner' image={getImage(storyLegendary?.storyLegendaryModalImg1?.localFile?.childImageSharp?.gatsbyImageData)} alt={storyLegendary.storyLegendaryModalImg1.altText || 'banner'}/>
                <GatsbyImage className='legendary_baner' image={getImage(storyLegendary?.storyLegendaryModalImg2?.localFile?.childImageSharp?.gatsbyImageData)} alt={storyLegendary.storyLegendaryModalImg2.altText || 'banner'}/>
            </div>
            <div className={'legendary-modal_context'}>
                <div className="legendary-modal_text">
                    {storyLegendary?.storyLegendaryModalText?.map?.((item, key) => (
                        <p key={key}>{item?.storyLegendaryModalTextItem}</p>
                    ))}
                </div>

                <div><MainButton url={storyLegendary?.storyLegendaryButton?.url} target={storyLegendary?.storyLegendaryButton?.target}>{storyLegendary?.storyLegendaryButton?.title}</MainButton></div>
            </div>
        </ModalLegendaryStyles>
    );
};
