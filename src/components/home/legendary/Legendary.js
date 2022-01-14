import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { LegendaryStyles } from "./LegendaryStyles";
import { getImageData } from "../../../utils/get_image_data";

export const Legendary = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    storyLegendary {
                        storyLegendaryButtonLink
                        storyLegendaryButtonName
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
                        cardsJoinButtonLink
                        cardsJoinButtonName
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
                    <div>
                        <GatsbyImage image={getImageData(storyLegendary.storyLegendaryMainImg)} alt={storyLegendary.storyLegendaryMainImg.altText || 'banner'}/>
                    </div>
                    <div>
                        <h2>{storyLegendary.storyLegendaryTitle}</h2>
                        <p>{storyLegendary.storyLegendaryText}</p>
                        <div>Read more...</div>
                        <Link to="#">{storyLegendary.storyLegendaryButtonName}</Link>
                    </div>
                </div>
                <div className={'legendary_parent'}>
                    {cardsJoin.map((item, key) => (
                        <div key={key}>
                            <GatsbyImage image={getImage(item.cardsJoinBgImg.localFile.childrenImageSharp[0].gatsbyImageData)} alt={'banner'}/>
                            <h3>{item.cardsJoinTitle}</h3>
                            <p>{item.cardsJoinSubTitle}</p>
                            <Link to="#">{item.cardsJoinButtonName}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </LegendaryStyles>
    );
};

export default Legendary;