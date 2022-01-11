import { createGlobalStyle } from 'styled-components';


const Typography = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    p, li {
        letter-spacing: 0.5px;
        font-family: Lato;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Integral CF';
        color: var(--darkpurple);
        font-weight: normal;
        margin: 0;
    }
    h1{
    }
    h2{
    }
    h3{
    }
    a{
        color: inherit;
        text-decoration: none;
        &:hover{
        color: inherift;
        }
        &:visited{
        color: inherift;
        }
        &:active{
        color: inherift;
        }
    }
    mark, .mark {
        padding: 0 2px 2px 2px;
        margin: 0;
        display: inline;
        line-height: 1;
    }

    .center {
        text-align: center;
    }

    nav{
    }

    ul, li{
    }
`;

export default Typography;
