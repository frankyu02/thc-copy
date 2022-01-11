import React from 'react';
import Layout from './src/components/layout/Layout';

const Wrapper = ({element, props}) => {
    return(
        <Layout {...props}>
            {element}
        </Layout>
    )
}

export default Wrapper;