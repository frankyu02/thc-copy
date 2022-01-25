import React from 'react';
import {LocationMapStyle} from './LocationMap.styled';
import {StaticImage} from "gatsby-plugin-image";

export const LocationMap = () => {
    return (
        <LocationMapStyle>
            <div className={'container'}>
                <div className={'location_map'}>
                    <div className={'map_block'}>
                        <a target={'_blank'} href="https://www.google.com.ua/maps/place/%D0%92%D0%B0%D0%BD%D0%BA%D1%83%D0%B2%D0%B5%D1%80,+%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%9A%D0%BE%D0%BB%D1%83%D0%BC%D0%B1%D0%B8%D1%8F,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@49.2465094,-123.1376384,12z/data=!4m5!3m4!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375?hl=ru"><StaticImage src="../../../images/map.png" alt="map" /></a>
                    </div>
                    <div className={'map_info'}>
                        <h4>SOUTH VANCOUVER
                            6416 MAIN STREET</h4>
                        <h4>VANCOUVER, BC, V5W 2V4, CANADA</h4>
                        <h4>(604)-499-8420</h4>
                        <p>Our first and only flagship THC Canada location is based on Main Street in South Vancouver.  Come down and say hi and pick up some dank products!  Need directions?</p>
                        <button className={'main_button'}>GET DIRECTION</button>
                    </div>
                </div>
            </div>
        </LocationMapStyle>
    );
};