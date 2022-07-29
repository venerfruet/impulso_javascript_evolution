import styled from 'styled-components';
import {string, func} from 'prop-types';
import {Button} from '../../components';

export const Quotes=({quote, speaker, onUpdate})=>{
  return(
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>{speaker}</Speaker>
      <Button onClick={onUpdate}>Soltar Pérola</Button>
    </Wrapper>
  );
}

Quotes.propTypes={
  quote:string,
  speaker:string,
  onUpdate:func
}

const Wrapper=styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media only screen and (orientation:portrait){
    display:none;
  }
`;

const Quote=styled.p`
  font-size:1.3em;
  background:#ffffffb3;
  padding:10px;
  border-radius:7px;
  marging:0;
  font-weight: bold;
`;

const Speaker=styled(Quote)`
  text-align:right;
  maring-botton:50px;
`;