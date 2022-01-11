import React from 'react';
import Wrapper from './gatsby-render-layout';

export function wrapPageElement({element, props}) {
    return (
        <Wrapper {...props} element={element}/>
    )
}