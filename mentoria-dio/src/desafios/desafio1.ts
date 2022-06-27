// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//metodo 1
let employee = {
   code:0,
   name:''
};
employee.code = 10;
employee.name = "John";

//metodo 2
let employee2:{code:number, name:string}={
   code:0,
   name:''
}
employee2.code = 10;
employee2.name = "John";

//metodo 3
interface Employee{
   code:number,
   name:string
}

const employee3:Employee={
   code:0,
   name:''
}
employee3.code = 10;
employee3.name = "John";

//metodo 3.1
let employee4={} as Employee;
employee4.code=10;
employee4.name="John"
