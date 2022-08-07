import React from 'react';
import { StyledGridProducts } from './styled';

const GridProducts = ({ children }) => {
  return (
    <StyledGridProducts>
      {children}
    </StyledGridProducts>
  );
}

export default GridProducts;