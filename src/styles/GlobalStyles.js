import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --darkpurple: #612C8F;
        --black:      #000000;
        --grey:       #F0F0F0;
        --white:      #FFFFFF;
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
`;

export default GlobalStyles;
