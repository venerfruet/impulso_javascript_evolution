import React from 'react';
import { StyledGridItem } from './styled';

const GridItem = ({ children }) => {
  return (
    <StyledGridItem>
      {children}
    </StyledGridItem>
  );
}

export default GridItem;