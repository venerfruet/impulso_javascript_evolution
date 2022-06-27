let anyEstaDeVolta: any;
anyEstaDeVolta=3;
anyEstaDeVolta='teste';

let stringTest:string='verificar';
stringTest=anyEstaDeVolta;

let unknownValor: unknown;
unknownValor=1;
unknownValor='opa';
unknownValor=true;
unknownValor='vai sim';

let stringTeste2: string='agora vai';

if(typeof unknownValor==='string'){
   stringTeste2=unknownValor;
}

function jogaErro(erro: string, codigo: number){
   throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);