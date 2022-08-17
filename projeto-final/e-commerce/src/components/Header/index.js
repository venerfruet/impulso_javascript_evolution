import React from 'react';
import GridHeader from '../GridHeader';
import TituloLogo from '../TituloLogo';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <GridHeader>
      <TituloLogo />
      <Navbar />
    </GridHeader>
  )
}

export default Header;
