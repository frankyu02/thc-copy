import * as React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { EducationHeroStyles } from "./EducationHero.styled";

export const EducationHero = ({title, data}) => {
    return (
        <EducationHeroStyles>
           <h1>{title}</h1>
            <time>{data}</time>
        </EducationHeroStyles>
    );
}