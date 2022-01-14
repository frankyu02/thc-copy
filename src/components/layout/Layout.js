import React from 'react';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import SEO from './SEO';


const Layout = ({children, seo}) => {
    return(
        <>
            <GlobalStyles />
            <Typography />
            <SEO {...seo} />

            {children}
        </>
    )
}
export default Layout;