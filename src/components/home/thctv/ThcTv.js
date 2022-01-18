import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage} from "gatsby-plugin-image";
import { ThcTvStyles } from "./ThcTvStyles";
import { getImageData } from "../../../utils/get_image_data";

export const ThcTv = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    thcTv {
                        thcTvText
                        thcTvTitle
                        thcTvImg {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        thcTvButton {
                            target
                            title
                            url
                        }
                    }
                }
            }
        }
    `)
    const {wpPage: {home: {thcTv}}} = data;
    return (
        <ThcTvStyles>
            <div className={'thctv-block'}>
                <div className={'container'}>
                    <div className={'thc-tv-text'}>
                        <h2>THC TV</h2>
                        <p>THC TV offers YouTube viewers an inside look into the most legendary cannabis store in Canada. We'll explore everything from product ordering to facility tours to events and more.  Follow Snack Bundles, Campaign Colin, Nick The Quick and team through their daily adventures.</p>
                        <p>The channel currently has four shows: THC TV, Dank TV, Certified Dank and CMPND Vlogs. </p>
                        <div className={'thc-tv-img-mob'}>
                            <GatsbyImage image={getImageData(thcTv.thcTvImg)} alt={thcTv.thcTvImg.altText || 'banner'}/>
                        </div>
                        <Link to={thcTv.thcTvButton.url || '#'} className="btn btn--white" target={thcTv.thcTvButton.target}>{thcTv.thcTvButton.title} 
                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 16V2.22222V0L13 8L0 16Z" fill="black"/>
                        </svg>
                        </Link>
                    </div>
                    <div className={'thc-tv-img'}>
                        <GatsbyImage image={getImageData(thcTv.thcTvImg)} alt={thcTv.thcTvImg.altText || 'banner'}/>
                    </div>
                </div>
            </div>
        </ThcTvStyles>
    );
};

export default ThcTv;