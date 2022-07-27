import React from 'react';
import ReactDom from 'react-dom';
import { GloabalStyle } from './components/globalStyle/GlobalStyle';
import {App} from './pages';

const rootElement=document.getElementById('root');

ReactDom.render(
  <React.StrictMode>
    <GloabalStyle />
    <App />
  </React.StrictMode>,
  rootElement
);