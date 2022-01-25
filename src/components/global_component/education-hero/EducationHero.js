import * as React from "react";
import { EducationHeroStyles } from "./EducationHero.styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const EducationHero = ({title, data, banner}) => {
    return (
        <EducationHeroStyles>
            <div className="hero-title">
                <h1>{title}</h1>
                <time>{data}</time>
            </div>
            <div className="hero-img">
                <GatsbyImage image={getImage(banner)} alt={'banner'}/>
            </div>           
        </EducationHeroStyles>
    );
}