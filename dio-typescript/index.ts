interface IPessoa{
   nome:string;
   idade:number;
   nacionalidade:string;
}

interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'>{}

const brasileiro:IBrasileiro={
   nome:'Vener Fruet daSilveira',
   idade:48
}

console.log(brasileiro);