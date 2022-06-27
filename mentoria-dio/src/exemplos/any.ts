let valorAny: any;
valorAny=3;
valorAny='olá';
valorAny=true;

let valortString: string='teste';
valortString=valorAny;
let valortString2: string='teste';
valortString2=valorAny;

function somarStrings(string1:string, string2:string){
   console.log(string1+string2);
}

somarStrings(valortString, valortString2);
