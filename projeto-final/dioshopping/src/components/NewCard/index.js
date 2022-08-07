import React from 'react';
import { StyledNewCard } from './styled';

const NewCard = ({ children }) => {
  return (
    <StyledNewCard>
      {children}
    </StyledNewCard>
  );
}

export default NewCard;