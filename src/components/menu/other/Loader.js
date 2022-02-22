import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Loader(){
    return(
        <>
            <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_o9nn83ba.json"
                style={{width: 300, height: 300}}
            />
        </>
    )
}