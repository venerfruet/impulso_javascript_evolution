import React, { useState } from 'react';
import { StyledImg } from './styled';
import Loading from '../../images/loading.gif';

const ImageLoader = (params) => {

  const [src, setSrc] = useState(Loading);

  const img = new Image();
  img.src = params.src;

  img.onload = () => {
    setSrc(img.src);
  }

  return (
    <StyledImg src={src} alt={params.alt} />
  );

}

export default ImageLoader;