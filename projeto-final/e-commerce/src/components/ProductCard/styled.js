import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 7px;
  padding: 3px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin:11px 0;
  max-width: 211px;
  @media (orientation: portrait){
    max-width: 100%;
    width: 100%;
  }
`;

export const Titulo = styled.span`
  font-size: 1.3em;
  font-weight: bold;
  margin-top:7px;
  @media (orientation: portrait){
    font-size: 2em;
  }
`;

export const Normal = styled.span`
  font-size: 1em;
  margin-top:7px;
  @media (orientation: portrait){
    font-size: 1.5em;
  }
`;

export const Button = styled.button`
  margin-top: 11px;
  width: 70%;
  padding: 3px;
  cursor: pointer;
  @media (orientation: portrait){
    font-size: 1.5em;
  }
`;
