import React from 'react';
import {Wrapper, MenuWrapper} from './gatsby-render-layout';

export function wrapPageElement({element, props}) {
    if (props.location.pathname.includes("menu")){
        return (
            <>
                <MenuWrapper {...props} element={element}/>
            </>
        )
    }
    else {
        return (
            <>
                <Wrapper {...props} element={element}/>
            </>
        )
    }
}