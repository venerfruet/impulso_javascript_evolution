import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media only screen and (orientation:portrait){
    flex-direction: column;
  }  
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h1 {
    font-size: 1.5em;
    font-weight: bold;
  }

  h3 {
    font-size: 0.8em;
    font-weight: normal;
  }

  h4 {
    font-size: 0.8em;
    font-weight: normal;
    color:brown;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 0.8em;
    color: blue;
    font-weight: normal;
  }

`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 113px;
  margin: 8px;
`;

export const MascotImage = styled.img`
  width: 90px;
  padding-bottom:13px;
`;