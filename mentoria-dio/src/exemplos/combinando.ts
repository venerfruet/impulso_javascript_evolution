type input=number|string;

function somaValores(input1: input, input2: input){
   
   if(typeof input1 ==='string' || typeof input2==='string'){
      return input1.toString() + input2.toString();
   }else{
      return input1 + input2;
   }

}

console.log(somaValores(7,5));
console.log(somaValores('OLÁ, ', 'TUDO BEM?'));
console.log(somaValores('que dia é hoje? ',5));


