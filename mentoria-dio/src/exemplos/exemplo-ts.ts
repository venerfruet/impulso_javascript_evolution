let input1=document.querySelector('#input1') as HTMLInputElement;
let input2=document.querySelector('#input2') as HTMLInputElement;
let button=document.querySelector('#button') as HTMLButtonElement;

function somaNumeros(num1:number, num2:number, devePrintar:boolean, frase:string){
   let result=num1+num2;
   if(devePrintar){
      console.log(frase + result);
   }
   return num1+num2;

}

let devePrintar=true;
let frase='O valor é '

if(button){
   button.addEventListener('click',()=>{
      if(input1 && input2){
         console.log(somaNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
      }
   });
}