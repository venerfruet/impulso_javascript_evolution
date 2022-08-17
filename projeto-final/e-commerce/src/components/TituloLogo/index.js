import React from 'react';
import LogoMarca from './Logo';
import { Titulo1 } from './Titulos';
import { WrapperTituloLogo } from './styled';

const TituloLogo = () => {
  return (
    <WrapperTituloLogo>
      <LogoMarca /><Titulo1>Shopping</Titulo1>
    </WrapperTituloLogo>
  )
}

export default TituloLogo;