import React from 'react';
import {Layout, MenuLayout} from './src/components/layout/Layout';

export const Wrapper = ({element, props}) => {
    return(
        <Layout {...props}>
            {element}
        </Layout>
    )
}

export const MenuWrapper = ({element, props}) => {
    return(
        <MenuLayout {...props}>
            {element}
        </MenuLayout>
    )
}