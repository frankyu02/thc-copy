import React from 'react';
import CheckoutProvider from './src/contexts/checkout';
import {Layout, MenuLayout} from './src/components/layout/Layout';

export const Wrapper = ({element, props}) => {
    return(
        <CheckoutProvider>
            <Layout {...props}>
                {element}
            </Layout>
        </CheckoutProvider>
    )
}

export const MenuWrapper = ({element, props}) => {
    return(
        <CheckoutProvider>
            <MenuLayout {...props}>
                {element}
            </MenuLayout>
        </CheckoutProvider>
    )
}