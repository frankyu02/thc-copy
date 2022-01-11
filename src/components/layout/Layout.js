import React from 'react';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';


const Layout = ({children}) => {
    return(
        <>
            <GlobalStyles />
            <Typography />
            {children}
        </>
    )
}
export default Layout;