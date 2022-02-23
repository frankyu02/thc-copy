import React from 'react';
import Layout from './src/components/layout/Layout';
import CheckoutProvider from './src/contexts/checkout';

const Wrapper = ({element, props}) => {
    return(
        <CheckoutProvider>
            <Layout {...props}>
                {element}
            </Layout>
        </CheckoutProvider>
    )
}

export default Wrapper;