import { createGlobalStyle } from 'styled-components';

import { color } from './color';
import { fontSize, fonts } from './fonts';
import { pixelToRem } from 'utils/common';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${pixelToRem(fontSize.font16)};
    font-family: ${fonts.primary};
    line-height: ${pixelToRem(22)};
    color: ${color.fontPrimaryDark};
  }

  html, body {
    background-color: #2e5090;
    color: ${color.light};
    padding: 0;
    height: 100%;
    margin: 0;
    border: none;
    outline: 0;
    font-weight: 200;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: ${pixelToRem(1)};
  }

  p {
    font-weight: 200;
    letter-spacing: ${pixelToRem(1)};
  }

  #root {
    height: 100%;
  }
`;
