import * as React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {SmallHeroStyles} from "./SmallHeroStyles";

export const SmallHero = ({title, banner}) => {
    return (
        <SmallHeroStyles>
            <div className="hero-title">
                <h1>{title}</h1>
            </div>
            <div className="hero-img">
                <GatsbyImage image={getImage(banner)} alt={'banner'}/>
            </div>
        </SmallHeroStyles>
    );
}