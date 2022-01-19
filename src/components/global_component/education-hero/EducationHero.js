import * as React from "react";
import { EducationHeroStyles } from "./EducationHero.styled";

export const EducationHero = ({title, data}) => {
    return (
        <EducationHeroStyles>
            <div className="hero-title">
                <h1>{title}</h1>
                <time>{data}</time>
            </div>
            <div className="hero-img">
                <img src="/static/de678efaec14b60c18c417abc8880597/344b2/cards_join_bg_img_1.jpg" alt="hero-img"/>
            </div>
           
        </EducationHeroStyles>
    );
}