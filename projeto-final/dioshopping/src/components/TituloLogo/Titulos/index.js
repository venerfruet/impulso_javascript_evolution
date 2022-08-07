import styled from 'styled-components';
import ExodarOutlineEot from '../../../fonts/ExodarOutline.eot';
import ExodarOutlineWoff from '../../../fonts/ExodarOutline.woff';
import ExodarOutlineWoff2 from '../../../fonts/ExodarOutline.woff2';

export const Titulo1 = styled.h1`
  @font-face{
    font-family:'Exodar-Outline';
    src:url(${ExodarOutlineEot});
    src:url(${ExodarOutlineWoff}) format('woff'),
        url(${ExodarOutlineWoff2}) format('woff2');
  }
  font-size:3.5em;
  font-family:Exodar-Outline, fantasy, serif;
  color: deeppink;
  font-weight: bold;
  text-shadow: 0 0 7px deeppink;  
`;