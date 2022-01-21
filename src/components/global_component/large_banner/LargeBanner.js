import React from 'react';
import { LargeBannerStyled } from "./LargeBanner.styled";
import MainButton from "../../ui/main_button/MainButton";

export const LargeBanner = () => {
    return (
        <LargeBannerStyled>
            <div className={'large_banner'}>
                <h1>Cannabis Online Menu</h1>
                <p>Our online menu with the widest selection of craft and high quality legal cannabis products in the country</p>
            </div>
            <MainButton url={'#'} target={"_target"}>Order CANNABIS Online</MainButton>
        </LargeBannerStyled>
    );
};