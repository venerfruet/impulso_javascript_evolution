import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import homerImg from '../../images/homer.png';
import orientationImg from '../../images/rotatedevice.gif';
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
    //const quote=await getQuote();

    //*implementação sem servidor api
    const retorno=await getQuote();
    const quote=JSON.parse(retorno);
    //fim implementação
    
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
      <HomerImg alt='Imagem do personagem'></HomerImg>
    </Content>
  )
}

const Content=styled.div`
  height:100vh;
  padding:0 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  @media only screen and (orientation:portrait){
    flex-direction:column;
    align-itens:center;
  }
`;

const HomerImg=styled.div`
  height:100vh;
  width:50vh;
  background: url(${homerImg}) center no-repeat; 
  background-size: contain;

  @media only screen and (orientation:portrait){
    height:50vh;
    width:50vh;
    background: url(${orientationImg}) center no-repeat; 
    background-size: cover;
  }
`;
