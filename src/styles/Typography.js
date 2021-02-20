import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/abel.woff2';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Abel;
    src: url(${font});
  }
  html {
    font-family: Abel, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
  }

  .center {
    text-align: center;
  }

`;

export default Typography;
