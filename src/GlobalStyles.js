import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #fff;
    color: #1c1c1c;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;