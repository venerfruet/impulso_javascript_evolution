import React from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { StyledFilterBar, StyledIcon } from './styled';

const Filterbar = ({ active, children, onClick }) => {

  return (
    <>
      {active && (
        <StyledFilterBar onClick={onClick}>
          {children}
          <StyledIcon>
            <BiFilterAlt />
          </StyledIcon>
        </StyledFilterBar>
      )}
    </>
  );
}

export default Filterbar;