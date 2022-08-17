import styled from 'styled-components';

export const StyledModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 95vw;
  height:70vh;
  z-index: 23;
  cursor: pointer;
`;

export const StyledModalContent = styled.div`
  overflow: auto;
  width:100%;
  height:100%;
`;

export const StyledModalContainer = styled.div`
  background-color: #e4bd02e6;
  border-radius: 13px;
  width: 100vw;
  height: 57vh;
  margin-top:7px;
  padding: 17px;
  border: 3px solid #e4bd02;
`;

export const StyledModalIcon = styled.div`
  float: right;
  border: 1px solid;
  border-radius: 50px;
  padding: 3px 3px 0 3px;
`;