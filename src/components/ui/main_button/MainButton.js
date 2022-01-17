import React from 'react';
import {Link} from "gatsby";

export const MainButton = ({children, url, target}) => {
    return (
        <Link to={url || '/'} className="main_button" target={target}>{children}</Link>
    );
};

export default MainButton;