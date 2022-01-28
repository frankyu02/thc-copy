import React from 'react';
import { LargeBannerStyled } from "./LargeBanner.styled";
import MainButton from "../../ui/main_button/MainButton";
import {GatsbyImage} from "gatsby-plugin-image";

export const LargeBanner = ({images, titleLargeBanner, textLargeBanner, butonLargeBanner}) => {

    return (
        <LargeBannerStyled>
            <div className={'container'}>
                <div className={'large_wrapper'}>
                    <div className={'overlay'}></div>
                    <div className={'content_parent'}>
                        <div className={'large_banner'}>
                            <h2>{titleLargeBanner}</h2>
                            <p>{textLargeBanner}</p>
                        </div>
                        <MainButton url={butonLargeBanner?.url} target={butonLargeBanner?.target}>{butonLargeBanner?.title}</MainButton>
                    </div>
                    <GatsbyImage image={images} alt={'banner'}/>
                </div>
            </div>
        </LargeBannerStyled>
    );
};