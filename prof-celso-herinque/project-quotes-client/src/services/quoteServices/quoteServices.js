//export const getQuote=()=>fetch(process.env.REACT_APP_API).then((response)=>response.json());

//Código implementado para o app funcionar sem um servidor de api.
import Mock from '../../mock';

const rndMock=()=>{
  let rnd=Math.floor(Math.random()*Mock.length);
  return Mock[rnd];
}

export const getQuote= ()=>JSON.stringify(rndMock());