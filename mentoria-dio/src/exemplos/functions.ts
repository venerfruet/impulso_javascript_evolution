function somaValoresNumericosETratar(num1: number, num2: number, callback:(num: number)=> number): number{
   let result=num1+num2;
   return callback(result);
}

function aoQuadrado(num: number): number{
   return num*num;
}

function dividirPorEleMesmo(num: number): number{
   return num/num;
}

console.log(somaValoresNumericosETratar(1,3, aoQuadrado));
console.log(somaValoresNumericosETratar(1,3, dividirPorEleMesmo));

