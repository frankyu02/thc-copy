import React from 'react';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import Seo from './Seo';


const Layout = ({children, seo}) => {
    return(
        <>
            <GlobalStyles />
            <Typography />
            <Seo {...seo} />

            {children}
        </>
    )
}
export default Layout;