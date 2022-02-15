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
                            <Fade cascade direction='up'>
                                <h2>{titleLargeBanner}</h2>
                                <p>{textLargeBanner}</p>
                            </Fade>
                        </div>
                        <Fade direction='up'delay={1000}>
                            <div>
                            <MainButton url={butonLargeBanner?.url} target={butonLargeBanner?.target}>{butonLargeBanner?.title}</MainButton>
                            </div>
                        </Fade>
                    </div>
                    <GatsbyImage image={images} alt={'banner'}/>
                </div>
            </div>
        </LargeBannerStyled>
    );
};