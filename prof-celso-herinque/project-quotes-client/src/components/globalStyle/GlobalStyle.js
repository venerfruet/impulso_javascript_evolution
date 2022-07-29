import {createGlobalStyle} from 'styled-components';
import bgImg from '../../images/bg.jpg';
import simpsonFontEot from '../../fonts/AkbarPlain.eot';
import simpsonFontWoff from '../../fonts/AkbarPlain.woff';
import simpsonFontWoff2 from '../../fonts/AkbarPlain.woff2';

export const GloabalStyle=createGlobalStyle`
  @font-face{
    font-family:'Simpsons-Font';
    src:url(${simpsonFontEot});
    src:url(${simpsonFontWoff}) format('woff2'),
        url(${simpsonFontWoff2}) format('woff');
  }

  body{
    background: url(${bgImg}) center no-repeat;  
    background-size: cover;
    color:#332c36;
    passinf:0;
    margin:0;
    font-family:Simpsons-Font, serife;
  }

  @media only screen and (orientation:portrait){
    body {
      height: 50vw;
      background:none;
    }
  }
`;