import { createGlobalStyle } from 'styled-components';
import ExodarOutlineEot from '../../fonts/ExodarOutline.eot';
import ExodarOutlineWoff from '../../fonts/ExodarOutline.woff';
import ExodarOutlineWoff2 from '../../fonts/ExodarOutline.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face{
      font-family:'Exodar-Outline';
      src:url(${ExodarOutlineEot});
      src:url(${ExodarOutlineWoff}) format('woff'),
          url(${ExodarOutlineWoff2}) format('woff2');
  }

  body{
    font-family:sans-serif;
    user-select: none;
  }
`;