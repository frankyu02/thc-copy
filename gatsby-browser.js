import React from 'react';
import Wrapper from './gatsby-render-layout';
import { AgeGate } from './src/components/AgeGate/AgeGate';

export function wrapPageElement({element, props}) {
    return (
        <>
            {/* <AgeGate/> */}
            <Wrapper {...props} element={element}/>
        </>
    )
}