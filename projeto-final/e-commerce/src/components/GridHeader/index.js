import React from 'react';
import { StyledGridHeader } from './styled';

const GridHeader = ({ children }) => {
  return (
    <StyledGridHeader>
      {children}
    </StyledGridHeader>
  );
}

export default GridHeader;