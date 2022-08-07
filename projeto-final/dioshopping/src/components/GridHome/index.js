import React from 'react';
import { StyledGridHome } from './styled';

const GridHome = ({ children }) => {
  return (
    <StyledGridHome>
      {children}
    </StyledGridHome>
  );
}

export default GridHome;