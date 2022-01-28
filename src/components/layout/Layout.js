import React from 'react';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import Seo from './Seo';
import { AgeGate } from '../AgeGate/AgeGate';


const Layout = ({ children, seo }) => {
  
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Seo {...seo} />   
      <AgeGate/>   
      {children}
    </>
  )
}
export default Layout;