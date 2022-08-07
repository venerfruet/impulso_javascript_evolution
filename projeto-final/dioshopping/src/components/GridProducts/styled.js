import styled from 'styled-components';

export const StyledGridProducts = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: space-between;
  @media only screen and (orientation:portrait){
    flex-direction:column;
    flex-flow: column;
    align-items: center;
    overflow: auto;
    height: 75vh;    
    width: auto;
  }
`;