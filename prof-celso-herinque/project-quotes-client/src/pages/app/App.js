import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import homerImg from '../../images/homer.png';
import {Quotes} from '../../components';
import {getQuote} from '../../services';
import ohSureSound from '../../sounds/ohSure.mp3';

const audio=new Audio(ohSureSound);

export function App(){
  let isMounted=useRef(true);

  const [quoteState, setQuoteState]=useState({
    quote:'Carregando pérola...',
    speaker:'Carregando autor...'
  });

  const onUpdate=async ()=>{
    const quote=await getQuote();

    if(isMounted.current){
      audio.play();
      setQuoteState(quote);
    }
  }

  useEffect(()=>{
    onUpdate();

    return ()=>{
      isMounted.current=false;
    }
  },[]);

  return(
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate}/>
      <HomerImg src={homerImg} alt='Homer comendo rosquinha' />
    </Content>
  )
}

const Content=styled.div`
  height:100vh;
  padding:0 50px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const HomerImg=styled.img`
  max-height:100vh;
`;