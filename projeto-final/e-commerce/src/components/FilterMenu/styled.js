import styled from 'styled-components';

export const StyledList = styled.ul`
  font-size: 1.3em;
  list-style: none;
`;

export const StyledItem = styled.li`
  padding: 7px;
`;

export const StyledSelect = styled.input.attrs({ type: 'checkbox' })`
  cursor:pointer;
  margin-right: 11px;
`;