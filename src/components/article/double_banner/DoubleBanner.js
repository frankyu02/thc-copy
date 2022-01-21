import React from 'react';
import {DoubleBunner} from "./DoubleBunner.styled";
import { MainButton } from "../../ui/main_button/MainButton";

export const DoubleBanner = () => {
    return (
        <DoubleBunner>
            <div className={'container'}>
                <div className={'double_bunner'}>
                    <div className={'double_item'}>
                        <h3>CANNABIS MENU</h3>
                        <p>THE BEST SELECTION IN CANADA</p>
                        <MainButton url={'#'} target={'_blank'}>SHOP NOW</MainButton>
                    </div>
                    <div className={'double_item'}>
                        <h3>STAY IN THE KNOW</h3>
                        <p>Become a member and stay up to date with the latest THC news</p>
                        <MainButton url={'#'} target={'_blank'}>SUBSCRIBE</MainButton>
                    </div>
                </div>
            </div>
        </DoubleBunner>
    );
};