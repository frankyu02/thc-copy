import React from 'react';
import Wrapper from './gatsby-render-layout';

export function wrapPageElement({element, props}) {
    return element;
    return (
        <Wrapper {...props} element={element}/>
    )
}