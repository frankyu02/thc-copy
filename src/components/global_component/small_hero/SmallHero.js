import * as React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {SmallHeroStyled} from "./SmallHero.styled";

export const SmallHero = ({title, banner}) => {
    return (
        <div className="container">
            <SmallHeroStyled>
                <div className="hero-title">
                    <h1>{title}</h1>
                </div>
                <div className="hero-img">
                    <GatsbyImage image={getImage(banner)} alt={'banner'}/>
                </div>
            </SmallHeroStyled>
        </div>
    );
}