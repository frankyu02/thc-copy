import * as React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {SmallHeroStyled} from "./SmallHero.styled";
import { Fade } from "react-awesome-reveal"

export const SmallHero = ({title, banner}) => {
    return (
        <div>
            <SmallHeroStyled>
                <div className="hero-title">
                    <Fade direction="left">
                    <h1>{title}</h1>
                    </Fade>
                </div>
                <div className="hero-img">
                    <GatsbyImage image={getImage(banner)} alt={'banner'}/>
                </div>
            </SmallHeroStyled>
        </div>
    );
}