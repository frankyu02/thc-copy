import styled from 'styled-components';
import { sm } from '../../styles/utils/media_queries';

export const AgeGateStyles = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: grey;
  overflow: hidden;
  display: none;


  .bg {
    position: relative;
    z-index: -1;
    height: 100%;

    [data-gatsby-image-wrapper] {
      width: 100%;
      height: 100%;
      z-index: -1;
      position: relative;
    }
  }  

  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Integral CF';
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
    max-height: 100vh;
    overflow: auto;
    
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  .logo {
    margin-bottom: 50px;
  }

  .title {
    font-size: 52px;
    line-height: 62px; 
    margin-top: 43px;

    ${sm(`
      font-size: 72px;
      line-height: 86px; 
      margin-top: 0;
    `)}
  }

  .age {
    margin: 43px 0;
    font-size: 72px;
    line-height: 86px;    
    
    ${sm(`
      font-size: 72px;
      line-height: 86px; 
      margin-top: 0;
      margin-top: 80px;
      margin-bottom: 65px;
    `)}
  }

  .subtitle {
    font-size: 18px;
    line-height: 22px;     
  }

  .main_button {
    margin-top: 53px;
    max-width: 100%;

    ${sm(`
      max-width: 330px;
    `)}
  }

  .range {
    width: 100%;

    ${sm(`
      width: 520px;
    `)}
  }

`;