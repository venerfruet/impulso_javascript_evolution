import React from 'react';
import { StyledImg } from './styled';
//import Loading from '../../images/loading.gif';

const ImageLoader = (params) => {
  return (
    <StyledImg src={params.src} alt={params.alt} />
  );
}

export default ImageLoader;