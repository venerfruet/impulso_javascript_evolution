import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 300px;
  height: 100px;
  align-content: center;
  background-color: white;
  box-shadow: 3px 2px 10px rgb(0 0 0 / 20%);
`;

export const WrapperTitle = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 17px;
  max-width: 31ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media only screen and (orientation:portrait){
    max-width: 27ch;
  }  
`;

export const WrapperFullName = styled.h2`
  font-size: 0.9em;
  font-weight: normal;
  margin: 0 0;
  color: #2d3748;
`;

export const WrapperLink = styled.a`
  font-size: 0.9em;
  font-weight: normal;
  margin: 0 0;
  color: #3182ce;
`;
