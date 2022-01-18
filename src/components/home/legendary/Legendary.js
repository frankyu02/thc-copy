import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { LegendaryStyles } from "./LegendaryStyles";
import { getImageData } from "../../../utils/get_image_data";
import { MainButton } from "../../ui/main_button/MainButton";

export const Legendary = () => {
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
                        storyLegendaryText
                        storyLegendaryTitle
                        storyLegendaryMainImg {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                            altText
                        }
                    }
                    cardsJoin {
                        cardsJoinButton {
                            target
                            title
                            url
                        }
                        cardsJoinSubTitle
                        cardsJoinTitle
                        cardsJoinBgImg {
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
    `)
    const {wpPage: {home: {storyLegendary}}} = data;
    const {wpPage: {home: {cardsJoin}}} = data;
    return (
        <LegendaryStyles>
            <div className={'container'}>
                <div className={'main_legendary'}>
                    <div className='legendary_image'>
                        <GatsbyImage className='legendary_baner' image={getImageData(storyLegendary.storyLegendaryMainImg)} alt={storyLegendary.storyLegendaryMainImg.altText || 'banner'}/>
                    </div>
                    <div className={'legendary_text'}>
                        <h2>{storyLegendary.storyLegendaryTitle}</h2>
                        <p>{storyLegendary.storyLegendaryText}</p>
                        <div className='read_more'>Read more...</div>
                        <div><MainButton url={storyLegendary.storyLegendaryButton.url} target={storyLegendary.storyLegendaryButton.target}>{storyLegendary.storyLegendaryButton.title}</MainButton></div>
                    </div>
                </div>
                <div className={'legendary_parent'}>
                    {cardsJoin.map((item, key) => (
                        <div key={key} className='legendary_item'>
                            <div className='overlay'></div>
                            <GatsbyImage layout={'constrained'} className='image_bg' image={getImage(item.cardsJoinBgImg.localFile.childrenImageSharp[0].gatsbyImageData)} alt={'banner'}/>
                            <div className='content_parent'>
                                <h3>{item.cardsJoinTitle}</h3>
                                <p>{item.cardsJoinSubTitle}</p>
                                <MainButton url={item.cardsJoinButton.url} target={item.cardsJoinButton.target}>{item.cardsJoinButton.title}</MainButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LegendaryStyles>
    );
};

export default Legendary;