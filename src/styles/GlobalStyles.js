import { createGlobalStyle } from 'styled-components';
import { media, xl, lg, md, sm, xs, xxs } from './utils/media_queries';
import { __CONTAINERS } from './utils/variables';


const GlobalStyles = createGlobalStyle`
    :root {
        --darkpurple: #612C8F;
        --black:      #000000;
        --grey:       #F0F0F0;
        --white:      #FFFFFF;
        --container-xl: 1400px;
        --container: 97%;
    }
    html {
        font-size: 10px;
        background-color: var(--white);
    }

    body {
        font-size: 2rem;
        scrollbar-width: thin;
        scrollbar-color: #612C8F #EEEEEF;
    }

    .p-0{
        padding: 0px 0px;
    }

    fieldset {
        border-color: rgba(0,0,0,0.1);
        border-width: 1px;
    }
    .container {
        width: ${__CONTAINERS.xl};
        margin: 0 auto;       
    }



    ${lg(`
        .container {
            width: ${__CONTAINERS.lg}
        }
    `)}
    ${xs(`
        .container {
            width: ${__CONTAINERS.xs}
        }
    `)}
    ${xxs(`
        .container {
            width: ${__CONTAINERS.xxs}
        }
    `)}
    

    

`;

export default GlobalStyles;
